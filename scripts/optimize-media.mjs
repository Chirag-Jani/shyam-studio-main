#!/usr/bin/env node
/**
 * Compresses images → WebP (max 1600px) and videos → H.264 1080p.
 * Originals are backed up to public/_originals/ (not committed).
 * Updates image paths in src TypeScript files.
 *
 * Usage: node scripts/optimize-media.mjs
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFile } from 'child_process';
import { promisify } from 'util';
import sharp from 'sharp';

const execFileAsync = promisify(execFile);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const IMAGES_DIR = path.join(ROOT, 'public/images');
const ORIGINALS_DIR = path.join(ROOT, 'public/_originals/images');
const SRC_DIR = path.join(ROOT, 'src');

const MAX_WIDTH = 1600;
const WEBP_QUALITY = 82;
const IMAGE_RE = /\.(jpe?g|png)$/i;

function formatBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

async function backup(src, relFromImages) {
  const dest = path.join(ORIGINALS_DIR, relFromImages);
  await fs.mkdir(path.dirname(dest), { recursive: true });
  try {
    await fs.access(dest);
  } catch {
    await fs.copyFile(src, dest);
  }
}

function toPublicUrl(relFromImages) {
  return `/images/${relFromImages.split(path.sep).join('/')}`;
}

async function optimizeImage(filePath) {
  if (!IMAGE_RE.test(filePath)) return null;

  const rel = path.relative(IMAGES_DIR, filePath);
  const oldUrl = toPublicUrl(rel);
  await backup(filePath, rel);

  const dir = path.dirname(filePath);
  const base = path.basename(filePath, path.extname(filePath)).toLowerCase();
  const outPath = path.join(dir, `${base}.webp`);

  const meta = await sharp(filePath).metadata();
  let pipeline = sharp(filePath).rotate();
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }
  await pipeline.webp({ quality: WEBP_QUALITY, effort: 4 }).toFile(outPath);

  const oldSize = (await fs.stat(filePath)).size;
  const newSize = (await fs.stat(outPath)).size;

  if (path.resolve(filePath) !== path.resolve(outPath)) {
    await fs.unlink(filePath);
  }

  const newUrl = toPublicUrl(path.relative(IMAGES_DIR, outPath));
  return { oldUrl, newUrl, oldSize, newSize };
}

async function optimizeVideo(filePath) {
  if (!filePath.endsWith('.mp4')) return null;

  const rel = path.relative(IMAGES_DIR, filePath);
  await backup(filePath, rel);

  const tmp = `${filePath}.tmp.mp4`;
  const oldSize = (await fs.stat(filePath)).size;

  await execFileAsync('ffmpeg', [
    '-y',
    '-i',
    filePath,
    '-vf',
    "scale='min(1080,iw)':-2",
    '-c:v',
    'libx264',
    '-crf',
    '28',
    '-preset',
    'medium',
    '-c:a',
    'aac',
    '-b:a',
    '96k',
    '-movflags',
    '+faststart',
    tmp,
  ]);

  await fs.rename(tmp, filePath);
  const newSize = (await fs.stat(filePath)).size;
  return { file: rel, oldSize, newSize };
}

async function updateSourceFiles(replacements) {
  const srcFiles = (await walk(SRC_DIR)).filter((f) => /\.(ts|tsx)$/.test(f));
  let totalReplacements = 0;

  for (const file of srcFiles) {
    let content = await fs.readFile(file, 'utf8');
    let changed = false;

    for (const { oldUrl, newUrl } of replacements) {
      if (content.includes(oldUrl)) {
        content = content.split(oldUrl).join(newUrl);
        changed = true;
        totalReplacements++;
      }
    }

    if (changed) await fs.writeFile(file, content, 'utf8');
  }

  return totalReplacements;
}

async function main() {
  console.log('Optimizing media in public/images …\n');

  const allFiles = await walk(IMAGES_DIR);
  const imageResults = [];
  const videoResults = [];

  for (const file of allFiles) {
    if (IMAGE_RE.test(file)) {
      const result = await optimizeImage(file);
      if (result) {
        imageResults.push(result);
        console.log(
          `  ✓ ${result.oldUrl} → ${result.newUrl}  (${formatBytes(result.oldSize)} → ${formatBytes(result.newSize)})`,
        );
      }
    }
  }

  for (const file of allFiles) {
    if (file.endsWith('.mp4')) {
      try {
        const result = await optimizeVideo(file);
        if (result) {
          videoResults.push(result);
          console.log(
            `  ✓ /images/${result.file}  (${formatBytes(result.oldSize)} → ${formatBytes(result.newSize)})`,
          );
        }
      } catch (err) {
        console.error(`  ✗ /images/${path.relative(IMAGES_DIR, file)}: ${err.message}`);
      }
    }
  }

  const replacements = imageResults.filter((r) => r.oldUrl !== r.newUrl);
  if (replacements.length) {
    const n = await updateSourceFiles(replacements);
    console.log(`\nUpdated ${n} path reference(s) in src/`);
  }

  const imageSaved = imageResults.reduce((s, r) => s + r.oldSize - r.newSize, 0);
  const videoSaved = videoResults.reduce((s, r) => s + r.oldSize - r.newSize, 0);

  console.log('\n--- Summary ---');
  console.log(`Images: ${imageResults.length} optimized, saved ${formatBytes(imageSaved)}`);
  console.log(`Videos: ${videoResults.length} optimized, saved ${formatBytes(videoSaved)}`);
  console.log(`Originals backed up to public/_originals/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

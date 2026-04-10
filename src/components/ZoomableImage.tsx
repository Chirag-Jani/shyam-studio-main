import { useCallback, useState, type ImgHTMLAttributes, type KeyboardEvent, type MouseEvent } from 'react';
import { ImageLightboxOverlay } from '@/components/ImageLightboxOverlay';

type ZoomableImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'onClick'> & {
  zoomCaption?: string;
  zoomSubcaption?: string;
};

export function ZoomableImage({
  src,
  alt,
  className = '',
  zoomCaption,
  zoomSubcaption,
  ...rest
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  const openLightbox = useCallback((e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setOpen(true);
  }, []);

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLImageElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(true);
    }
  }, []);

  if (!src) return null;

  return (
    <>
      <img
        {...rest}
        src={src}
        alt={alt ?? ''}
        className={`cursor-zoom-in ${className}`.trim()}
        onClick={openLightbox}
        role="button"
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-haspopup="dialog"
        aria-expanded={open}
      />
      <ImageLightboxOverlay
        open={open}
        src={src}
        alt={alt ?? ''}
        onClose={() => setOpen(false)}
        caption={zoomCaption}
        subcaption={zoomSubcaption}
      />
    </>
  );
}

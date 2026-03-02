import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
  splitBy?: 'words' | 'chars';
}

const AnimatedText = ({ text, className = '', as: Tag = 'h2', delay = 0, splitBy = 'words' }: AnimatedTextProps) => {
  const items = splitBy === 'words' ? text.split(' ') : text.split('');

  return (
    <Tag className={`${className} overflow-hidden`}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.05,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {item}{splitBy === 'words' ? '\u00A0' : ''}
        </motion.span>
      ))}
    </Tag>
  );
};

export default AnimatedText;

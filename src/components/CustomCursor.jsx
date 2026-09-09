import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default'); // 'default' | 'pointer' | 'view'
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer (desktop / mouse) devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Detect hover target
      const target = e.target;
      if (target.closest('[data-cursor="view"]')) {
        setCursorType('view');
      } else if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select')
      ) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Small Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-luxury-cream mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: cursorType === 'view' ? 0 : cursorType === 'pointer' ? 0.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.1 }}
      />

      {/* Trailing Outer Ring / VIEW indicator */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center text-luxury-black font-semibold text-[10px] tracking-widest ${
          cursorType === 'view'
            ? 'bg-luxury-cream text-luxury-black border border-luxury-cream shadow-2xl'
            : cursorType === 'pointer'
            ? 'border border-luxury-gold/70 bg-luxury-gold/10'
            : 'border border-luxury-cream/30'
        }`}
        animate={{
          x: cursorType === 'view' ? mousePosition.x - 40 : mousePosition.y ? mousePosition.x - 20 : 0,
          y: cursorType === 'view' ? mousePosition.y - 40 : mousePosition.y - 20,
          width: cursorType === 'view' ? 80 : cursorType === 'pointer' ? 40 : 40,
          height: cursorType === 'view' ? 80 : cursorType === 'pointer' ? 40 : 40,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 220, mass: 0.2 }}
      >
        {cursorType === 'view' && (
          <span className="font-editorial-sans font-bold tracking-widest text-xs uppercase">
            VIEW
          </span>
        )}
      </motion.div>
    </div>
  );
}

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
      {/* Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-editorial-black"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: cursorType === 'view' ? 0 : cursorType === 'pointer' ? 0.6 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.1 }}
      />

      {/* Trailing Outer Ring / VIEW badge */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center text-editorial-black font-semibold text-[10px] tracking-widest ${
          cursorType === 'view'
            ? 'bg-editorial-black text-white border border-editorial-black shadow-2xl'
            : cursorType === 'pointer'
            ? 'border border-editorial-accent bg-editorial-accent-subtle'
            : 'border border-editorial-black/25'
        }`}
        animate={{
          x: cursorType === 'view' ? mousePosition.x - 36 : mousePosition.x - 18,
          y: cursorType === 'view' ? mousePosition.y - 36 : mousePosition.y - 18,
          width: cursorType === 'view' ? 72 : 36,
          height: cursorType === 'view' ? 72 : 36,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 240, mass: 0.2 }}
      >
        {cursorType === 'view' && (
          <span className="font-editorial-sans font-medium tracking-widest text-[11px] uppercase">
            VIEW
          </span>
        )}
      </motion.div>
    </div>
  );
}

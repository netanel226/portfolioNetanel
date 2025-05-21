import React, { useState, useEffect } from 'react';
import { Fab, useTheme } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollControls = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          transformOrigin: '0%',
          scaleX,
          zIndex: 9999
        }}
      />

      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 9999
        }}
      >
        <Fab
          onClick={scrollToTop}
          sx={{
            background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            color: 'white',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
              transform: 'scale(1.1)'
            }
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </motion.div>
    </>
  );
};

export default ScrollControls; 
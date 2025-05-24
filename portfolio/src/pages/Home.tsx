import React, { Suspense, useEffect, useRef } from 'react';
import { Box, Typography, Button, Container, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const StyledBox = styled(Box)({
  height: '100vh',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#1a1a1a',
  backgroundImage: 'linear-gradient(rgba(25, 14, 75, 0.43), rgba(4, 1, 12, 0.7))',
});

const CanvasContainer = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  opacity: 0.8,
  pointerEvents: 'none'
});

const ContentContainer = styled(Container)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  zIndex: 1,
  color: 'white',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
});

const StyledTypography = styled(Typography)({
  fontSize: '4rem',
  fontWeight: 700,
  marginBottom: '16px',
  '@media (max-width: 600px)': {
    fontSize: '2.5rem',
  },
});

const SubtitleTypography = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 500,
  marginBottom: '32px',
  '@media (max-width: 600px)': {
    fontSize: '1.5rem',
  },
});

const StyledButton = styled(Button)({
  fontSize: '1.2rem',
  padding: '12px 32px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});

const Scene: React.FC = () => {
  const starsRef = useRef<any>();
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y = scrollY.current * 0.0002;
      starsRef.current.rotation.x = scrollY.current * 0.0001;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars
        ref={starsRef}
        radius={100}
        depth={50}
        count={7000}
        factor={4}
        saturation={0}
        fade
        speed={0.05}
      />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </>
  );
};

const Home: React.FC = () => {
  return (
    <StyledBox id="home">
      <CanvasContainer>
        <Canvas>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </CanvasContainer>

      <ContentContainer maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <StyledTypography variant="h1">
            InnoBridge
          </StyledTypography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SubtitleTypography variant="h2">
            פיתוח כלים טכנולוגיים לייעול תהליכי עבודה ולמידה
          </SubtitleTypography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <StyledButton
            variant="contained"
            size="large"
            href="#contact"
          >
            צור קשר
          </StyledButton>
        </motion.div>
      </ContentContainer>
    </StyledBox>
  );
};

export default Home; 
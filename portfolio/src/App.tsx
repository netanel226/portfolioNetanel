import React from 'react';
import { Box, styled } from '@mui/material';
import Navbar from './components/Navbar';
import AccessibilityMenu from './components/AccessibilityMenu';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';

const MainBox = styled(Box)({
  minHeight: '100vh',
  position: 'relative'
});

const App: React.FC = () => {
  return (
    <MainBox>
      <Navbar />
      <Box component="main">
        <Home />
        <About />
        <Projects />
        <Services />
        <Contact />
      </Box>
      <AccessibilityMenu />
      <WhatsAppButton />
    </MainBox>
  );
};

export default App; 
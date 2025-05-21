import React, { useState } from 'react';
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline, 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box, 
  Button,
  IconButton,
  useMediaQuery,
  Direction,
  StyledEngineProvider
} from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { motion } from 'framer-motion';
import { projectSections } from './data/projects';
import Section from './components/Section';
import Hero from './components/Hero';
import About from './components/About';
import Organizations from './components/Organizations';
import Contact from './components/Contact';
import ScrollControls from './components/ScrollControls';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
  prepend: true,
});

// Custom theme colors
const getDesignTokens = (mode: 'light' | 'dark') => ({
  direction: 'rtl' as Direction,
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#2196f3' : '#90caf9',
      light: '#64b5f6',
      dark: '#1976d2',
    },
    secondary: {
      main: mode === 'light' ? '#f50057' : '#f48fb1',
    },
    background: {
      default: mode === 'light' ? '#f5f5f7' : '#0a1929',
      paper: mode === 'light' ? '#ffffff' : '#1a2027',
    },
    text: {
      primary: mode === 'light' ? '#1a2027' : '#ffffff',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Arial Hebrew", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Arial Hebrew", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      background: mode === 'light' 
        ? 'linear-gradient(45deg, #2196f3 30%, #f50057 90%)'
        : 'linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Arial Hebrew", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Arial Hebrew", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Arial Hebrew", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Arial Hebrew", "Helvetica", "Arial", sans-serif',
    },
    button: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Arial Hebrew", "Helvetica", "Arial", sans-serif',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: mode === 'light' 
            ? '0 8px 24px rgba(0,0,0,0.1)'
            : '0 8px 24px rgba(0,0,0,0.2)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: mode === 'light'
              ? '0 12px 32px rgba(0,0,0,0.15)'
              : '0 12px 32px rgba(0,0,0,0.3)',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: 'transparent',
          },
        } as any,
      },
    },
  },
});

// Sample data
const personalInfo = {
  name: 'נתנאל איזנקוט',
  title: 'מפתח Full Stack & טכנולוגיות למידה',
  subtitle: 'יוצר פתרונות טכנולוגיים חדשניים',
  profileImage: '/profile.jpg', // Add your profile image to the public folder
};

const aboutData = {
  description: ' מומחה בפיתוח הדרכה, הובלת תהליכי למידה וניהול פרויקטים טכנולוגיים. בעל ניסיון בניהול צוותי הדרכה, פיתוח אמצעי למידה דיגיטליים ושימוש בכלים טכנולוגיים מתקדמים. משלב יכולות תכנות עם יצירת חוויות למידה חדשניות, מותאמות ומדויקות לקהל היעד.',
  skills: [
    { name: 'ניהול פרויקטים' },
    { name: 'בניית אתרים Full Stack' },
    { name: 'פיתוח כלי AI' },
    { name: 'אפיון כלים הדרכתיים' },
    { name: 'איתור צרכים' },
    { name: 'בניית הכשרות' },
    { name: 'אמצעי הדרכה' }
  ],
};

const organizationsData = {
  organizations: [
    // Add your organizations data here
    // Example:
    // { name: 'Company Name', logo: '/company-logo.png', link: 'https://company.com' },
  ],
};

const contactInfo = {
  email: 'netanelor2@gmail.com',
  phone: '054-2262242',
  linkedin: 'https://linkedin.com/in/netanel-eizenkot-254098225',
  github: 'https://github.com/yourusername',
};

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <CacheProvider value={cacheRtl}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ScrollControls />
          <AppBar position="fixed" elevation={0} color="transparent" sx={{ backdropFilter: 'blur(8px)' }}>
            <Toolbar>
              <Typography variant="h6" color="primary" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                התיק שלי
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <IconButton onClick={toggleTheme} color="primary">
                  {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                </IconButton>
                {projectSections.map((section) => (
                  <Button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    color="primary"
                    sx={{
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '0%',
                        height: '2px',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'primary.main',
                        transition: 'width 0.3s ease-in-out',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  >
                    {section.title}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>

          <Container maxWidth={false} sx={{ bgcolor: 'background.default', minHeight: '100vh', pt: 12 }}>
            {/* Hero Section */}
            <Hero {...personalInfo} />

            {/* About Section */}
            <About {...aboutData} />

            {/* Projects Sections */}
            <Box>
              {projectSections.map((section) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Section section={section} />
                </motion.div>
              ))}
            </Box>

            {/* Organizations Section */}
            <Organizations {...organizationsData} />

            {/* Contact Section */}
            <Contact {...contactInfo} />
          </Container>
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Paper, Typography, Container, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import WebIcon from '@mui/icons-material/Web';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import SchoolIcon from '@mui/icons-material/School';

interface Skill {
  name: string;
}

interface AboutProps {
  description: string;
  skills: Skill[];
}

const getSkillIcon = (skillName: string) => {
  switch (skillName) {
    case 'ניהול פרויקטים':
      return <AccountTreeIcon sx={{ fontSize: 64 }} />;
    case 'בניית אתרים Full Stack':
      return <WebIcon sx={{ fontSize: 64 }} />;
    case 'פיתוח כלי AI':
      return <PsychologyIcon sx={{ fontSize: 64 }} />;
    case 'אפיון כלים הדרכתיים':
      return <DesignServicesIcon sx={{ fontSize: 64 }} />;
    case 'איתור צרכים':
      return <TroubleshootIcon sx={{ fontSize: 64 }} />;
    case 'בניית הכשרות':
      return <CastForEducationIcon sx={{ fontSize: 64 }} />;
    case 'אמצעי הדרכה':
      return <SchoolIcon sx={{ fontSize: 64 }} />;
    default:
      return <WebIcon sx={{ fontSize: 64 }} />;
  }
};

const About: React.FC<AboutProps> = ({ description, skills }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const itemsToShow = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % (skills.length - itemsToShow + 1)
        );
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovered, skills.length]);

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        bgcolor: 'background.paper',
        py: 8,
        borderRadius: 4,
        mb: 8
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" gutterBottom>
              קצת עליי
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: '1.2rem', 
                lineHeight: 1.8,
                maxWidth: '900px',
                mx: 'auto',
                px: 2,
                textAlign: 'center'
              }}
            >
              {description}
            </Typography>
          </Box>

          <Box 
            sx={{ 
              mt: 8,
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 4,
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(${currentIndex * -220}px)`,
                direction: 'ltr' // For correct sliding direction
              }}
            >
              {skills.map((skill, index) => (
                <Box
                  key={skill.name}
                  sx={{
                    minWidth: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 2,
                    p: 3,
                    borderRadius: 2,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      transition: 'all 0.3s ease-in-out',
                      mb: 2,
                      '&:hover': {
                        transform: 'scale(1.1) rotate(5deg)',
                        color: 'secondary.main'
                      }
                    }}
                  >
                    {getSkillIcon(skill.name)}
                  </Box>
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    sx={{ 
                      fontWeight: 500,
                      lineHeight: 1.4,
                      direction: 'rtl' // Keep text right-to-left
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Paper>
  );
};

export default About; 
import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ContactProps {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

const Contact: React.FC<ContactProps> = ({ email, phone, linkedin, github }) => {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: 6,
        bgcolor: 'background.paper',
        borderRadius: 4,
        mb: 8,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom
            sx={{
              fontSize: '3rem',
              fontWeight: 700,
              background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 4
            }}
          >
            צור קשר
          </Typography>

          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
            mt: 2,
            flexWrap: 'wrap'
          }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}>
              <IconButton 
                component={Link}
                href={`mailto:${email}`}
                color="primary"
                sx={{ 
                  '& svg': { 
                    fontSize: '2.5rem',
                    transition: 'all 0.3s ease'
                  },
                  '&:hover': {
                    '& svg': {
                      transform: 'scale(1.1)',
                      color: 'secondary.main'
                    }
                  }
                }}
              >
                <EmailIcon />
              </IconButton>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontSize: '1.4rem',
                  fontWeight: 500,
                  color: 'text.primary',
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >
                {email}
              </Typography>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}>
              <IconButton 
                component={Link}
                href={`tel:${phone}`}
                color="primary"
                sx={{ 
                  '& svg': { 
                    fontSize: '2.5rem',
                    transition: 'all 0.3s ease'
                  },
                  '&:hover': {
                    '& svg': {
                      transform: 'scale(1.1)',
                      color: 'secondary.main'
                    }
                  }
                }}
              >
                <PhoneIcon />
              </IconButton>
              <Typography 
                variant="h6"
                sx={{ 
                  fontSize: '1.4rem',
                  fontWeight: 500,
                  color: 'text.primary',
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >
                {phone}
              </Typography>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 4,
              '& > a': {
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px) scale(1.1)'
                }
              }
            }}>
              <IconButton 
                component={Link}
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                sx={{ 
                  '& svg': { 
                    fontSize: '3rem',
                    transition: 'all 0.3s ease'
                  },
                  '&:hover': {
                    '& svg': {
                      color: 'secondary.main'
                    }
                  }
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                component={Link}
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                sx={{ 
                  '& svg': { 
                    fontSize: '3rem',
                    transition: 'all 0.3s ease'
                  },
                  '&:hover': {
                    '& svg': {
                      color: 'secondary.main'
                    }
                  }
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 
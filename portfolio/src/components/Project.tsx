import React from 'react';
import { Box, Typography, Paper, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { Project as ProjectType } from '../types/types';
import { motion } from 'framer-motion';

interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Paper 
      elevation={0}
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      sx={{
        p: 6,
        borderRadius: 4,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        direction: 'rtl',
        mb: 6,
        maxWidth: '1600px',
        mx: 'auto',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}08, ${theme.palette.secondary.main}08)`,
          opacity: 0,
          transition: 'opacity 0.3s ease',
        },
        '&:hover::before': {
          opacity: 1
        },
        '&:hover': {
          transform: 'translateY(-4px)',
          transition: 'transform 0.3s ease',
          boxShadow: (theme) => `0 12px 40px ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.3)'}`
        }
      }}
    >
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: '2fr 2fr',
        gap: 10,
        alignItems: 'start',
        minHeight: '400px',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Text Content - Right Side */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 5,
          width: '100%',
          pr: 4,
        }}>
          <Box 
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start' 
            }}
          >
            <Typography variant="h3" component="h3" gutterBottom sx={{ 
              textAlign: 'right',
              fontSize: '2.5rem',
              fontWeight: 700,
              mb: 3
            }}>
              {project.title}
            </Typography>
            <Box sx={{ ml: 'auto', mr: 0 }}>
              {project.githubUrl && (
                <IconButton 
                  component="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{ 
                    ml: 1,
                    '& svg': {
                      fontSize: '2rem'
                    }
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              )}
              {project.liveUrl && (
                <IconButton
                  component="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{
                    '& svg': {
                      fontSize: '2rem'
                    }
                  }}
                >
                  <LaunchIcon />
                </IconButton>
              )}
            </Box>
          </Box>

          <Typography 
            component={motion.p}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variant="body1" 
            color="text.secondary" 
            paragraph 
            sx={{ 
              textAlign: 'right',
              fontSize: '1.2rem',
              lineHeight: 1.8,
              mb: 3,
              maxWidth: '90%'
            }}
          >
            {project.description}
          </Typography>

          <Box 
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 2.5, 
              justifyContent: 'flex-start' 
            }}
          >
            {project.technologies.map((tech, index) => (
              <Typography
                key={tech}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                sx={{
                  px: 2.5,
                  py: 1,
                  borderRadius: 2,
                  bgcolor: 'primary.main',
                  color: 'background.paper',
                  fontWeight: 'medium',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    bgcolor: 'secondary.main'
                  }
                }}
              >
                {tech}
              </Typography>
            ))}
          </Box>

          {project.buildProcess && (
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ 
                mt: 3, 
                textAlign: 'right',
                fontSize: '1rem',
                lineHeight: 1.8,
                maxWidth: '90%'
              }}
            >
              {project.buildProcess}
            </Typography>
          )}
        </Box>

        {/* Media Content - Left Side */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          height: '100%',
          maxHeight: '450px',
          overflow: 'hidden',
          width: '90%',
          pl: 2,
          position: 'relative',
          '& img, & video': {
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'scale(1.03)'
            }
          }
        }}>
          {project.media.map((media, index) => (
            media.type === 'image' ? (
              <img
                key={index}
                src={media.url}
                alt={media.alt || project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}
              />
            ) : (
              <video
                key={index}
                src={media.url}
                controls
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}
              />
            )
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default Project;
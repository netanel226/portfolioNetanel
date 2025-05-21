import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { Section as SectionType } from '../types/types';
import Project from './Project';

interface SectionProps {
  section: SectionType;
}

const Section: React.FC<SectionProps> = ({ section }) => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Box sx={{ 
          position: 'relative', 
          mb: 4,
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              textAlign: 'right',
              fontWeight: 'bold',
              color: 'primary.main',
              position: 'relative',
              display: 'inline-block',
              '&::before': {
                content: '""',
                position: 'absolute',
                width: '120%',
                height: '40%',
                bottom: 0,
                right: '-10%',
                background: (theme) => `linear-gradient(90deg, 
                  ${theme.palette.primary.main}15, 
                  ${theme.palette.primary.main}00)`,
                zIndex: -1,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '60px',
                height: '4px',
                bottom: '-8px',
                right: '0',
                background: (theme) => `linear-gradient(90deg, 
                  ${theme.palette.primary.main}, 
                  ${theme.palette.secondary.main})`,
                borderRadius: '2px',
              }
            }}
          >
            {section.title}
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'grid', 
            gap: 4,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: -20,
              width: 4,
              height: '100%',
              background: (theme) => `linear-gradient(180deg, 
                ${theme.palette.primary.main}30,
                ${theme.palette.secondary.main}30)`,
              borderRadius: 2,
            }
          }}
        >
          {section.projects.map((project, index) => (
            <Box key={project.id}>
              <Project project={project} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Section; 
import React from 'react';
import { Box, Typography, Container, Avatar, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

interface HeroProps {
  name: string;
  title: string;
  subtitle: string;
  profileImage: string;
}

const Hero: React.FC<HeroProps> = ({ name, title, subtitle, profileImage }) => {
  return (
    <Paper 
      elevation={0} 
      sx={{ 
        bgcolor: 'background.paper',
        py: 8,
        borderRadius: 4,
        mb: 8,
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" direction="row-reverse">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h1" gutterBottom sx={{ textAlign: 'right' }}>
                {name}
              </Typography>
              <Typography variant="h4" color="primary" gutterBottom sx={{ textAlign: 'right' }}>
                {title}
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4, textAlign: 'right' }}>
                {subtitle}
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Avatar
                  src="/media/images/profilepic.jpeg"
                  alt={name}
                  sx={{
                    width: { xs: 200, sm: 250, md: 300, lg: 350 },
                    height: { xs: 200, sm: 250, md: 300, lg: 350 },
                    mx: 'auto',
                    boxShadow: 8,
                    border: '4px solid',
                    borderColor: 'primary.main',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    transform: 'scale(1.2)',
                    '&:hover': {
                      transform: 'scale(1.25)',
                      transition: 'transform 0.3s ease-in-out',
                    }
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Hero; 
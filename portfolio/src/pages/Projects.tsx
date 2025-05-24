import React, { Suspense, useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const StyledBox = styled(Box)({
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
  backgroundImage: 'linear-gradient(180deg,rgba(15, 12, 36, 0.98) 0%,rgb(17, 21, 51) 60%, #04010c 100%)',
  color: 'white',
});

const StarsBackground = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  pointerEvents: 'none',
});

const StyledContainer = styled(Container)({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
});

const CanvasBox = styled(Box)({
  height: '400px',
  marginBottom: '64px',
  position: 'relative',
  zIndex: 1,
});

const TechnologiesBox = styled(Box)({
  marginTop: '16px',
});

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  position: 'relative',
  zIndex: 2,
  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
});

const StyledButton = styled(Button)({
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

const Scene: React.FC<{ isScattering: boolean }> = ({ isScattering }) => {
  const starsRef = React.useRef<any>();
  const scrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    if (starsRef.current) {
      if (isScattering) {
        starsRef.current.rotation.y += 0.0009;
        starsRef.current.rotation.x += 0.0005;
      } else {
        starsRef.current.rotation.y = scrollY.current * 0.0002;
        starsRef.current.rotation.x = scrollY.current * 0.0001;
      }
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <Stars
        ref={starsRef}
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <OrbitControls enableZoom={false} />
    </>
  );
};

const projects = [
  {
    title: 'אתר פורטפוליו',
    description: 'אתר תדמית מודרני עם אנימציות מתקדמות',
    image: '/projects/portfolio.jpg',
    technologies: ['React', 'Three.js', 'Material-UI'],
    link: '#',
  },
  {
    title: 'AI Agent לאוטומציה',
    description: 'סוכן בינה מלאכותית לייעול תהליכי עבודה',
    image: '/projects/ai-agent.jpg',
    technologies: ['Python', 'OpenAI', 'FastAPI'],
    link: '#',
  },
  {
    title: 'דף נחיתה',
    description: 'דף נחיתה ממוקד המרה עם אנליטיקס',
    image: '/projects/landing.jpg',
    technologies: ['React', 'Google Analytics', 'A/B Testing'],
    link: '#',
  },
];

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isScattering, setIsScattering] = useState(false);

  return (
    <StyledBox id="projects">
      <StarsBackground>
        <Canvas camera={{ position: [0, 0, 5] }} style={{ width: '100%', height: '100%' }}>
          <Suspense fallback={null}>
            <Scene isScattering={isScattering} />
          </Suspense>
        </Canvas>
      </StarsBackground>
      <StyledContainer maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ width: '100%' }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{ 
              mb: 6,
              color: 'white',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              position: 'relative',
              zIndex: 2,
            }}
          >
            פרויקטים
          </Typography>
          <Grid container spacing={4} sx={{ position: 'relative', zIndex: 2, justifyContent: 'center' }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    rotateX: 6,
                    rotateY: -6,
                    boxShadow: '0 8px 32px 0 #00e6ff88, 0 2px 8px #fff',
                  }}
                  style={{ willChange: 'transform, box-shadow' }}
                  onMouseEnter={() => setIsScattering(true)}
                  onMouseLeave={() => setIsScattering(false)}
                >
                  <StyledCard>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1, color: 'white' }}>
                      <Typography gutterBottom variant="h5" component="h3" sx={{ color: 'white' }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        {project.description}
                      </Typography>
                      <TechnologiesBox>
                        {project.technologies.map((tech, i) => (
                          <Typography
                            key={i}
                            variant="caption"
                            sx={{
                              display: 'inline-block',
                              mr: 1,
                              mb: 1,
                              px: 1,
                              py: 0.5,
                              backgroundColor: 'rgba(255, 255, 255, 0.2)',
                              color: 'white',
                              borderRadius: 1,
                            }}
                          >
                            {tech}
                          </Typography>
                        ))}
                      </TechnologiesBox>
                    </CardContent>
                    <CardActions>
                      <StyledButton size="small" href={project.link}>
                        צפה בפרויקט
                      </StyledButton>
                    </CardActions>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </StyledContainer>
    </StyledBox>
  );
};

export default Projects; 
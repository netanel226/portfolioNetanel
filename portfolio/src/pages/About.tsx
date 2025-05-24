import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StyledBox = styled(Box)({
  paddingTop: '64px',
  paddingBottom: '64px',
  backgroundColor: '#1a1a1a',
  color: 'white',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(rgba(27, 2, 75, 0.7), rgba(8, 4, 19, 0.7))',
    zIndex: 0,
  },
});

const StyledContainer = styled(Container)({
  position: 'relative',
  zIndex: 1,
});

// רכיב חלקיקים
const Particles: React.FC = () => {
  // נקודות שיגור קבועות (פינות וקצוות)
  const launchPoints = [
    { x: '0%', y: '0%' }, // top-left
    { x: '100%', y: '0%' }, // top-right
    { x: '0%', y: '100%' }, // bottom-left
    { x: '100%', y: '100%' }, // bottom-right
    { x: '50%', y: '0%' }, // top-center
    { x: '50%', y: '100%' }, // bottom-center
    { x: '0%', y: '50%' }, // left-center
    { x: '100%', y: '50%' }, // right-center
  ];
  // חלקיקים מהקצוות/פינות
  const edgeParticles = launchPoints.flatMap((point, idx) =>
    Array.from({ length: 2 }).map((_, i) => {
      const angle = Math.random() * 2 * Math.PI;
      const distance = 28 + Math.random() * 18;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      const duration = 0.7 + Math.random() * 0.4;
      const size = 3 + Math.random() * 2;
      const color = Math.random() > 0.5 ? '#fff' : '#00e6ff';
      return (
        <div
          key={`edge-${idx}-${i}`}
          style={{
            position: 'absolute',
            left: point.x,
            top: point.y,
            width: size,
            height: size,
            borderRadius: '50%',
            background: color,
            opacity: 0.85,
            pointerEvents: 'none',
            boxShadow: `0 0 8px 2px ${color}cc, 0 0 16px 4px #fff2`,
            transform: 'translate(-50%, -50%)',
            animation: `star-dust-edge-fly  ${duration}s cubic-bezier(0.4,0,0.2,1) forwards`,
            animationDelay: `${Math.random() * 0.12}s`,
            zIndex: 10,
            '--dx': `${dx}px`,
            '--dy': `${dy}px`,
          } as React.CSSProperties}
        />
      );
    })
  );
  // חלקיקים רנדומליים סביב המסגרת
  const borderParticles = Array.from({ length: 12 }).map((_, i) => {
    // בחר צד רנדומלי
    const side = Math.floor(Math.random() * 4);
    let x = 0, y = 0;
    if (side === 0) { // top
      x = Math.random() * 100;
      y = 0;
    } else if (side === 1) { // right
      x = 100;
      y = Math.random() * 100;
    } else if (side === 2) { // bottom
      x = Math.random() * 100;
      y = 100;
    } else { // left
      x = 0;
      y = Math.random() * 100;
    }
    const angle = Math.random() * 2 * Math.PI;
    const distance = 22 + Math.random() * 18;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const duration = 0.6 + Math.random() * 0.5;
    const size = 2 + Math.random() * 2;
    const color = Math.random() > 0.5 ? '#fff' : '#00e6ff';
    return (
      <div
        key={`border-${i}`}
        style={{
          position: 'absolute',
          left: `${x}%`,
          top: `${y}%`,
          width: size,
          height: size,
          borderRadius: '50%',
          background: color,
          opacity: 0.8,
          pointerEvents: 'none',
          boxShadow: `0 0 6px 1.5px ${color}bb, 0 0 10px 2px #fff2`,
          transform: 'translate(-50%, -50%)',
          animation: `star-dust-edge-fly ${duration}s cubic-bezier(0.4,0,0.2,1) forwards`,
          animationDelay: `${Math.random() * 0.18}s`,
          zIndex: 10,
          '--dx': `${dx}px`,
          '--dy': `${dy}px`,
        } as React.CSSProperties}
      />
    );
  });
  return <>{edgeParticles}{borderParticles}</>;
};

// עדכן את האנימציה הגלובלית
if (typeof window !== 'undefined' && !document.getElementById('star-dust-edge-fly-style')) {
  const style = document.createElement('style');
  style.id = 'star-dust-edge-fly-style';
  style.innerHTML = `
    @keyframes star-dust-edge-fly {
      to {
        opacity: 0;
        filter: blur(2px) brightness(2);
        transform: translate(-50%, -50%) translate(var(--dx), var(--dy)) scale(1.3);
      }
    }
  `;
  document.head.appendChild(style);
}

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skills = [
    { title: 'פיתוח אתרים', description: 'בניית אתרים מודרניים ורספונסיביים' },
    { title: 'AI Agents', description: 'פיתוח סוכני בינה מלאכותית לאוטומציה' },
    { title: 'דפי נחיתה', description: 'עיצוב ופיתוח דפי נחיתה ממוקדי המרה' },
    { title: 'אוטומציה', description: 'ייעול תהליכי עבודה באמצעות אוטומציה' },
  ];

  return (
    <StyledBox id="about">
      <StyledContainer maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{ 
              mb: 6,
              color: 'white',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            אודות
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ 
              mb: 8, 
              maxWidth: '800px', 
              mx: 'auto',
              color: 'white',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
            }}
          >
            InnoBridge
            חברה המתמחה ביצירת פתרונות חדשניים
            לייעול תהליכי עבודה ולמידה. עם ניסיון רב בפיתוח אתרים, דפי נחיתה וכלי
            AI, אנו מסייעים לארגונים ולאנשים פרטיים להשיג את המטרות שלהם באמצעות
            טכנולוגיה מתקדמת.
          </Typography>

          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      transition: 'transform 0.3s ease-in-out',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      position: 'relative',
                      overflow: 'visible',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      },
                      cursor: 'pointer',
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {hoveredIndex === index && <Particles />}
                    <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'white' }}>
                      {skill.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      {skill.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </StyledContainer>
    </StyledBox>
  );
};

export default About; 
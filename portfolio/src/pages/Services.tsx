import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Web as WebIcon,
  Code as CodeIcon,
  AutoAwesome as AutoAwesomeIcon,
  Speed as SpeedIcon,
} from '@mui/icons-material';

const services = [
  {
    title: 'פיתוח אתרים',
    icon: <WebIcon sx={{ fontSize: 40, color: 'white' }} />,
    description: 'בניית אתרים מודרניים ורספונסיביים',
    features: [
      'עיצוב מותאם אישית',
      'ממשק משתמש אינטואיטיבי',
      'ביצועים מהירים',
      'תמיכה במובייל',
    ],
  },
  {
    title: 'AI Agents',
    icon: <AutoAwesomeIcon sx={{ fontSize: 40, color: 'white' }} />,
    description: 'פיתוח סוכני בינה מלאכותית',
    features: [
      'אוטומציה של תהליכים',
      'ניתוח נתונים חכם',
      'אינטגרציה עם מערכות קיימות',
      'למידה מתמשכת',
    ],
  },
  {
    title: 'דפי נחיתה',
    icon: <CodeIcon sx={{ fontSize: 40, color: 'white' }} />,
    description: 'עיצוב ופיתוח דפי נחיתה',
    features: [
      'עיצוב ממוקד המרה',
      'אופטימיזציה למנועי חיפוש',
      'ניתוח התנהגות משתמשים',
      'A/B Testing',
    ],
  },
  {
    title: 'אוטומציה',
    icon: <SpeedIcon sx={{ fontSize: 40, color: 'white' }} />,
    description: 'ייעול תהליכי עבודה',
    features: [
      'אוטומציה של משימות חוזרות',
      'שיפור יעילות',
      'הפחתת שגיאות',
      'חיסכון בזמן',
    ],
  },
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id="services"
      style={{
        paddingTop: '64px',
        paddingBottom: '64px',
        backgroundImage: 'linear-gradient(180deg, #04010c 100%, #191e4b 60%, #04010c 100%)',
      }}
    >
      <Container maxWidth="lg">
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
            style={{ marginBottom: 48, color: 'white' }}
          >
            שירותים
          </Typography>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={3}
                    style={{
                      padding: 24,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: 16,
                      position: 'relative',
                      overflow: 'visible',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-5px) scale(1.03)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.boxShadow = '0 8px 32px 0 #00e6ff55, 0 2px 8px #fff';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = '';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    <div style={{ marginBottom: 16, fontSize: 48 }}>
                      {service.icon}
                    </div>
                    <Typography variant="h6" component="h3" gutterBottom style={{ color: 'white' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      {service.description}
                    </Typography>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', color: 'rgba(255,255,255,0.8)' }}>
                      {service.features.map((feature, i) => (
                        <li key={i} style={{ marginTop: 8 }}>{feature}</li>
                      ))}
                    </ul>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </div>
  );
};

export default Services; 
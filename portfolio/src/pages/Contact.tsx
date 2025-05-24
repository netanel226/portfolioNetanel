import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact: React.FC = () => {
  return (
    <div
      id="contact"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(rgba(18, 10, 51, 0.88), rgba(8, 2, 26, 0.94))',
        padding: '64px 0',
      }}
    >
      <Container maxWidth="sm" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <MailOutlineIcon style={{ fontSize: 64, color: '#00e6ff', marginBottom: 16, filter: 'drop-shadow(0 0 16px #00e6ff88)' }} />
            <Typography
              variant="h2"
              align="center"
              style={{
                color: 'white',
                marginBottom: 24,
                textShadow: '0 2px 8px #000',
                fontWeight: 700,
              }}
            >
              צור קשר
            </Typography>
            <form
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                borderRadius: 24,
                boxShadow: '0 8px 32px 0 #00e6ff33, 0 2px 8px #fff1',
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                alignItems: 'center',
                border: '1px solid rgba(255,255,255,0.18)',
                position: 'relative',
              }}
              autoComplete="off"
            >
              <TextField
                label="שם"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: 16,
                    background: 'rgba(255,255,255,0.15)',
                    color: 'white',
                  },
                }}
                InputLabelProps={{ style: { color: '#b9c8ca' } }}
              />
              <TextField
                label="אימייל"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: 16,
                    background: 'rgba(255,255,255,0.15)',
                    color: 'white',
                  },
                }}
                InputLabelProps={{ style: { color: '#b9c8ca' } }}
              />
              <TextField
                label="הודעה"
                variant="outlined"
                fullWidth
                multiline
                minRows={4}
                InputProps={{
                  style: {
                    borderRadius: 16,
                    background: 'rgba(255,255,255,0.15)',
                    color: 'white',
                  },
                }}
                InputLabelProps={{ style: { color: '#b9c8ca' } }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                style={{
                  marginTop: 8,
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  borderRadius: 16,
                  background: 'linear-gradient(90deg, #00e6ff 0%, #1a1a1a 100%)',
                  color: 'white',
                  boxShadow: '0 0 16px 4px #00e6ff88',
                  transition: 'box-shadow 0.3s',
                  textShadow: '0 2px 8px #000',
                }}
                onMouseOver={e => (e.currentTarget.style.boxShadow = '0 0 32px 8px #00e6ffcc')}
                onMouseOut={e => (e.currentTarget.style.boxShadow = '0 0 16px 4px #00e6ff88')}
              >
                שלח
              </Button>
            </form>
            <div style={{
              marginTop: 32,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 12,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: 18 }}>
                <MailOutlineIcon style={{ color: '#00e6ff', marginLeft: 8 }} />
                <span style={{ direction: 'ltr' }}>netanelor2@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: 18 }}>
                <PhoneIcon style={{ color: '#00e6ff', marginLeft: 8 }} />
                <span dir="ltr">+972-54-2262242</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Contact; 
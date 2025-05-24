import React from 'react';
import { Fab, Tooltip, SxProps, Theme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';

const fabStyles: SxProps<Theme> = {
  backgroundColor: '#25D366',
  '&:hover': {
    backgroundColor: '#128C7E',
  },
};

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '972XXXXXXXXX'; // Replace with your actual phone number
  const message = 'שלום, אני מעוניין/ת לקבל מידע נוסף על השירותים שלך.';

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Tooltip title="צור קשר בוואטסאפ">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        <Fab
          color="success"
          aria-label="צור קשר בוואטסאפ"
          onClick={handleClick}
          sx={fabStyles}
        >
          <WhatsAppIcon />
        </Fab>
      </motion.div>
    </Tooltip>
  );
};

export default WhatsAppButton; 
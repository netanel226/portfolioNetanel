import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { Element, scroller } from 'react-scroll';

const Navbar = () => {
  const scrollTo = (elementId: string) => {
    scroller.scrollTo(elementId, {
      duration: 500,
      smooth: true,
      spy: true,
    });
  };

  return (
    <AppBar position="fixed" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Container>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <Button 
              color="inherit" 
              onClick={() => scrollTo('about')} 
            >
              אודות
            </Button>
            <Button 
              color="inherit" 
              onClick={() => scrollTo('skills')}
            >
              כישורים
            </Button>
            <Button 
              color="inherit" 
              onClick={() => scrollTo('projects')}
            >
              פרויקטים
            </Button>
          </Box>
          <Box sx={{ position: 'absolute', right: 24 }}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => scrollTo('contact')}
            >
              צור קשר
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 
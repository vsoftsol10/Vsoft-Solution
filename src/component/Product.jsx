import { useRef, useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Button,
  Breadcrumbs,
  Tabs,
  Tab,
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Language';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ProductBanner from '../assets/product-bg.webp';

const Product = () => {
    const navigate = useNavigate();
    const headingRef = useRef();

    useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );
  }, []);
  return (
    <>
    <Box
        sx={{
          py: 10,
          color: '#fff',
          textAlign: 'center',
          backgroundImage: `url(${ProductBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(122, 51, 122, 0.75)',
            zIndex: 1,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: '#fff' }} />}
            aria-label="breadcrumb"
            sx={{ justifyContent: 'center', display: 'flex', mb: 2 }}
          >
            <Link
              underline="hover"
              onClick={() => navigate('/')}
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#fff' }}
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Typography
              color="#fff"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <WebIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Products
            </Typography>
          </Breadcrumbs>

          <Typography variant="h4" fontWeight="bold" ref={headingRef}>
            Products Of Vsoft
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default Product
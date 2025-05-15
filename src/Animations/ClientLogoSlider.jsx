import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AnimatedContent from '../Animations/AnimatedContent';
import ClientOne from '../assets/client/BULLET CRACKERS LOGO 001.jpeg';
import ClientTwo from '../assets/client/MKM LOGO 001.jpeg';
import ClientThree from '../assets/client/SMEC LOGO 002.jpeg';
import ClientFour from '../assets/client/DARC LOGO.jpeg';
import ClientFive from '../assets/client/CNI.jpeg';
import ClientSix from '../assets/client/RAJALAKSHMI LOGO 001.jpeg';
import ClientSeven from '../assets/client/MAHARAJA LOGO 001.jpeg';
import ClientEight from '../assets/client/GAYRA LOGO 001.jpeg';
import ClientNine from '../assets/client/Nivedha LOGO 002.jpeg';

const ClientLogoSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const vsoftPurple = '#803082';
  const sliderRef = useRef(null);

  // Updated array of client logos with the imported images
  const clientLogos = [
    { id: 1, logo: ClientOne, name: "Bullet Crackers" },
    { id: 2, logo: ClientTwo, name: "MKM" },
    { id: 3, logo: ClientThree, name: "SMEC" },
    { id: 4, logo: ClientFour, name: "DARC" },
    { id: 5, logo: ClientFive, name: "CNI" },
    { id: 6, logo: ClientSix, name: "Rajalakshmi" },
    { id: 7, logo: ClientSeven, name: "Maharaja" },
    { id: 8, logo: ClientEight, name: "Gayra" },
    { id: 9, logo: ClientNine, name: "Nivedha" },
  ];

  // Settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: isMobile ? 2 : (clientLogos.length > 5 ? 5 : clientLogos.length),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  // Effect to restart autoplay when component mounts or window is resized
  useEffect(() => {
    if (sliderRef.current) {
      window.addEventListener('resize', () => {
        sliderRef.current.slickPlay();
      });
    }
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: '#f8f9fa',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        {/* Attractive Header Section */}
        <Box
          sx={{
            mb: { xs: 4, md: 6 },
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Decorative elements */}
          <Box
            sx={{
              position: 'absolute',
              width: '60px',
              height: '4px',
              background: `linear-gradient(90deg, ${vsoftPurple} 0%, rgba(128, 48, 130, 0.3) 100%)`,
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: { xs: -20, md: -25 },
              borderRadius: '4px',
            }}
          />
          
          {/* Subtitle */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: vsoftPurple,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              mb: 1,
              fontSize: { xs: '0.9rem', md: '1rem' },
            }}
          >
            <AnimatedContent
              distance={20}
              direction="vertical"
              config={{ tension: 120, friction: 14 }}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
            >
              Trusted Partnerships
            </AnimatedContent>
          </Typography>
          
          {/* Main Header */}
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              fontSize: { xs: '2rem', md: '3rem' },
              mb: { xs: 1, md: 2 },
              position: 'relative',
              display: 'inline-block',
            }}
          >
            <AnimatedContent
              distance={40}
              direction="vertical"
              config={{ tension: 100, friction: 10 }}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
            >
              Our Successful Clients
            </AnimatedContent>
          </Typography>
          
          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '650px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            <AnimatedContent
              distance={30}
              direction="vertical"
              delay={100}
              config={{ tension: 100, friction: 14 }}
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              Proudly partnering with industry leaders who trust our expertise for their digital success
            </AnimatedContent>
          </Typography>
        </Box>

        {/* Client Logo Slider */}
        <Box
          sx={{
            px: { xs: 2, md: 4 },
            mt: { xs: 4, md: 5 },
            '& .slick-track': {
              display: 'flex',
              alignItems: 'center',
            },
          }}
        >
          <Slider ref={sliderRef} {...settings}>
            {clientLogos.map((client) => (
              <Box
                key={client.id}
                sx={{
                  px: 2,
                  display: 'flex !important',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100px',
                }}
              >
                <Box
                  sx={{
                    height: '100px',
                    width: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    padding: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    filter: 'grayscale(100%)',
                    opacity: 0.7,
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      opacity: 1,
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={client.logo}
                    alt={client.name}
                    sx={{
                      maxWidth: '200%',
                      maxHeight: '200%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientLogoSlider;
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Paper,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Language';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SpeedIcon from '@mui/icons-material/Speed';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DesignerUi from '../assets/Developer.jpg';
import UiUxBanner from '../assets/UiUx-banner.png';
import AnimatedContent from '../Animations/AnimatedContent';
import ScrollFloat from '../Animations/ScrollFloat';

const UiUx = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const vsoftPurple = '#803082';
  const vsoftGray = '#999999';

  const handleContactClick = () => {
    navigate('/contact'); // Make sure the /contact route exists
  };

  const headingRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
      }
    );
  }, []);
  // Design tools we use
  const designTools = [
    {
      name: "Figma",
      description: "Collaborative tool for wireframing, prototyping, and building design systems."
    },
    {
      name: "Adobe XD",
      description: "Design and prototype user interfaces with interactive and shareable specs."
    },
    {
      name: "Sketch",
      description: "Create pixel-perfect user interfaces and reusable design components with ease."
    },
    {
      name: "Adobe Photoshop",
      description: "Advanced tool for image editing, retouching, and custom visual creation."
    },
    {
      name: "Adobe Illustrator",
      description: "Create scalable vector graphics, logos, and detailed illustrations effortlessly."
    },
    {
      name: "InVision",
      description: "Build interactive mockups and gather real-time client feedback on designs."
    }
  ];

  // Our design process steps
  const designProcess = [
    {
      icon: <EmojiObjectsIcon sx={{ fontSize: 40, color: vsoftPurple }} />,
      title: "Discovery & Research",
      description: "We start by understanding your users, market, and business goals through research and stakeholder interviews."
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 40, color: vsoftPurple }} />,
      title: "Visual Design",
      description: "Our designers craft beautiful, on-brand interfaces with attention to typography, color, and visual hierarchy."
    },
    {
      icon: <DeviceHubIcon sx={{ fontSize: 40, color: vsoftPurple }} />,
      title: "Prototyping & Testing",
      description: "We create interactive prototypes to test functionality and gather user feedback before development."
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: vsoftPurple }} />,
      title: "Implementation Support",
      description: "We work closely with developers to ensure design integrity throughout the development process."
    }
  ];

  // Why choose us points
  const whyChooseUs = [
    "User-centric approach focused on real user needs and behaviors",
    "Strategic design thinking aligned with your business goals",
    "Cross-platform expertise covering web, mobile, and desktop applications",
    "Data-driven decisions based on research and analytics",
    "Collaborative process with regular updates and feedback sessions",
    "Continuous optimization through post-launch analysis and iterations"
  ];

  return (
    <>
      <Box
        sx={{
          py: 10,
          color: '#fff',
          textAlign: 'center',
          backgroundImage: `url(${DesignerUi})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        {/* Overlay for opacity */}
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
        {/* Content Above Overlay */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumbs */}
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
              UI/UX Design
            </Typography>
          </Breadcrumbs>

          {/* Main Text */}
          <Typography variant="h4" fontWeight="bold" ref={headingRef}>
            Smart Interfaces. Intuitive Journeys. UI/UX That Works by VSoft.
          </Typography>
          <Typography variant="body1" sx={{ mt: 3 }}>
            <b>We design user-centric, visually stunning interfaces that deliver seamless experiences - turning clicks into customers and ideas into impact, all crafted with care by VSoft Solutions.</b>
          </Typography>

          <Box mt={4} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleContactClick}
              sx={{
                backgroundColor: '#7a337a',
                '&:hover': { backgroundColor: '#5c245c' },
                borderRadius: '20px',
                px: 4,
                py: 1,
                fontWeight: 'bold',
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 10 },
          }}
        >
          {/* Content on the right */}
          <Box sx={{ flex: 1, mr: { md: 6 } }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              <AnimatedContent
                distance={180}
                direction="horizontal"
                reverse={true}
                config={{ tension: 100, friction: 80 }}
                initialOpacity={0.1}
                animateOpacity
                scale={1.1}
                threshold={0.5}
              >
                Designs That Think, Feel, and Convert.
              </AnimatedContent>
            </Typography>
            <Typography variant="body1" paragraph>
              From intuitive layouts to pixel-perfect visuals, VSoft Solutions creates UI/UX designs that don't just look good - they work wonders.
            </Typography>

            <Typography variant='body1' paragraph>
              Since 2024, we've been helping brands build meaningful digital experiences from Tirunelveli to the world. Whether it's a website, app, or dashboard, we craft every screen with strategy and empathy - putting your users first and your goals at the center.
            </Typography>
          </Box>

          {/* Image on the left */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src={UiUxBanner}
              alt="Team working together"
              sx={{
                width: '85%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Design Tools Section */}
      <Box sx={{ backgroundColor: '#f8f6f9', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" gutterBottom align="center" sx={{ mb: 5, color: vsoftPurple }}>
            <ScrollFloat
              distance={180}
              direction="horizontal"
              reverse={false}
              config={{ tension: 100, friction: 80 }}
              initialOpacity={0.1}
              animateOpacity
              scale={1.1}
              threshold={0.5}
            >
              Tools of Our Trade
            </ScrollFloat>
          </Typography>

          {/* Fixed grid layout for design tools */}
          <Grid container spacing={3} justifyContent="center">
            {designTools.map((tool, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card elevation={2} sx={{
                  height: '100%',
                  borderRadius: 2,
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateY(-8px)' },
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <CardContent sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: vsoftPurple }}>
                      {tool.name}
                    </Typography>
                    <Typography variant="body2">
                      {tool.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Design Process */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom align="center" sx={{ mb: 5, color: vsoftPurple }}>
          <ScrollFloat
            distance={180}
            direction="horizontal"
            reverse={false}
            config={{ tension: 100, friction: 80 }}
            initialOpacity={0.1}
            animateOpacity
            scale={1.1}
            threshold={0.5}
          >
            Our Design Process
          </ScrollFloat>
        </Typography>

        <Paper elevation={0} sx={{ p: 3, backgroundColor: '#f8f6f9', borderRadius: 3 }}>
          {/* Fixed process flow layout */}
          {isMobile ? (
            // Mobile layout - vertical stacking
            <Grid container spacing={4}>
              {designProcess.map((step, index) => (
                <Grid item xs={12} key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <Box sx={{
                    mb: 2,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 12px rgba(128, 48, 130, 0.15)'
                  }}>
                    {step.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: vsoftPurple }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2">
                    {step.description}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          ) : (
            // Desktop layout - horizontal flow with arrows
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              {designProcess.map((step, index) => (
                <React.Fragment key={index}>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: `${100 / designProcess.length}%`,
                    px: 2
                  }}>
                    <Box sx={{
                      mb: 2,
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      boxShadow: '0 4px 12px rgba(128, 48, 130, 0.15)'
                    }}>
                      {step.icon}
                    </Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: vsoftPurple }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2">
                      {step.description}
                    </Typography>
                  </Box>
                  {index < designProcess.length - 1 && (
                    <Box sx={{ display: 'flex', alignItems: 'center', alignSelf: 'center', mt: 4 }}>
                      <NavigateNextIcon sx={{ fontSize: 30, color: vsoftGray }} />
                    </Box>
                  )}
                </React.Fragment>
              ))}
            </Box>
          )}
        </Paper>
      </Container>

      {/* Why Choose Us Section */}
      <Box sx={{ backgroundColor: vsoftPurple, py: 8, color: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" gutterBottom align="center" sx={{ mb: 5 }}>
            <ScrollFloat
              distance={180}
              direction="horizontal"
              reverse={false}
              config={{ tension: 100, friction: 80 }}
              initialOpacity={0.1}
              animateOpacity
              scale={1.1}
              threshold={0.5}
            >
              Why Choose VSoft for UI/UX Design?
            </ScrollFloat>
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Expert-Driven Design
                </Typography>
                <Typography variant="body1" paragraph>
                  Our team combines technical expertise with creative flair to deliver designs that are both beautiful and functional. We stay updated with the latest design trends and technologies while maintaining timeless principles of good UX.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Results-Focused Approach
                </Typography>
                <Typography variant="body1">
                  We measure our success by your success. Our designs don't just look good—they achieve real business objectives, whether that's increasing conversions, improving user satisfaction, or streamlining operations.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                {whyChooseUs.map((point, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <CheckCircleIcon color="inherit" sx={{ mr: 1, mt: 0.5 }} />
                    <Typography variant="body1">
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>

          <Box mt={6} textAlign="center">
            <Button
              variant="contained"
              onClick={handleContactClick}
              sx={{
                backgroundColor: 'white',
                color: vsoftPurple,
                '&:hover': { backgroundColor: '#f0f0f0' },
                borderRadius: '20px',
                px: 4,
                py: 1,
                fontWeight: 'bold',
              }}
            >
              Start Your Design Project
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Portfolio/Testimonial Hint */}
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: vsoftPurple }}>
          Transform Your Digital Experience
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}>
          Ready to elevate your digital presence with user-centered design? Contact VSoft Solutions today and let's create interfaces that your users will love and your business will thrive with.
        </Typography>
        <Button
          variant="outlined"
          onClick={handleContactClick}
          sx={{
            borderColor: vsoftPurple,
            color: vsoftPurple,
            borderRadius: '20px',
            px: 4,
            py: 1,
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: vsoftPurple,
              backgroundColor: vsoftPurple,
              color: '#ffffff',
            },
          }}
        >
          Get in Touch
        </Button>

      </Container>
    </>
  );
};

export default UiUx;
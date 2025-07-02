import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
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
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Language';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CareerBanner from '../assets/careerpage.jpg'; // Renamed to avoid name conflict
import Corporate from '../assets/corporateman.jpg';

const CareersPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const vsoftPurple = '#803082';
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const headingRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );
  }, []);

  const tabContent = {
    0: { // Impact
      title: "Creating Real-World Impact",
      description: "At VSoft Solutions, we lead with purpose - empowering our team to craft technology - driven solutions that not only solve business challenges but also uplift communities. By combining innovation, empathy, and deep industry insight, we deliver meaningful digital experiences that drive progress and leave a lasting impact."
    },
    1: { // Development
      title: "Continuous Growth, Constant Evolution",
      description: "At VSoft Solutions, we believe learning never stops. We empower our team with access to hands-on projects, mentorship, and emerging technologies - ensuring they grow with the industry. From skill-building to leadership development, we nurture talent to stay ahead in a fast-evolving digital world."
    },
    2: { // Support
      title: "Empowering Every Step of the Way",
      description: "At VSoft Solutions, we support every individual’s journey - whether they're just starting out or seeking new challenges. Through upskilling, reskilling, and cross-functional opportunities, we help our team unlock their full potential and grow into the professionals they aspire to be."
    },
    3: { // Progress
      title: "Progress Together, Grow Forever",
      description: "At VSoft Solutions, we believe in nurturing long-term relationships with our team. By investing in continuous career growth, mentorship, and forward - focused opportunities, we empower every individual to evolve, lead, and thrive - together with us."
    }
  };


  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          py: 10,
          color: '#fff',
          textAlign: 'center',
          backgroundImage: `url(${CareerBanner})`,
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
              Career Page
            </Typography>
          </Breadcrumbs>

          <Typography variant="h4" fontWeight="bold" ref={headingRef}>
            Join Us in Making a Difference.
          </Typography>
        </Container>
      </Box>

      {/* Career Overview & CTA */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            textAlign: 'center',
          }}
        >
          <Box sx={{ maxWidth: 800 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Join the Vision. Grow with VSoft.
            </Typography>
            <Typography variant="body1" paragraph>
              At VSoft Solutions, we’re more than just a tech company — we’re a team of innovators, creators, and problem-solvers who believe in using technology to make an impact.
            </Typography>
            <Typography variant="body1" paragraph>
              Whether you're just starting your career or expanding your expertise, VSoft offers a dynamic environment for learning, collaboration, and growth.
            </Typography>
          </Box>

          {/* Buttons */}
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: '24px',
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                backgroundColor: '#803082',
                '&:hover': {
                  backgroundColor: '#6a256d',
                },
              }}
              href="/jobportal"
            >
              Job Openings
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                borderRadius: '24px',
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                color: '#803082',
                borderColor: '#803082',
                '&:hover': {
                  backgroundColor: 'rgba(128, 48, 130, 0.1)',
                  borderColor: '#6a256d',
                },
              }}
              href="/internship"
            >
              Internships / Courses
            </Button>
          </Box>
        </Box>
      </Container>


      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#803082',
          color: '#fff',
          minHeight: 'auto', // changed from 10vh
          py: { xs: 4, md: 6 }, // reduced padding from 6/10 to 4/6
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            pb: { xs: 4, md: 6 } // also reduced padding bottom
          }}
        >
          {/* Header */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
              fontWeight: 300,
              mb: { xs: 4, md: 8 },
              letterSpacing: '0.02em'
            }}
          >
            Why Vsoft Solutions
          </Typography>

          {/* Navigation Tabs */}
          <Box sx={{ mb: { xs: 4, md: 6 } }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: '#fff',
                  height: 2
                },
                '& .MuiTab-root': {
                  color: '#888',
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  fontWeight: 400,
                  textTransform: 'none',
                  minWidth: { xs: 80, md: 120 },
                  padding: { xs: '12px 16px', md: '16px 24px' }
                },
                '& .MuiTab-root.Mui-selected': {
                  color: '#fff'
                }
              }}
              variant={isMobile ? "scrollable" : "standard"}
              scrollButtons="auto"
              allowScrollButtonsMobile
            >
              <Tab label="Impact" />
              <Tab label="Development" />
              <Tab label="Support" />
              <Tab label="Progress" />
            </Tabs>
          </Box>

          {/* Content Grid */}
          <Grid container spacing={{ xs: 4, md: 6, lg: 8 }}>

            {/* Content Section */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '100%',
                  minHeight: { xs: 200, md: 400 }
                }}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
                    fontWeight: 300,
                    mb: { xs: 3, md: 4 },
                    letterSpacing: '0.02em'
                  }}
                >
                  {tabContent[activeTab].title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.125rem', lg: '1.25rem' },
                    lineHeight: { xs: 1.6, md: 1.7 },
                    color: '#e0e0e0',
                    maxWidth: { xs: '100%', lg: '90%' }
                  }}
                >
                  {tabContent[activeTab].description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>


      <Container maxWidth="xlg" disableGutters>
        <Box
          sx={{
            position: 'relative',
            minHeight: { xs: '60vh', md: '75vh', lg: '85vh' },
            backgroundImage: `url(${Corporate})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            overflow: 'hidden',
          }}
        >
          {/* Dark overlay for readability */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 1,
            }}
          />

          {/* Content */}
          <Container maxWidth={false} sx={{ position: 'relative', zIndex: 2, px: { xs: 2, md: 6, lg: 12 } }}>
            <Box
              sx={{
                maxWidth: { xs: '100%', md: '80%', lg: '75%' },
                pl: { xs: 2, md: 4 },
                position: 'relative',
              }}
            >
              {/* Accent line */}
              <Box
                sx={{
                  width: 4,
                  height: { xs: 200, md: 280, lg: 320 },
                  backgroundColor: '#2196f3',
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 3,
                }}
              />

              {/* Text Content */}
              <Box sx={{ pl: { xs: 5, md: 6 } }}>
                <Typography
                  variant="overline"
                  sx={{
                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: '#fff',
                    mb: { xs: 2, md: 3 },
                    textTransform: 'uppercase',
                  }}
                >
                  Unity in Differences
                </Typography>

                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontSize: { xs: '1.75rem', sm: '2.2rem', md: '3.2rem', lg: '3.8rem' },
                    fontWeight: 300,
                    lineHeight: { xs: 1.3, md: 1.2 },
                    color: '#fff',
                    textShadow: '0 2px 2px rgba(0,0,0,0.3)',
                  }}
                >
                  Impact starts with people. We hire, embrace, and grow talent from every background — because unity in differences drives greatness.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Container>

    </>
  );
};

export default CareersPage;

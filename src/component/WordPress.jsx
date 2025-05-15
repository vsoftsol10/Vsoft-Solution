import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  CardActionArea,
  CardMedia,
  Avatar,
  Paper,
  Stack,
} from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import UpdateIcon from '@mui/icons-material/Update';
import SettingsIcon from "@mui/icons-material/Settings";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SecurityIcon from '@mui/icons-material/Security';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AnimatedContent from '../Animations/AnimatedContent';
import WordPressHero from '../assets/Wordpress.jpg';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Language';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import BannerWP from '../assets/BannerWP.png';
import WordpressOne from '../assets/Wordpress1.jpg';
import WordpressTwo from '../assets/Wordpress2.jpg';
import ScrollFloat from '../Animations/ScrollFloat';
import { ArrowForward } from '@mui/icons-material';
const WordPress = () => {

  const vsoftPurple = '#803082';
  const vsoftGray = '#999999';
   const [hoveredCard, setHoveredCard] = useState(null);
  const handleContactClick = () => {
    navigate('/contact'); // Make sure the /contact route exists
  };
  const services = [
    {
      title: "WordPress Installation & Configuration",
      description: "We ensure smooth and quick setup of your WordPress site with optimal configuration.",
      icon: <SettingsIcon fontSize="large" />
    },
    {
      title: "WordPress Migration",
      description: "Seamlessly migrate your WordPress site to a new host without downtime or data loss.",
      icon: <SwapHorizIcon fontSize="large" />
    },
    {
      title: "Responsive WordPress Design",
      description: "We build responsive WordPress themes that look great on all devices and screen sizes.",
      icon: <PhoneIphoneIcon fontSize="large" />
    },
    {
      title: "WordPress eCommerce Solution",
      description: "Launch your online store with powerful WooCommerce integration and features.",
      icon: <ShoppingCartIcon fontSize="large" />
    }
  ];

  const benefits = [
    { icon: <LightbulbIcon sx={{ fontSize: 40, color: 'white' }} />, title: "Creative" },
    { icon: <ForkRightIcon sx={{ fontSize: 40, color: 'white' }} />, title: "Flexible" },
    { icon: <PhoneIphoneIcon sx={{ fontSize: 40, color: 'white' }} />, title: "Customize" },
    { icon: <SecurityIcon sx={{ fontSize: 40, color: 'white' }} />, title: "Secure" },
    { icon: <AccessTimeIcon sx={{ fontSize: 40, color: 'white' }} />, title: "On-Time" },
    { icon: <UpdateIcon sx={{ fontSize: 40, color: 'white' }} />, title: "Upgradation" },
  ];

  const projects = [{
      id: 1,
      title: "MKM Jewellery",
      image: WordpressOne,
      link: "https://www.mkmthangamaligai.com/",
      color: "#803082"
    },
  
    {
      id: 2,
      title: "Durga Traders",
      image: WordpressTwo,
      link: "https://durgatraders.thevsoft.com/",
      color: "#803082"
    },
  ]

  return (
    <>
      <Box
        sx={{
          py: 10,
          color: '#fff',
          textAlign: 'center',
          backgroundImage: `url(${WordPressHero})`,
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
              WordPress Development
            </Typography>
          </Breadcrumbs>

          {/* Main Text */}
          <Typography variant="h4" fontWeight="bold">
            <AnimatedContent
              distance={180}
              direction="horizontal"
              reverse={false}
              config={{ tension: 100, friction: 80 }}
              initialOpacity={0.1}
              animateOpacity
              scale={1.1}
              threshold={0.5}
            >
              Smart Design. Seamless Experience. WordPress Done Right by VSoft.
            </AnimatedContent>
          </Typography>
          <Typography variant="body1" sx={{ mt: 3 }}>
            <b>We craft high-performance, SEO-friendly WordPress websites that look stunning and drive real business growth — all powered by VSoft Solutions.</b>
          </Typography>

          <Box mt={4} sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
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


      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 5 },
          }}
        >
          {/* Image on the left */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src={BannerWP}
              alt="WordPress Developer"
              sx={{
                width: { xs: '90%', md: '85%' },
                maxWidth: 500,
                height: 'auto',
                borderRadius: '50%',
                border: '8px solid #1e88e5',
              }}
            />
          </Box>

          {/* Content on the right */}
          <Box sx={{ flex: 1 }}>
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
                Our Striking Features Of WordPress Development
              </AnimatedContent>
            </Typography>

            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              We have expertise in handling WordPress projects of varying sizes and complexity makes us the best WordPress Development Company in USA
            </Typography>

            {/* Feature Cards */}
            <Stack spacing={2}>
              {/* Feature 1 */}
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: '#1e88e5',
                  color: 'white',
                  borderRadius: 1
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: 'white', color: '#1e88e5' }}>
                    <SettingsIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      High Speed & Performance
                    </Typography>
                    <Typography variant="body2">
                      We offer highly optimized WordPress Websites that can enhance overall user engagement and help you to stay ahead of the competition.
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Feature 2 */}
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: '#1e88e5',
                  color: 'white',
                  borderRadius: 1
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: 'white', color: '#1e88e5' }}>
                    <SecurityIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      Secure & Easily Upgradable
                    </Typography>
                    <Typography variant="body2">
                      We deploy the highest security techniques to make sure the WordPress websites are highly secure and easily upgraded.
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Feature 3 */}
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: '#1e88e5',
                  color: 'white',
                  borderRadius: 1
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: 'white', color: '#1e88e5' }}>
                    <AssignmentIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      Result-Oriented Process
                    </Typography>
                    <Typography variant="body2">
                      We have experts to offer the best WordPress development services in USA on the latest development trends with a long-term goal.
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Stack>
          </Box>
        </Box>
      </Container>

      <Box sx={{ py: 6, textAlign: 'center', maxWidth: '1200px', mx: 'auto', px: 3 }}>
        {/* Heading Section */}
        <Box sx={{ mb: 4 }}>
          <Typography gutterBottom>
            <ScrollFloat distance={180} direction="horizontal" reverse={true} config={{ tension: 100, friction: 80 }} initialOpacity={0.1} animateOpacity scale={1.1} threshold={0.5}>
              Where Design Meets Performance – Powered by WordPress & VSoft
            </ScrollFloat>
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '900px', mx: 'auto', mb: 6 }}>
            With a passion for digital innovation, VSoft Solutions builds custom WordPress solutions that help businesses scale effortlessly and succeed online.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4
          }}
        >
          {services.map((service, index) => (
            <Box key={index} sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ mt: 1 }}>{service.icon}</Box>
              <Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2">{service.description}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box py={8} sx={{ backgroundColor: '#f4f4f4' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              What Sets Our WordPress Solutions Apart
            </ScrollFloat>
          </Typography>
          <Typography variant='body1' gutterBottom sx={{ textAlign: 'center' }}>
            At VSoft Solutions, we blend creativity with technical expertise to deliver WordPress websites that are fast, secure, and built to grow with your business. Discover how our tailored approach drives lasting impact.
          </Typography>
        </Container>

        <Grid container spacing={3} justifyContent="center">
          {benefits.map((benefit, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Box
                sx={{
                  backgroundColor: '#2196f3',
                  borderRadius: '50%',
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  mb: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {benefit.icon}
              </Box>
              <Typography align="center" variant="subtitle1" fontWeight="bold">
                {benefit.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box py={8}>
              <Container maxWidth="lg">
                <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
                  <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                  >
                    Our Recent Projects
                  </ScrollFloat>
                </Typography>
                <Grid
                  container
                  spacing={4}
                  mt={4}
                  justifyContent="center"
                >
                  {projects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id} display="flex" justifyContent="center">
                      <Card
                        onMouseEnter={() => setHoveredCard(project.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        sx={{
                          width: '100%',
                          maxWidth: 300,
                          aspectRatio: '1 / 1',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          transition: 'transform 0.3s',
                          transform: hoveredCard === project.id ? 'translateY(-8px)' : 'none',
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="170"
                          image={project.image}
                          alt={project.title}
                          sx={{ objectFit: 'cover' }}
                        />
                        <CardContent
                          sx={{
                            backgroundColor: project.color,
                            color: '#fff',
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            '&:hover': {
                              backgroundColor: '#999999',
                            },
                          }}
                        >
                          <Typography
                            variant="h6"
                            fontWeight="bold"
                            sx={{
                              transition: 'transform 0.3s',
                              transform: hoveredCard === project.id ? 'translateY(-4px)' : 'none',
                            }}
                          >
                            {project.title}
                          </Typography>
      
                          <Box
                            mt="auto"
                            pt={2}
                            sx={{
                              opacity: hoveredCard === project.id ? 1 : 0,
                              transition: 'opacity 0.3s',
                            }}
                          >
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Box>
    </>
  )
}

export default WordPress
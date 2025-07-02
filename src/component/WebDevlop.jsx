import React, { useState, useEffect, useRef } from 'react';
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
  useTheme,
} from '@mui/material';
import { gsap } from 'gsap';
import HomeIcon from '@mui/icons-material/Home';
import { ArrowForward } from '@mui/icons-material';
import WebDev from '../assets/web_development-01.png';
import Customdev from '../assets/custom_web_development-01.png';
import Ecommerce from '../assets/ecommerce_development-01.png';
import Responsive from '../assets/Responsive Web Design-01.png';
import Support from '../assets/Support and Maintenance-01.png';
import AnimatedContent from '../Animations/AnimatedContent';
import ScrollFloat from '../Animations/ScrollFloat';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import WebIcon from '@mui/icons-material/Language';
import { useNavigate } from 'react-router-dom';
import WebsiteHero from '../assets/WebsiteHerobck.webp';
import WebDevHero from '../assets/WebDeveloper-Hero.jpg';
import Stepper from '../Animations/Stepper';
import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png';
import JS from '../assets/javascript.png';
import Reactjs from '../assets/React.png';
import Nodejs from '../assets/node-js.png';
import MongoDB from '../assets/MongoDB.png';
import Bootstrap from '../assets/Bootstrap.jpg';
import FireBase from '../assets/firebase.png';
import NextJs from '../assets/nextjs.png';
import Mui from '../assets/MUI.png';
import ProjectDurga from '../assets/ProjectWeb1.jpg';
import ProjectMKM from '../assets/ProjectWeb2.jpg';
import ProjectCrackers from '../assets/ProjectWeb3.jpg';

const WebDevlop = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const vsoftPurple = '#803082';
  const vsoftGray = '#999999';
  const headingRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 4.5,
        ease: 'power2.out',
      }
    );
  }, []);

  const handleContactClick = () => {
    navigate('/contact');
  };

  const developmentCard = [
    {
      icon: WebDev,
      title: 'Web Development',
      description: 'Web development involves designing and building websites, ensuring functionality, responsiveness, and user-friendly experiences.'
    },
    {
      icon: Ecommerce,
      title: 'E-Commerce Development',
      description: 'E-commerce development refers to the creation of online stores that enable users to buy and sell products or services over the internet.'
    },
    {
      icon: Responsive,
      title: 'Responsive Web Design',
      description: 'Responsive web design is a technique used to make websites look and function well on different screen sizes and devices.'
    },
    {
      icon: Customdev,
      title: 'Custom Software Development',
      description: 'Custom software development involves creating software solutions tailored to specific business needs and requirements.'
    },
    {
      icon: Support,
      title: 'Support and Maintenance',
      description: 'Support and maintenance services involve providing ongoing technical assistance and maintenance to ensure the smooth operation of software systems.'
    }
  ];

  const techstack = [
    { name: 'HTML', logo: HTML },
    { name: 'CSS', logo: CSS },
    { name: 'JavaScript', logo: JS },
    { name: 'React Js', logo: Reactjs },
    { name: 'Next Js', logo: NextJs },
    { name: 'Node Js', logo: Nodejs },
    { name: 'Mongo DB', logo: MongoDB },
    { name: 'Firebase', logo: FireBase },
    { name: 'Bootstrap', logo: Bootstrap },
    { name: 'Material UI', logo: Mui }
  ];


  const servises = [
    {
      image: ProjectMKM,
      title: "MKM Jewellery",
      link: "https://www.mkmthangamaligai.com/",
    },
    {
      title: "Raja-Lakshmi Crackers",
      image: ProjectCrackers,
      link: "https://raja-lakshmi.vercel.app/",
    },
    {
      title: "Durga Traders",
      image: ProjectDurga,
      link: "https://durgatraders.thevsoft.com/",
    }
  ];

  // Enhanced Services Card Styles
  const cardStyle = (isHovered) => ({
    height: '100%',
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    boxShadow: isHovered
      ? '0 20px 40px rgba(0, 0, 139, 0.15)'
      : '0 2px 8px rgba(0, 0, 0, 0.1)',
    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
  });

  const imageContainerStyle = {
    position: 'relative',
    height: '200px',
    overflow: 'hidden',
  };

  const imageStyle = (isHovered) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.7s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    filter: isHovered ? 'brightness(0.75)' : 'brightness(1)',
  });

  const overlayStyle = (show) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: '16px',
    opacity: show ? 1 : 0,
    transition: 'opacity 0.5s ease',
  });

  const cornerAccentStyle = (isHovered) => ({
    position: 'absolute',
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    borderLeft: '40px solid transparent',
    borderTop: `40px solid ${isHovered ? '#1565c0' : '#1976d2'}`,
    transition: 'all 0.3s ease',
  });

  const cornerDotStyle = (isHovered) => ({
    position: 'absolute',
    top: '-32px',
    right: '-8px',
    width: '8px',
    height: '8px',
    backgroundColor: 'white',
    borderRadius: '50%',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.5s ease 0.2s',
    animation: isHovered ? 'pulse 2s infinite' : 'none',
  });

  const contentStyle = {
    padding: '24px',
    textAlign: 'center',
  };

  const iconContainerStyle = (isHovered) => ({
    width: '64px',
    height: '64px',
    background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `2px solid ${isHovered ? '#42a5f5' : '#90caf9'}`,
    transition: 'all 0.3s ease',
    margin: '0 auto 16px',
    boxShadow: isHovered ? '0 4px 12px rgba(66, 165, 245, 0.3)' : 'none',
  });

  const iconShapeStyle = (isHovered) => ({
    width: '32px',
    height: '32px',
    backgroundColor: isHovered ? '#1565c0' : '#1976d2',
    borderRadius: '8px',
    transform: isHovered ? 'rotate(12deg)' : 'rotate(45deg)',
    transition: 'all 0.3s ease',
  });

  const titleStyle = (isHovered) => ({
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: isHovered ? '#1976d2' : '#424242',
    marginBottom: '16px',
    transition: 'color 0.3s ease',
  });

  const descriptionStyle = {
    color: '#666',
    lineHeight: 1.6,
    marginBottom: '16px',
    fontSize: '0.875rem',
  };

  const animatedBorderStyle = (isHovered) => ({
    height: '4px',
    background: 'linear-gradient(90deg, #1976d2 0%, #9c27b0 100%)',
    borderRadius: '2px',
    transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.5s ease',
  });

  const fabStyle = (show) => ({
    position: 'absolute',
    bottom: '16px',
    right: '16px',
    width: '40px',
    height: '40px',
    backgroundColor: '#1976d2',
    borderRadius: '50%',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(16px)',
    transition: 'all 0.5s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  });

  const glowEffectStyle = (show) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(90deg, rgba(66,165,245,0) 0%, rgba(66,165,245,0.05) 50%, rgba(156,39,176,0) 100%)',
    borderRadius: '16px',
    opacity: show ? 1 : 0,
    transition: 'opacity 0.5s ease',
    pointerEvents: 'none',
  });
  return (
    <>
      {/* Hero Section with Background and Overlay */}
      <Box
        sx={{
          py: { xs: 6, sm: 8, md: 12, lg: 15 },
          px: { xs: 1.5, sm: 2, md: 3, lg: 4 },
          color: '#fff',
          textAlign: 'center',
          backgroundImage: `url(${WebsiteHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          minHeight: { xs: '55vh', sm: '60vh', md: '65vh', lg: '70vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden'
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
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            width: '100%'
          }}
        >
          {/* Breadcrumbs */}
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: '#fff' }} />}
            aria-label="breadcrumb"
            sx={{
              justifyContent: 'center',
              display: 'flex',
              mb: { xs: 2, sm: 3, md: 4 },
              flexWrap: 'wrap'
            }}
          >
            <Link
              underline="hover"
              onClick={() => navigate('/')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                color: '#fff',
                fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
              }}
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Typography
              color="#fff"
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
              }}
            >
              <WebIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Web Development
            </Typography>
          </Breadcrumbs>

          {/* Main Text - Improved Responsive Typography */}
          <Box
            sx={{
              maxWidth: '100%',
              overflow: 'hidden',
              px: { xs: 0.5, sm: 1, md: 2 }
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              sx={{
                fontSize: {
                  xs: '1.25rem',    // 20px - very small screens
                  sm: '1.5rem',     // 24px - small screens
                  md: '2rem',       // 32px - medium screens
                  lg: '2.5rem',     // 40px - large screens
                  xl: '2.75rem'     // 44px - extra large screens
                },
                lineHeight: { xs: 1.1, sm: 1.2, md: 1.3 },
                mb: { xs: 2, sm: 3, md: 4 },
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto',
                maxWidth: '100%',
                // Ensure text never overflows
                whiteSpace: 'normal',
                textOverflow: 'clip'
              }}
            >
              <Box
                component="span"
                sx={{
                  display: 'block',
                  width: '100%',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                  hyphens: 'auto'
                }}
                ref={headingRef}
              >
                Discover Our Web Development Services
              </Box>
            </Typography>

            <Typography
              variant="body1"
              component="p"
              sx={{
                mt: { xs: 1.5, sm: 2, md: 3 },
                fontSize: {
                  xs: '0.875rem',   // 14px
                  sm: '0.95rem',    // 15.2px
                  md: '1.05rem',    // 16.8px
                  lg: '1.1rem'      // 17.6px
                },
                lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                mb: { xs: 1.5, sm: 2, md: 3 },
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto',
                maxWidth: '100%',
                px: { xs: 0, sm: 0.5, md: 0 }
              }}
            >
              <strong>VSoft Solutions is your trusted partner in delivering powerful and custom web development solutions for businesses of all sizes.</strong>
            </Typography>

            <Typography
              variant="body1"
              component="p"
              sx={{
                mt: { xs: 1.5, sm: 2, md: 3 },
                fontSize: {
                  xs: '0.8125rem',  // 13px
                  sm: '0.875rem',   // 14px
                  md: '0.9375rem',  // 15px
                  lg: '1rem'        // 16px
                },
                lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                mb: { xs: 2.5, sm: 3, md: 4 },
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto',
                maxWidth: '100%',
                px: { xs: 0, sm: 0.5, md: 0 }
              }}
            >
              We specialize in building responsive, secure, and scalable websites and web applications tailored to your unique needs. With a strong focus on user experience and modern technologies, our expert team is committed to crafting seamless digital experiences that drive results. From corporate websites to full-scale e-commerce platforms, VSoft Solutions is your one-stop destination for reliable and innovative web development services.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                mt: { xs: 2.5, sm: 3, md: 4 }
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={handleContactClick}
                sx={{
                  backgroundColor: '#7a337a',
                  '&:hover': { backgroundColor: '#5c245c' },
                  borderRadius: '20px',
                  px: { xs: 2.5, sm: 3, md: 4 },
                  py: { xs: 1, sm: 1.25, md: 1.5 },
                  fontWeight: 'bold',
                  fontSize: { xs: '0.8125rem', sm: '0.875rem', md: '1rem' },
                  minWidth: { xs: '120px', sm: '140px' }
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Growth Partner Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* Content */}
          <Box sx={{ flex: 1, order: { xs: 2, md: 1 } }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem', lg: '2.25rem' },
                lineHeight: { xs: 1.1, sm: 1.2, md: 1.3 },
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto'
              }}
            >
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
                Your Growth Partner in the Digital World
              </AnimatedContent>
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1.05rem', lg: '1.1rem' },
                lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto'
              }}
            >
              From Website Creation to Digital Campaigns, We Help You Succeed Online.
            </Typography>

            <Typography
              variant='body1'
              paragraph
              sx={{
                fontSize: { xs: '0.8125rem', sm: '0.875rem', md: '0.9375rem', lg: '1rem' },
                lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto'
              }}
            >
              Since 2024, our Tirunelveli-based company has delivered custom web applications for enterprises. As a trusted offshore partner, we build innovative, scalable solutions tailored to your business goals. Let's shape the future of web technology together.
            </Typography>
          </Box>

          {/* Image */}
          <Box
            sx={{
              flex: 1,
              order: { xs: 1, md: 2 },
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box
              component="img"
              src={WebDevHero}
              alt="Team working together"
              sx={{
                width: { xs: '100%', md: '85%' },
                maxWidth: '500px',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Development Services Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: '#f4f4f4',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{
              mb: { xs: 4, md: 6 },
              fontSize: { xs: '1.5rem', sm: '1.2rem', md: '2rem', lg: '2.25rem' },
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              hyphens: 'auto'
            }}
          >
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.04}
            >
              Our Best Development Services
            </ScrollFloat>
          </Typography>

          <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
            {developmentCard.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                key={index}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Card
                  elevation={0}
                  sx={{
                    width: '100%',
                    maxWidth: { xs: '100%', sm: '340px' },
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    backgroundColor: 'background.paper',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: { xs: 3, md: 4 },
                    height: '100%'
                  }}>
                    <Box
                      sx={{
                        position: 'relative',
                        mb: 3,
                        height: { xs: 150, md: 200 },
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 3,
                        backgroundColor: '#f5f7ff',
                        overflow: 'hidden'
                      }}
                    >
                      <Box
                        component="img"
                        src={item.icon}
                        alt={item.title}
                        sx={{
                          height: { xs: 80, md: 100 },
                          width: 'auto',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: '#1a237e',
                        fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem', lg: '1.5rem' },
                        lineHeight: 1.2,
                        wordBreak: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto'
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: '0.8125rem', sm: '0.875rem', md: '0.9375rem', lg: '1rem' },
                        lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                        wordBreak: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto'
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Stepper />



      {/* Projects Section */}
      {/* <Box py={{ xs: 6, md: 8 }} sx={{ backgroundColor: '#f4f4f4' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            align="center"
            gutterBottom
            sx={{
              mb: { xs: 4, md: 6 },
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem', lg: '2.25rem' },
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              hyphens: 'auto'
            }}
          >
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              Our Recent Projects
            </ScrollFloat>
          </Typography> */}

          {/* <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}>
              {servises.map((servise, index) => {
                const isHovered = hoveredIndex === index;

                return (
                  <Box
                    key={index}
                    sx={cardStyle(isHovered)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  > */}
                    {/* Image Section */}
                    {/* <Box sx={imageContainerStyle}>
                      <Box
                        component="img"
                        src={servise.image}
                        alt={servise.title}
                        sx={{
                          width: '100%', // Ensure this is here
                          height: 'auto',
                          display: 'block',
                          objectFit: 'cover',
                        }}
                      /> */}

                      {/* Image Overlay with Title */}
                      {/* <Typography
                        component="a"
                        href={servise.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          ...titleStyle(isHovered),
                          textDecoration: 'none',
                          cursor: 'pointer',
                          color: 'inherit', // optional, to keep the color consistent
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        {servise.title}
                      </Typography> */}

                      {/* Corner Accent */}
                      {/* <Box sx={cornerAccentStyle(isHovered)}>
                        <Box sx={cornerDotStyle(isHovered)}></Box>
                      </Box>
                    </Box> */}

                    {/* Content Section */}
                    {/* <Box sx={contentStyle}> */}
                      {/* Icon Container */}
                      {/* <Box sx={iconContainerStyle(isHovered)}>
                        <Box sx={iconShapeStyle(isHovered)}></Box>
                      </Box> */}

                      {/* Title */}
                      {/* <Typography sx={titleStyle(isHovered)}>
                        {servise.title}
                      </Typography> */}

                      {/* Description */}
                      {/* <Typography sx={descriptionStyle}>
                        {servise.description}
                      </Typography> */}

                      {/* Animated Bottom Border */}
                      {/* <Box sx={animatedBorderStyle(isHovered)}></Box>
                    </Box> */}
                    {/* Hover Glow Effect */}
                    {/* <Box sx={glowEffectStyle(isHovered)}></Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Container>
      </Box> */}





      {/* Technology Stack Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            sx={{
              mb: { xs: 4, md: 6 },
              fontWeight: 'bold',
              color: 'text.primary',
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem', lg: '2.25rem' },
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              hyphens: 'auto'
            }}
          >
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              Technology Stack
            </ScrollFloat>
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            justifyContent="center"
            alignItems="center"
          >
            {techstack.map((tech, index) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={2.4}
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Box
                  sx={{
                    width: { xs: 60, sm: 80, md: 100 },
                    height: { xs: 60, sm: 80, md: 100 },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: { xs: 1, sm: 2 },
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WebDevlop;
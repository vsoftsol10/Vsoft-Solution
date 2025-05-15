import React, { useState } from 'react';
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
import WebsiteHero from '../assets/WebsiteHerobck.jpg';
import WebDevHero from '../assets/WebDeveloper-Hero.jpg';
import Stepper from '../Animations/Stepper';
import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png';
import JS from '../assets/javascript.png';
import Reactjs from '../assets/React.png';
import Nodejs from '../assets/node-js.png';
import MongoDB from '../assets/MongoDB.png';
import Bootstrap from '../assets/Bootstrap.png';
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
  const vsoftPurple = '#803082';
  const vsoftGray = '#999999';
  const handleContactClick = () => {
    navigate('/contact'); // Make sure the /contact route exists
  };

  const developmentCard = [
    {
      icon: WebDev,
      title: 'Web Development',
      description: 'Web development involves designing and building websites, ensuring functionality, responsiveness, and user-friendly experiences.'
    },
    {
      icon: Ecommerce,
      title: 'E- Commerce Development',
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
      title: 'Support and Maintanance',
      description: 'Support and maintenance services involve providing ongoing technical assistance and maintenance to ensure the smooth operation of software systems.'
    }
  ]

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
  ]

  const projects = [{
    id: 1,
    title: "MKM Jewellery",
    image: ProjectMKM,
    link: "https://www.mkmthangamaligai.com/",
    color: "#803082"
  },

  {
    id: 2,
    title: "Durga Traders",
    image: ProjectDurga,
    link: "https://durgatraders.thevsoft.com/",
    color: "#803082"
  },

  {
    id: 3,
    title: "Raja-Lakshmi Crackers",
    image: ProjectCrackers,
    link: "https://raja-lakshmi.vercel.app/",
    color: "#803082"
  }
  ]
  return (
    <>
      {/* Hero Section with Background and Overlay */}
      <Box
        sx={{
          py: 10,
          color: '#fff',
          textAlign: 'center',
          backgroundImage: `url(${WebsiteHero})`,
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
              Web Development
            </Typography>
          </Breadcrumbs>

          {/* Main Text */}
          <Typography variant="h4" fontWeight="bold">
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
              Discover Our Web Development Services
            </AnimatedContent>
          </Typography>
          <Typography variant="body1" sx={{ mt: 3 }}>
            <b>VSoft Solutions is your trusted partner in delivering powerful and custom web development solutions for businesses of all sizes.</b>
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            We specialize in building responsive, secure, and scalable websites and web applications tailored to your unique needs. With a strong focus on user experience and modern technologies, our expert team is committed to crafting seamless digital experiences that drive results. From corporate websites to full-scale e-commerce platforms, VSoft Solutions is your one-stop destination for reliable and innovative web development services.
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

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 10 }, // smaller gap on mobile, larger on desktop
          }}
        >
          {/* Content on the right */}
          <Box sx={{ flex: 1, mr: { md: 6 } }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
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
            <Typography variant="body1" paragraph>
              From Website Creation to Digital Campaigns, We Help You Succeed Online.
            </Typography>

            <Typography variant='body1' paragraph>
              Since 2024, our Tirunelveli-based company has delivered custom web applications for enterprises. As a trusted offshore partner, we build innovative, scalable solutions tailored to your business goals. Let’s shape the future of web technology together.
            </Typography>
          </Box>

          {/* Image on the left */}
          <Box sx={{ flex: 1 }}>

            <Box
              component="img"
              src={WebDevHero}
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

      <Box
        sx={{
          py: 8,
           backgroundColor: '#f4f4f4',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            align="center"
            gutterBottom
          >
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >Our Best Development Services
            </ScrollFloat>

          </Typography>

          {/* Modified Grid to center cards */}
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 4
          }}>
            {/* Map through the array to generate cards */}
            {developmentCard.map((item) => (
              <Card
                key={item.id}
                elevation={0}
                sx={{
                  width: { xs: '100%', sm: '340px' },
                  maxWidth: '100%',
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
                  p: 4,
                  height: '100%'
                }}>
                  <Box
                    sx={{
                      position: 'relative',
                      mb: 3,
                      height: 200,
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
                      sx={{
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      <Box
                        component="img"
                        src={item.icon}
                        alt={item.title}
                        sx={{
                          height: 100,
                          width: 'auto',
                          objectFit: 'contain',
                          mb: 1
                        }}
                      />
                      <Box
                        component="img"
                        src="/api/placeholder/400/320"
                        alt={item.title}
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          opacity: 0, // Hide the placeholder image
                        }}
                      />
                    </Box>
                  </Box>

                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: '#1a237e'
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography variant="body1" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Stepper />

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
                    height="150"
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
                      <Button
                        size="small"
                        endIcon={<ArrowForward />}
                        href={project.link}
                        sx={{ color: '#fff', fontWeight: 'bold', textTransform: 'uppercase' }}
                      >
                        Explore More
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          py: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            sx={{
              mb: { xs: 4, sm: 5, md: 6 },
              fontWeight: 'bold',
              color: 'text.primary'
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
                xs={4}
                sm={3}
                md={2}
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
                    p: { xs: 1, sm: 2 }
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

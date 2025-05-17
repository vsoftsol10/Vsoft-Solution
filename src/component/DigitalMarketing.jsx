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
  useMediaQuery,
  useTheme,
} from '@mui/material';
import AnimatedContent from '../Animations/AnimatedContent';
import ScrollFloat from '../Animations/ScrollFloat';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Language';
import { useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DigiHero from '../assets/DigitalHero.jpg';
import Branding from '../assets/DigiBrand.jpg';
import SocialMedia from '../assets/SocialMedia.jpg';
import FbInsta from '../assets/fbook & insta.jpg';
import GoogleAds from '../assets/GoogleAds.jpg';
import SEO from '../assets/seo.jpg';
import ContentMarketing from '../assets/ContentMarketing.jpg';
import CreativeDesign from '../assets/Creative-design.jpg';
import Explainer from '../assets/Explainervideo.jpg';

const DigitalMarketing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeTab, setActiveTab] = useState(0);
  const vsoftPurple = '#803082';
  const vsoftGray = '#999999';

  const handleContactClick = () => {
    navigate('/contact'); // Make sure the /contact route exists
  };

  const services = [
    {
      id: 1,
      img: Branding,
      title: <AnimatedContent
        distance={180}
        direction="horizontal"
        reverse={false}
        config={{ tension: 100, friction: 80 }}
        initialOpacity={0.1}
        animateOpacity
        scale={1.1}
        threshold={0.5}
      >Branding that Builds Trust</AnimatedContent>,
      description: "A brand is more than just a logo — it's a story, a promise, a personality. We help shape your business identity so that your customers remember who you are and why you matter.",
      points: [
        "Brand Strategy & Positioning",
        "Visual Identity Creation",
        "Tone of Voice & Messaging"
      ],
    },
    {
      id: 2,
      img: SocialMedia,
      title: <AnimatedContent
        distance={180}
        direction="horizontal"
        reverse={true}
        config={{ tension: 100, friction: 80 }}
        initialOpacity={0.1}
        animateOpacity
        scale={1.1}
        threshold={0.5}
      >Social Media Management</AnimatedContent>,
      description: "We manage your digital presence across platforms like Instagram, Facebook, LinkedIn, and more — creating content calendars, engaging posts, and impactful campaigns that reflect your brand voice.",
      points: [
        "Daily/Weekly Content Posting",
        "Hashtag Strategy",
        "Audience Engagement & Community Building",
        "Analytics Reporting"
      ],
    },
    {
      id: 3,
      img: FbInsta,
      title: <AnimatedContent
        distance={180}
        direction="horizontal"
        reverse={false}
        config={{ tension: 100, friction: 80 }}
        initialOpacity={0.1}
        animateOpacity
        scale={1.1}
        threshold={0.5}
      >Facebook & Instagram Marketing</AnimatedContent>,
      description: "Turn followers into customers! We create high-converting ad campaigns and creative visuals to capture attention and generate leads on Meta platforms.",
      points: [
        "Ad Design & Copywriting",
        "Audience Targeting & A/B Testing",
        "Lead Generation Campaigns",
        "Pixel Setup & Conversion Tracking"
      ],
    },
    {
      id: 4,
      img: GoogleAds,
      title: <AnimatedContent
        distance={180}
        direction="horizontal"
        reverse={true}
        config={{ tension: 100, friction: 80 }}
        initialOpacity={0.1}
        animateOpacity
        scale={1.1}
        threshold={0.5}
      >Google Ads (PPC)</AnimatedContent>,
      description: "Get seen when it matters most. Our Google-certified experts set up and manage PPC campaigns that bring in high-intent traffic — whether for your website, landing page, or product.",
      points: [
        "Search, Display & Video Ads",
        "Budget Optimization",
        "Keyword Targeting",
        "ROI-Based Campaign Tracking"
      ],
    },
    {
      id: 5,
      img: SEO,
      title: <AnimatedContent
        distance={180}
        direction="horizontal"
        reverse={false}
        config={{ tension: 100, friction: 80 }}
        initialOpacity={0.1}
        animateOpacity
        scale={1.1}
        threshold={0.5}
      >SEO & Local SEO</AnimatedContent>,
      description: "Climb to the top of search engines with smart SEO strategies that drive organic traffic and local visibility. Perfect for businesses targeting a specific city or region.",
      points: [
        "On-Page & Off-Page SEO",
        "Keyword Research",
        "Google My Business Optimization",
        "Local Listings & Reviews Management"
      ],
    },
    {
      id: 6,
      img: ContentMarketing,
      title: <AnimatedContent
        distance={180}
        direction="horizontal"
        reverse={true}
        config={{ tension: 100, friction: 80 }}
        initialOpacity={0.1}
        animateOpacity
        scale={1.1}
        threshold={0.5}
      >Content Marketing</AnimatedContent>,
      description: "Good content doesn't just inform — it inspires action. From blogs and emails to product descriptions and social posts, we create content that delivers value and builds authority.",
      points: [
        "Blog Articles & Web Copy",
        "Email Campaigns",
        "E-books & Lead Magnets",
        "Product Descriptions & Case Studies"
      ],
    },
    {
      id: 7,
      img: CreativeDesign,
      title: <AnimatedContent
        distance={180}
        direction="horizontal"
        reverse={false}
        config={{ tension: 100, friction: 80 }}
        initialOpacity={0.1}
        animateOpacity
        scale={1.1}
        threshold={0.5}
      >Creative Designing</AnimatedContent>,
      description: "Make your brand visually unforgettable. We design everything you need to shine online — from static graphics to animated visuals.",
      points: [
        "Social Media Creatives",
        "Posters, Brochures, Flyers",
        "Logo & Brand Kit Design",
        "Carousel Ads & Stories"
      ],
    },
    {
      id: 8,
      title: <AnimatedContent
        distance={180}
        direction="horizontal"
        reverse={true}
        config={{ tension: 100, friction: 80 }}
        initialOpacity={0.1}
        animateOpacity
        scale={1.1}
        threshold={0.5}
      >Explainer Videos</AnimatedContent>,
      img: Explainer,
      description: "Tell your story through high-impact, easy-to-understand videos. Our explainer videos simplify complex ideas, making them perfect for product demos, brand introductions, and landing pages.",
      points: [
        "2D & Motion Graphics",
        "Voiceovers & Background Music",
        "Script Writing & Storyboarding",
        "Product Demo Videos"
      ],
    }
  ];

 const advantages = [
  {
    id: 1,
    title: "Tailored Strategy for Every Business",
    description: "We design unique marketing plans based on your goals, audience, and industry—no generic templates, just strategies that drive real business growth."
  },
  {
    id: 2,
    title: "Analytics-Backed Smart Decisions",
    description: "Our strategies rely on real-time data and research. We track and adjust your campaigns continuously to maximize performance and ROI."
  },
  {
    id: 3,
    title: "Proven Success Across Industries",
    description: "From startups to enterprises, our marketing efforts have consistently boosted visibility, traffic, leads, and conversions across multiple business domains."
  },
  {
    id: 4,
    title: "Creative and Performance Driven",
    description: "We combine visually appealing designs with performance-focused strategies to ensure your brand stands out and delivers measurable business results."
  },
  {
    id: 5,
    title: "Quick Execution & Clear Updates",
    description: "We ensure fast turnarounds and open communication. You’ll receive regular updates with full transparency on what’s done and why it matters."
  }
];


  return (
    <>
      <Box
        sx={{
          py: 10,
          color: '#fff',
          textAlign: 'center',
          backgroundImage: `url(${DigiHero})`,
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
              Digital Marketing
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
              Power Up Your Brand with <span style={{ color: vsoftGray }}>VS</span><span style={{ color: vsoftPurple }}>of</span><span style={{ color: vsoftGray }}>t</span> Digital Magic!
            </AnimatedContent>
          </Typography>
          <Typography variant="body1" sx={{ mt: 3 }}>
            <b>Crafted campaigns. Measurable results. Maximum reach.</b>
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Ready to turn clicks into customers? Our creative digital marketing team builds custom strategies that attract, engage, and convert — across every major platform. From reels that go viral to ads that sell, we do it all.
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


      <Box>
        <Typography variant="h3" mt={8} fontWeight="bold" gutterBottom sx={{ textAlign: 'center' }}>
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
          Our Digital Marketing Services Include</AnimatedContent>
        </Typography>
      </Box>
      <Box maxWidth="xl" mx="auto" sx={{ mb: 8 }}>
        {services.map((service, index) => (
          <Box
            key={service.id}
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                md: index % 2 === 0 ? 'row' : 'row-reverse'
              },
              mb: 8,
              backgroundColor: '#f8f9fa',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              '&:hover': {
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
              },
              transition: 'box-shadow 0.3s ease'
            }}
          >
            {/* Product Image */}
            <Box
              sx={{
                flex: 1,
                position: 'relative',
                overflow: 'hidden',
                '&:hover img': {
                  transform: 'scale(1.05)',
                }
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  minHeight: '350px',
                }}
              />
            </Box>

            {/* Product Details */}
            <Box
              sx={{
                flex: 1,
                padding: { xs: 3, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                  fontSize: { xs: '1.75rem', md: '2rem' }
                }}
              >
                {service.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: 'text.secondary'
                }}
              >
                {service.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>


      <Box
        sx={{
          py: 8,
          backgroundColor: '#f8f9fa'
        }}
      >
        <Container maxWidth="xl">
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
            >Why Choose VSoft for Digital Marketing?
            </ScrollFloat>

          </Typography>

          {/* Modified Grid to center cards */}
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 6,
            mt: 6
          }}>
            {/* Map through the array to generate cards */}
            {advantages.map((adv) => (
              <Card
                key={adv.id}
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

                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: '#1a237e'
                    }}
                  >
                    {adv.title}
                  </Typography>

                  <Typography variant="body1" color="text.secondary">
                    {adv.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>


      <Box py={8} sx={{ textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="body1" mb={2} sx={{ color: '#1a237e' }}>
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              Let’s Build Something Big - Together.</ScrollFloat>
          </Typography>

          <Typography variant="body1" mb={3} sx={{ color: '#555', fontSize: '1.1rem' }}>
            Whether you're a startup or an enterprise, <strong>VSoft Solutions</strong> is here to grow your digital footprint with
            innovative marketing strategies and creative excellence.
          </Typography>

          <Typography variant="h6" mb={4} sx={{ color: '#8e24aa' }}>
            Contact us today and let's talk about how we can drive real growth for your business!
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: vsoftPurple,
              color: '#fff',
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#6a1b9a', // darker shade on hover
              },
            }}
            href="/contact" // or a scroll-to-anchor: "#contact-section"
          >
            Contact Us
          </Button>
        </Container>
      </Box>

    </>
  )
}

export default DigitalMarketing
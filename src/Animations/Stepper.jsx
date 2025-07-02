import React from 'react';
import { Box, Container, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import ScrollFloat from './ScrollFloat';
import AnimatedContent from './AnimatedContent';
import Strategies from '../assets/strategies.jpg';
import designer from '../assets/designer.png';
import developer from '../assets/Developer.jpg';
import support from '../assets/supportteam.jpg';
import { img } from 'framer-motion/client';

const StepItem = ({
  number,
  title,
  description,
  color,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{
        mb: { xs: 3, sm: 4, md: 5 },
        flexDirection: isMobile ? 'column' : 'row'
      }}
    >
      {/* Number Column */}
      <Grid
        item
        xs={12}
        sm={2}
        sx={{
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'flex-start',
          mb: isMobile ? 2 : 0
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color,
            fontWeight: 'bold',
            fontSize: { xs: '3rem', sm: '4rem', md: '5rem' }
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
            {number}
          </AnimatedContent>
        </Typography>
      </Grid>

      {/* Content Column */}
      <Grid
        item
        xs={12}
        sm={10}
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center'
        }}
      >

        {/* Text Content */}
        <Box sx={{ textAlign: isMobile ? 'center' : 'left' }}>
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              mb: 1,
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' }
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#e0e0e0',
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' }
            }}
          >
            {description}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default function WebDevProcessStepper() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const steps = [
    {
      number: '01',
      title: 'Strategy',
      description: 'Create a strategic and effective design for the website. This phase involves creating software solutions tailored to specific business needs and requirements.',
      color: '#FF4081',

    },
    {
      number: '02',
      title: 'Design',
      description: 'Implement the responsive design according to our detailed mockups and prototypes. Create visual design, user interface, and interaction concepts.',
      color: '#4CAF50',

    },
    {
      number: '03',

      title: 'Develop',
      description: 'Provide ongoing technical implementation, coding, and bringing the design to life. Transform design concepts into functional web applications.',
      color: '#00BCD4',

    },
    {
      number: '04',
      title: 'Support',
      description: 'Support and maintenance services involve providing ongoing technical assistance and maintenance to ensure the smooth operation of software systems.',
      color: '#FF9800',

    }
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 6 },
        background: `linear-gradient(135deg, 
          rgba(0,0,0,0.9) 0%, 
          rgba(0,0,0,0.8) 50%, 
          rgba(0,0,0,0.9) 100%)`,
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={{ xs: 4, sm: 6, md: 8 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '1.15rem', sm: '2.15rem', md: '1rem' }
            }}
          >
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              Our Web Development Process</ScrollFloat>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#e0e0e0',
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' }
            }}
          >
            Our outstanding Web Development process is geared to provide you with a scalable and high-performance web solution.
          </Typography>
        </Box>

        {steps.map((step, index) => (
          <StepItem key={index} {...step} />
        ))}
      </Container>
    </Box>
  );
}

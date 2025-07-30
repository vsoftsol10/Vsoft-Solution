import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
  Button,
  useMediaQuery,
  StepConnector,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import './StepUp.css';
import StepUpLogo from '../assets/StepUp-final.png';
import StepHero from '../assets/stephero2.webp';
import SapImg from '../assets/sapprogram.webp';


const StepUp = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');

  const ColorConnector = styled(StepConnector)(({ theme }) => ({
    '& .MuiStepConnector-line': {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
    },
  }));

  return (
    <div className="stepup-container">
      <div
        className="hero-section"
        style={{
          position: 'relative',
          backgroundImage: `url(${StepHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Overlay to reduce opacity */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // adjust opacity here (0.3 to 0.6 usually good)
            zIndex: 1,
          }}
        ></div>

        {/* Actual Content */}
        <div className="hero-content" style={{ zIndex: 2, textAlign: 'center' }}>
          <div className="logo-container">
            <img src={StepUpLogo} alt="Step Up Logo" className="logo" />
          </div>
          <h1 className="hero-title" style={{ color: '#fff' }}>
            Let's Step Up to Our Growth
          </h1>
          <p className="hero-subtitle" style={{ color: '#fff', fontWeight: 'bold' }}>
            Build your future with VSoft
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              minHeight: { md: 400 },
              boxShadow: 3,
              borderRadius: 2,
              overflow: 'hidden'
            }}
          >
            {/* Left side - Image */}
            <CardMedia
              component="img"
              sx={{
                width: { xs: '100%', md: '50%' },
                height: { xs: 250, md: 'auto' },
                objectFit: 'cover'
              }}
              image={SapImg}
              alt="sap"
            />

            {/* Right side - Content */}
            <CardContent
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                p: { xs: 2, sm: 3, md: 4 },
                backgroundColor: '#f8f9fa',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  color: '#2c3e50',
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                }}
              >
                SAP Internship/Training Program
              </Typography>

              <Typography
                fontWeight="bold"
                color="primary"
                gutterBottom
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                  mb: { xs: 2, sm: 3 }
                }}
              >
                StepUp - 75 Days Internship & Training Program
              </Typography>

              <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                <strong>StepUp by VSoft Solutions</strong> is offering a <strong>75-day (3-month)</strong> internship and training
                program specially crafted for:
              </Typography>

              <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                 <strong>Students</strong> who want to build their IT career<br />
                 <strong>Women</strong> looking to restart their professional journey after a break
              </Typography>

              <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                This program includes:
              </Typography>

              <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 2 }}>
                {[
                  'Real-time technical & practical training',
                  'Hands-on project experience',
                  'Certification upon successful completion',
                  'Placement assistance and soft skill development',
                ].map((item, idx) => (
                  <li key={idx}>
                    <Typography variant="body1" sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                      {item}
                    </Typography>
                  </li>
                ))}
              </Box>

              <Typography
                variant="h6"
                color="secondary"
                sx={{
                  mt: { xs: 3, sm: 4 },
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                }}
              >
                🔔 Why wait? Let StepUp guide your growth journey.
              </Typography>

              <Box
                sx={{
                  mt: { xs: 3, sm: 4 },
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/stepupsap')}
                  sx={{
                    backgroundColor: 'purple',
                    '&:hover': {
                      backgroundColor: 'indigo'
                    },
                    px: 4,
                    py: 1.5,
                    borderRadius: 1,
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}
                >
                  Know More →
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
        {/* Stay Connected */}
        <section className="stay-connected">
          <h2 className="text-3xl font-bold text-center mb-4 text-purple-700">
            Stay Connected with Us
          </h2>
          <h3 className="text-xl text-center text-gray-700 mb-4">
            Unlock Your Future with Opportunities That Matter!
          </h3>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-4">
            We’re just getting started! 🎯 Join us to receive updates on new internship programs,
            exclusive discounts, and career-boosting offers-designed especially for students
            and job-seeking women. Let’s grow, learn, and rise together.
          </p>

          {/* ✅ New line added here */}
          <p className="text-center text-purple-600 font-medium mb-6">
            Stay connected — exciting new updates are on the way!
          </p>

          <div className="flex justify-center">
            <button
              className="btn-primary px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600 transition-all duration-300"
              onClick={() => navigate('/contact')}
            >
              Contact Us & Stay Informed
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StepUp;

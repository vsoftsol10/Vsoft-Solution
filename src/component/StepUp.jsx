import React, { useEffect, useRef, useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  useMediaQuery,
  StepConnector,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import './StepUp.css';
import StepUpLogo from '../assets/StepUp-final.png';
import StepHero from '../assets/stephero2.webp';


const steps = [
  '21 Days Internship',
  '2 Months Technical + Practical Training',
  'SAP Basis Admin + Placement Assistance',
];


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
        {/* SAP Course Section */}
        <section className="course-details">
          <h2 className="section-title">SAP Course Details</h2>
          <h3 className="section-subtitle">Professional SAP Basis Administration Training</h3>

          <div className="tailor-made-section">
            <h4 className="tailor-title">🎯 Tailor Made For Each Student</h4>

            <div className="eligibility-card">
              <h5>Eligibility:</h5>
              <div className="chips-container">
                <span className="chip">CSE</span>
                <span className="chip">IT</span>
                <span className="chip">ECE</span>
                <span className="chip">B.Sc Science</span>
                <span className="chip">B.Sc Arts</span>
              </div>
            </div>
          </div>

          <div className="course-options">
            <div className="course-card internship-card">
              <div className="card-header">
                <div className="icon time-icon">⏰</div>
                <h3>Internship Program</h3>
              </div>
              <ul className="feature-list">
                <li>✓ Duration: 1 Months</li>
                <li>✓ Fee: ₹3,500</li>
                <li>✓ SAP Basics & Fundamentals</li>
              </ul>
              <div className="special-offer">
                💡 Complete internship & get training discount!
              </div>
            </div>

            <div className="course-card training-card">
              <div className="card-header">
                <div className="icon verified-icon">✅</div>
                <h3>Complete Training</h3>
              </div>
              <ul className="feature-list">
                <li>⭐ Duration: 75 Days</li>
                <li>⭐ Placement Assistance</li>
                <li>⭐ Theory + Practical</li>
                <li>⭐ SAP Certification</li>
              </ul>
              <div className="cta-button-container">
                <button
                  className="cta-button"
                  onClick={() => window.open('https://forms.gle/4KeQeS3DZs92KTZSA', '_blank')}>
                  Join Course Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <Box sx={{ width: '100%', px: 2, py: 4 }}>
          <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4}>
            Step Up Your Career
          </Typography>

          <Stepper
            alternativeLabel={!isMobile}
            orientation={isMobile ? 'vertical' : 'horizontal'}
            connector={<ColorConnector />}
          >
            {steps.map((label, index) => (
              <Step key={index} active completed>
                <StepLabel>
                  <Typography
                    variant={isMobile ? 'body1' : 'subtitle1'}
                    fontWeight="500"
                    textAlign={isMobile ? 'left' : 'center'}
                  >
                    {label}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
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

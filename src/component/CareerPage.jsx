import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Divider, 
  Grid,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Link,
  createTheme,
  ThemeProvider
} from '@mui/material';
import { ChevronDown, MapPin, Briefcase, Clock, Send } from 'lucide-react';
import AnimatedContent from '../Animations/AnimatedContent';

// VSoft Solutions custom theme colors
const vsoftPurple = '#803082';
const vsoftGray = '#999999';

const theme = createTheme({
  palette: {
    primary: {
      main: vsoftPurple,
      contrastText: '#ffffff',
    },
    secondary: {
      main: vsoftGray,
    },
  },
});

const CareerPage = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Google Form URLs for each position
  const googleFormUrlWP = "https://forms.gle/1mqqGZgXT6Z7YBEF6";
  const googleFormUrlDM = 'https://forms.gle/v3kDk8jFwW87c6oQA';
  const googleFormUrlDesign = 'https://forms.gle/DPzvr1XZHGUG1RdV6';

  const openings = [
    {
      id: 'wp-shopify',
      title: 'WordPress/Shopify Intern',
      description: 'VSoft Solutions is looking for an enthusiastic WordPress/Shopify Intern to join our growing development team. You will be responsible for building and maintaining client websites, implementing custom themes, and ensuring optimal site performance.',
      requirements: [
        'Knowledge of WordPress and Shopify platforms',
        'Basic understanding of HTML, CSS, and JavaScript',
        'Ability to implement and customize themes',
        'Problem-solving skills and attention to detail',
        'Passion for learning new technologies'
      ],
      location: 'Remote',
      type: 'Internship',
      formUrl: googleFormUrlWP
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Intern',
      description: 'Join VSoft Solutions marketing team to gain hands-on experience in digital marketing strategies. You will assist in creating content, managing social media campaigns, analyzing performance metrics, and implementing SEO techniques for our clients.',
      requirements: [
        'Basic understanding of digital marketing concepts',
        'Familiarity with social media platforms and analytics tools',
        'Good communication and writing skills',
        'Analytical mindset and creativity',
        'Ability to work in a fast-paced environment'
      ],
      location: 'Remote',
      type: 'Internship',
      formUrl: googleFormUrlDM
    },
    {
      id: 'graphic-designer',
      title: 'Graphic Designer',
      description: 'VSoft Solutions is seeking a creative Graphic Designer with 0-2 years of experience to join our creative team. You will design visual concepts using computer software to communicate ideas that inspire, inform, and captivate our clients\' consumers.',
      requirements: [
        '0-2 years of experience in graphic design',
        'Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)',
        'Understanding of design principles and typography',
        'Strong portfolio demonstrating creativity and versatility',
        'Ability to work with brand guidelines and meet deadlines',
        'Excellent communication skills'
      ],
      location: 'Remote/Hybrid',
      type: 'Full-time',
      formUrl: googleFormUrlDesign
    }
  ];

  // Function to open the specific Google Form URL for each job
  const openGoogleForm = (url) => {
    window.open(url, '_blank');
  };

  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Paper elevation={0} sx={{ p: 4, mb: 6, borderRadius: 2, bgcolor: vsoftPurple, color: 'white' }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
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
          Join VSoft Solutions Team
          </AnimatedContent>
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 4 }}>
          Be part of our innovative journey and grow your career with us
        </Typography>
      </Paper>

      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
        Current Openings
      </Typography>

      <Grid container spacing={4}>
        {openings.map((job) => (
          <Grid item xs={12} key={job.id}>
            <Card elevation={3} sx={{ borderRadius: 2, overflow: 'visible' }}>
              <CardContent sx={{ p: 4 }}>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexWrap="wrap">
                  <Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {job.title}
                    </Typography>
                    <Box display="flex" gap={2} mb={2}>
                      <Box display="flex" alignItems="center">
                        <MapPin size={18} color={vsoftPurple} />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                          {job.location}
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Briefcase size={18} color={vsoftPurple} />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                          {job.type}
                        </Typography>
                      </Box>
                      {job.title === 'Graphic Designer' && (
                        <Box display="flex" alignItems="center">
                          <Clock size={18} color={vsoftPurple} />
                          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                            0-2 Years Experience
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Box>
                  <Chip 
                    label="Apply Now" 
                    color="primary" 
                    sx={{ fontWeight: 'bold', borderRadius: 1, cursor: 'pointer' }}
                    onClick={() => openGoogleForm(job.formUrl)}
                  />
                </Box>
                
                <Accordion 
                  expanded={expanded === job.id} 
                  onChange={handleChange(job.id)}
                  elevation={0}
                  disableGutters
                  sx={{ bgcolor: 'background.default' }}
                >
                  <AccordionSummary
                    expandIcon={<ChevronDown color={vsoftPurple} />}
                    aria-controls={`${job.id}-content`}
                    id={`${job.id}-header`}
                    sx={{ px: 0 }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: 'medium', color: vsoftPurple }}>
                      View Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 0 }}>
                    <Typography variant="body1" paragraph>
                      {job.description}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, color: vsoftPurple }}>
                      Requirements:
                    </Typography>
                    <ul>
                      {job.requirements.map((req, index) => (
                        <li key={index}>
                          <Typography variant="body1">{req}</Typography>
                        </li>
                      ))}
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
              <Divider />
              <CardActions sx={{ p: 3, justifyContent: 'flex-end' }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  endIcon={<Send />}
                  onClick={() => openGoogleForm(job.formUrl)}
                >
                  Apply Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Box mt={8} textAlign="center">
        <Typography variant="h5" gutterBottom sx={{ color: vsoftPurple }}>
          Don't see a position that fits your skills?
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: 600, mx: 'auto' }}>
          VSoft Solutions is always looking for talented individuals to join our team. Send your resume to 
          <Link href="mailto:info@thevsoft.com" sx={{ mx: 1, color: vsoftPurple }}>
            info@thevsoft.com
          </Link>
          and tell us how you can contribute.
        </Typography>
      </Box>
    </Container>
    </ThemeProvider>
  );
};

export default CareerPage;
import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    Step,
    StepLabel,
    Stepper,
    TextField,
    Typography,
    useMediaQuery,
} from '@mui/material';
import AnimatedContent from '../Animations/AnimatedContent';
import { useTheme } from '@mui/material/styles';

const steps = ['Your Info', 'Message', 'Confirm'];

const vsoftPurple = '#803082';
const vsoftGray = '#999999';

const Contact = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleNext = () => {
        const newErrors = validateStep(activeStep);
        if (Object.keys(newErrors).length === 0) {
            setActiveStep((prev) => prev + 1);
        } else {
            setErrors(newErrors);
        }
    };

    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validateStep = (step) => {
        let newErrors = {};
        if (step === 0) {
            if (!formData.name) newErrors.name = 'Name is required';
            if (!formData.email) newErrors.email = 'Email is required';
            if (!formData.phone) newErrors.phone = 'Phone is required';
        }
        if (step === 1) {
            if (!formData.message) newErrors.message = 'Message is required';
        }
        return newErrors;
    };

    return (
        <Container maxWidth="md">
            <Box py={6}>
                <Typography variant="h4" align="center" fontWeight="bold" color={vsoftGray} gutterBottom>
                    <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        reverse={true}
                        config={{ tension: 100, friction: 80 }}
                        initialOpacity={0.1}
                        animateOpacity
                        scale={1.1}
                        threshold={0.5}
                    >
                        Get In <span style={{ color: vsoftPurple }}>Touch</span>
                    </AnimatedContent>
                </Typography>
                <Typography align="center" mb={4}>
                    At VSoft Solutions, we're excited to be a part of your next big idea! Whether you're launching a new product, boosting your digital presence, or transforming your business online, we’re here to help make it happen.
                </Typography>
                <Typography align="center" mb={4}>
                    <b>Let’s collaborate, innovate, and grow–together!</b>
                </Typography>

                <Stepper activeStep={activeStep} alternativeLabel={!isMobile} orientation={isMobile ? 'vertical' : 'horizontal'}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Box mt={4}>
                    {activeStep === 0 && (
                        <Box display="flex" flexDirection="column" gap={3}>
                            <TextField
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                                fullWidth
                            />
                            <TextField
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                fullWidth
                            />
                            <TextField
                                label="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                error={!!errors.phone}
                                helperText={errors.phone}
                                fullWidth
                            />
                        </Box>
                    )}

                    {activeStep === 1 && (
                        <TextField
                            label="Your Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            error={!!errors.message}
                            helperText={errors.message}
                            fullWidth
                            multiline
                            rows={6}
                        />
                    )}

                    {activeStep === 2 && (
                        <Box textAlign="center">
                            <Typography variant="h6" gutterBottom>
                                Thank you for contacting us!
                            </Typography>
                            <Typography color={vsoftGray}>
                                We’ve received your details and will respond shortly.
                            </Typography>
                        </Box>
                    )}

                    <Box mt={4} display="flex" justifyContent="space-between">
                        {activeStep > 0 && activeStep < steps.length && (
                            <Button onClick={handleBack} sx={{ color: vsoftGray }}>
                                Back
                            </Button>
                        )}
                        {activeStep < steps.length - 1 && (
                            <Button
                                onClick={handleNext}
                                sx={{
                                    bgcolor: vsoftPurple,
                                    color: '#fff',
                                    '&:hover': { bgcolor: vsoftGray },
                                }}
                            >
                                Next
                            </Button>
                        )}
                    </Box>
                </Box>
            </Box>

            <Box py={6}>
                <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
                    <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        reverse={true}
                        config={{ tension: 100, friction: 80 }}
                        initialOpacity={0.1}
                        animateOpacity
                        scale={1.1}
                        threshold={0.5}
                    >
                        Let's Connect <span style={{ color: vsoftGray }}>V</span><span style={{ color: vsoftPurple }}>Soft</span> <span style={{ color: vsoftGray }}>Solutions</span>
                    </AnimatedContent>
                </Typography>

                <Typography variant='body1' align="center" mb={4}>
                    Get in touch with VSoft Solutions for all your business and digital requirements. Whether you're looking to develop a website, mobile app, or need expert digital marketing solutions, we’re here to help you bring your vision to life.
                </Typography>
                <Typography variant='body1' align="center" mb={4}>
                    We offer reliable, creative, and budget-friendly solutions to help your business grow and thrive. Partner with us to get your projects developed on time and within your budget estimate – without compromising on quality
                </Typography>
            </Box>
        </Container>
    );
};

export default Contact;

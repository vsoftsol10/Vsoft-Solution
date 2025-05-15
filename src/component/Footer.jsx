import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Stack } from '@mui/material';
import { Instagram, LinkedIn, YouTube, Phone, Language, Email } from '@mui/icons-material';
import logo from '../assets/vslogo_new.png';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f3f6', color: '#000', py: 6 }}>
            <Container maxWidth="xl">
                <Grid container spacing={6}>
                    {/* Column 1 - Address */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Box>
                                <img src={logo} alt="logo" style={{ height: '100px' }} />
                            </Box>
                            <Box>
                                <Typography variant="body2">10J2, 2nd block, Tiruvandrum Road</Typography>
                                <Typography variant="body2">Vannarapettai, Tirunelveli.</Typography>
                                <Typography variant="body2">Tamilnadu - 627002, India.</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Column 2 - Quick Links */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Typography variant="h6" color="#7a337a" fontWeight="bold">
                                Quick Links
                            </Typography>
                            <Stack spacing={1}>
                                <Link href="#" underline="hover" color="black">Career</Link>
                                <Link href="#" underline="hover" color="black">Privacy Policy</Link>
                                <Link href="#" underline="hover" color="black">Terms & Conditions</Link>
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Column 3 - Contact Us */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Typography variant="h6" color="#7a337a" fontWeight="bold">
                                Contact Us
                            </Typography>
                            <Stack spacing={1} color="black">
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Phone fontSize="small" />
                                    <Typography variant="body2">+91 90954 22237</Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Language fontSize="small" />
                                    <Link href="https://www.thevsoft.com" underline="hover" color="black">
                                        www.thevsoft.com
                                    </Link>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Email fontSize="small" />
                                    <Link href="mailto:info@thevsoft.com" underline="hover" color="black">
                                        info@thevsoft.com
                                    </Link>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Column 4 - Social Media */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Typography variant="h6" color="#7a337a" fontWeight="bold">
                                Social Medias
                            </Typography>
                            <Stack spacing={1} color="black">
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Instagram fontSize="small" />
                                    <Typography variant="body2">Instagram</Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <YouTube fontSize="small" />
                                    <Typography variant="body2">YouTube</Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <LinkedIn fontSize="small" />
                                    <Typography variant="body2">LinkedIn</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Map Section – move this here */}
                    <Grid item xs={12}>
                        <Box mt={4} display="flex" justifyContent="center">
                            <iframe
                                title="VSoft Solutions Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.6243021495657!2d77.7263703!3d8.7271784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041150e702fb9b%3A0x9dc459b8cc0f579e!2sVSOFT%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1746771152088!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                style={{ border: 0, borderRadius: '10px', maxWidth: '100%' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </Box>
                    </Grid>
                </Grid>

                {/* Footer Bottom Text */}
                <Box mt={6} textAlign="center" borderTop="1px solid #ddd" pt={3}>
                    <Typography variant="body2">
                        © 2025 Vsoft Solutions. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;

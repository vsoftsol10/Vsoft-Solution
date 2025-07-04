import React, { useEffect, useRef } from 'react';
import {
    Box,
    Container,
    Typography,
    Breadcrumbs,
    Link,
    Button,
    Paper,
    Grid,
    useTheme,
} from '@mui/material';
import { gsap } from 'gsap';
import useMediaQuery from '@mui/material/useMediaQuery';
import WhyApp from '../assets/whyusapp.png'
import { useNavigate } from 'react-router-dom';
import { FaApple, FaAndroid, FaLaptopCode, FaLayerGroup, FaStore, FaMobileAlt, FaClone, FaPlay } from "react-icons/fa";
import AnimatedContent from '../Animations/AnimatedContent';
import ScrollFloat from '../Animations/ScrollFloat';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Language';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AppBack from '../assets/AppBck.jpg';
import AppBanner from '../assets/AppBanner.webp';
import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png';
import JS from '../assets/javascript.png';
import ReactNative from '../assets/Reac-Native.png';
import Nodejs from '../assets/node-js.png';
import MongoDB from '../assets/MongoDB.png';
import Bootstrap from '../assets/Bootstrap.jpg';
import Mui from '../assets/MUI.png';
import Flutter from '../assets/Flutter.png';
import Kotlin from '../assets/kotlin.png';
const ApplicationDevelopment = () => {
    const navigate = useNavigate(); // Initialize the navigate function
    const vsoftPurple = '#803082';
    const vsoftGray = '#999999';
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Fixed the useMediaQuery usage

    const handleContactClick = () => {
        navigate('/contact'); // Now navigate is properly defined
    };
    const headingRef = useRef();

    useEffect(() => {
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power3.out',
            }
        );
    }, []);

    const techServices = [
        { name: "iOS Development", icon: <FaApple className="text-white text-3xl" /> },
        { name: "Android Development", icon: <FaAndroid className="text-white text-3xl" /> },
        { name: "Web Development", icon: <FaLaptopCode className="text-white text-3xl" /> },
        { name: "Cross-Platform Development", icon: <FaLayerGroup className="text-white text-3xl" /> },
        { name: "E-Commerce Development", icon: <FaStore className="text-white text-3xl" /> },
        { name: "Responsive UI/UX Designing", icon: <FaMobileAlt className="text-white text-3xl" /> },
        { name: "Clone App Development", icon: <FaClone className="text-white text-3xl" /> },
        { name: "On-Demand App Development", icon: <FaPlay className="text-white text-3xl" /> },
    ];

    const stacks = [
        { name: 'React Native', icon: ReactNative },
        { name: 'Flutter', icon: Flutter },
        { name: 'Kotlin', icon: Kotlin },
        { name: 'HTML', icon: HTML },
        { name: 'CSS', icon: CSS },
        { name: 'JavaScript', icon: JS },
        { name: 'Node.js', icon: Nodejs },
        { name: 'MongoDB', icon: MongoDB },
        { name: 'BootStrap', icon: Bootstrap },
        { name: 'MUI', icon: Mui },    
    ]

    return (
        <>
            <Box
                sx={{
                    py: 10,
                    color: '#fff',
                    textAlign: 'center',
                    backgroundImage: `url(${AppBack})`,
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
                            Application Development
                        </Typography>
                    </Breadcrumbs>

                    {/* Main Text */}
                    <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                        fontWeight="bold"
                        ref={headingRef}
                    >

                        Power Up Your Business with VSoft App Excellence!

                    </Typography>
                    <Typography variant="body1" sx={{ mt: 3 }}>
                        <b>Smart applications. Seamless workflows. Scalable results.</b>
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Looking to transform your business with custom-built software? Our expert application development team creates intuitive, high-performance apps tailored to your goals — from internal tools to customer-facing platforms. We handle it all, from concept to code to continuous support.
                    </Typography>

                    <Box mt={4} sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleContactClick}
                            sx={{
                                backgroundColor: vsoftPurple, // Using the defined color variable
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
                                reverse={true}
                                config={{ tension: 100, friction: 80 }}
                                initialOpacity={0.1}
                                animateOpacity
                                scale={1.1}
                                threshold={0.5}
                            >
                                Future-Ready App Development Solutions by VSoft
                            </AnimatedContent>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            At <b>VSoft Solutions</b>, our mission is to build powerful, intuitive, and future-ready applications that solve real business problems. We strive to turn your unique ideas into seamless digital experiences—whether it's a mobile app, web platform, or enterprise-grade solution.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            We're not just developers, we're your innovation partners-committed to crafting scalable, secure, and user-centric applications that help you grow faster, serve better, and stand out in today's competitive digital world.
                        </Typography>
                    </Box>

                    {/* Image on the left */}
                    <Box sx={{ flex: 1 }}>
                        <Box
                            component="img"
                            src={AppBanner}
                            alt="Team working together"
                            sx={{
                                width: '85%',
                                height: 'auto'
                            }}
                        />
                    </Box>
                </Box>
            </Container>

            <Box sx={{ px: 2, py: 6, textAlign: "center", backgroundColor: "#fff" }}>
                <Typography variant="subtitle2" color="textSecondary" sx={{ textTransform: "uppercase", mb: 1 }}>
                    Inventing What's Next.
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                    <ScrollFloat
                        distance={180}
                        direction="horizontal"
                        reverse={false}
                        config={{ tension: 100, friction: 80 }}
                        initialOpacity={0.1}
                        animateOpacity
                        scale={1.1}
                        threshold={0.5}
                    >
                        Technological Solutions We Offer
                    </ScrollFloat>
                </Typography>

                <Typography variant="body1" color="textSecondary" sx={{ maxWidth: "700px", mx: "auto", mb: 5 }}>
                    We offer industry specialization business and technology solutions to a wide spectrum of industries across the globe to reach the market.
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {techServices.map((service, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    textAlign: 'center',
                                    p: 3,
                                    borderRadius: 0,
                                    backgroundColor: 'transparent',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        margin: '0 auto',
                                        borderRadius: '50%',
                                        backgroundColor: vsoftPurple, // Using the defined color variable
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 2,
                                    }}
                                >
                                    <Box sx={{ color: '#fff', fontSize: 40 }}>
                                        {service.icon}
                                    </Box>
                                </Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 500, color: '#000' }}>
                                    {service.name}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
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
                                Our Mission
                            </AnimatedContent>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <b>VSoft</b> Solutions is a trusted name in mobile and web app development, backed by a dedicated team with years of industry experience. We specialize in delivering cutting-edge, customized application solutions that align with your business vision.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Our mission is to become a trusted partner for every brand we work with—helping them succeed, scale, and shine in the digital space
                        </Typography>

                        <Typography variant="body1" paragraph>
                            From intuitive UI/UX design to powerful backend development, our full-cycle services are tailored to meet your business goals. We offer:
                        </Typography>

                        <ul style={{ paddingLeft: '1rem', color: '#555' }}>
                            <li>Timely delivery with transparent progress tracking</li>
                            <li>Round-the-clock customer support</li>
                            <li>Competitive pricing tailored to your needs</li>
                            <li>Expertise in e-commerce, on-demand & clone apps</li>
                            <li>Reliable post-launch maintenance & upgrades</li>
                        </ul>
                    </Box>

                    {/* Image on the left */}
                    <Box sx={{ flex: 1 }}>

                        <Box
                            component="img"
                            src={WhyApp}
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
                    py: { xs: 4, sm: 6, md: 8 }
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
                        {stacks.map((stack, index) => (
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
                                        src={stack.icon}
                                        alt={`${stack.name} logo`}
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
    )
}

export default ApplicationDevelopment
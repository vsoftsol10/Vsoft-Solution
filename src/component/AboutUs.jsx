import React from 'react';
import {
    Box,
    Container,
    Typography,
    Breadcrumbs,
    Link,
    Grid,
    Card,
    CardContent,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import ScrollFloat from '../Animations/ScrollFloat';
import AnimatedContent from '../Animations/AnimatedContent';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import WebIcon from '@mui/icons-material/Language';
import { useNavigate } from 'react-router-dom';
import AbtHead from '../assets/about-head.webp';
import BuildIcon from '@mui/icons-material/Build';
import GroupsIcon from '@mui/icons-material/Groups';
import SupportIcon from '@mui/icons-material/Support';
import Vision from '../assets/vision.webp';
import Mission from '../assets/mission.webp';
import ClientLogoSlider from '../Animations/ClientLogoSlider';

const AboutUs = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const vsoftPurple = '#803082';
    const vsoftGray = '#999999';

    // Array of objects for "Why Choose Us" section
    const whyChooseUsItems = [
        {
            id: 1,
            title: "Innovative Solutions",
            description: "Smart ideas for your digital growth.",
            icon: (props) => <BuildIcon {...props} />,
            iconTransform: 'scale(1.5) rotate(-15deg)'
        },
        {
            id: 2,
            title: "Client-Centric Approach",
            description: "We focus on your business goals.",
            icon: (props) => <GroupsIcon {...props} />,
            iconTransform: 'scale(1.5)'
        },
        {
            id: 3,
            title: "End-to-End Support",
            description: "Support from start to finish.",
            icon: (props) => <SupportIcon {...props} />,
            iconTransform: 'scale(1.5) rotate(15deg)'
        }
    ];

    return (
        <>
            {/* Hero Section with Background */}
            <Box
                sx={{
                    py: 10,
                    color: '#fff',
                    textAlign: 'center',
                    backgroundImage: `url(${AbtHead})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                }}
            >
                {/* Overlay */}
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
                <Container sx={{ position: 'relative', zIndex: 2 }}>
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
                        <Typography color="#fff" sx={{ display: 'flex', alignItems: 'center' }}>
                            <WebIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            About Us
                        </Typography>
                    </Breadcrumbs>
                    <Typography variant="h2" fontWeight="bold">
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
                            About Us
                        </AnimatedContent>
                    </Typography>
                    <Typography variant="body1" paragraph>
                        VSoft Solutions is Empowering Businesses Through Digital Excellence.
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        gap: 8,
                    }}
                >
                    {/* Image on the left */}
                    <Box sx={{ flex: 1 }}>

                        <Box
                            component="img"
                            src={Vision}
                            alt="Team working together"
                            sx={{
                                width: '55%',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                            }}
                        />
                    </Box>

                    {/* Content on the right */}
                    <Box sx={{ flex: 1 }}>
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
                                Our Vision
                            </AnimatedContent>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            At <b>VSoft Solutions</b>, our vision is to empower businesses of all sizes with smart, scalable, and future-ready digital solutions. We aspire to be a global leader in digital transformation by building innovative websites, impactful mobile apps, and result-driven marketing strategies that help our clients thrive in the digital age.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            We are driven by a commitment to quality, creativity, and client success, constantly pushing boundaries to deliver technology that not only works—but wows. Our goal is to be the most trusted partner for companies looking to enhance their online presence, grow their brand, and connect with their audience in meaningful ways.
                        </Typography>
                    </Box>
                </Box>
            </Container>

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
                            At <b>VSoft Solutions</b>, our mission is to empower businesses by delivering reliable, creative, and result-oriented digital services. We aim to help companies—big or small—unlock their full potential through smart technology, stunning designs, and impactful digital marketing strategies.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Our mission is to become a trusted partner for every brand we work with—helping them succeed, scale, and shine in the digital space
                        </Typography>
                    </Box>

                    {/* Image on the left */}
                    <Box sx={{ flex: 1 }}>

                        <Box
                            component="img"
                            src={Mission}
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
                    width: '100%',
                    background: `linear-gradient(90deg,rgb(15, 93, 145) 0%,rgb(116, 77, 128) 50%, rgba(168, 81, 197, 0.95) 100%)`,
                    py: { xs: 6, md: 8 },
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Abstract triangle shape inspired by logo */}
                <Box
                    sx={{
                        position: 'absolute',
                        width: '300px',
                        height: '300px',
                        background: `${vsoftPurple}22`,
                        transform: 'rotate(45deg)',
                        top: '-150px',
                        left: '-150px',
                        borderRadius: '30px',
                        zIndex: 1,
                    }}
                />

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
                    <Grid container spacing={4} alignItems="center">
                        {/* Left side - "We are VSoft Solutions" */}
                        <Grid item xs={12} md={5}>
                            <Box>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: '3rem', md: '4rem' },
                                        fontWeight: 700,
                                        color: 'white',
                                        lineHeight: 1.1,
                                        mb: 1,
                                    }}
                                >
                                    We are
                                </Typography>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: '3rem', md: '4rem' },
                                        fontWeight: 700,
                                        color: vsoftGray,
                                        lineHeight: 1.1,
                                    }}
                                >
                                    VS<span style={{ color: vsoftPurple }}>o</span>ft
                                </Typography>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: '2rem', md: '2.8rem' },
                                        fontWeight: 500,
                                        color: vsoftGray,
                                        letterSpacing: '4px',
                                        lineHeight: 1.1,
                                    }}
                                >
                                    SOLUT<span style={{ color: vsoftPurple }}>I</span>ONS
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Right side - Company description */}
                        <Grid item xs={12} md={7}>
                            <Box>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        mb: 3,
                                        lineHeight: 1.6,
                                    }}
                                >
                                    At VSoft Solutions, we specialize in crafting tailored digital solutions that help businesses thrive online. With a focus on innovation and quality, we've successfully delivered projects across web development, app creation, and digital marketing. Our client-centric approach ensures every solution is aligned with business goals, making us a trusted partner for digital growth.
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        mb: 1,
                                        lineHeight: 1.6,
                                    }}
                                >
                                    At VSoft Solutions, we bring the <Box component="span" sx={{ color: vsoftPurple, fontWeight: 'bold' }}>firepower of creativity</Box> and the <Box component="span" sx={{ color: vsoftGray, fontWeight: 'bold' }}>focus of a results-driven team</Box>. We don't just deliver projects we build <Box component="span" sx={{ color: vsoftPurple, fontWeight: 'bold' }}>bold digital experiences</Box> that help brands shine. With a blend of tech smarts and business insight, our <Box component="span" sx={{ color: vsoftGray, fontWeight: 'bold' }}>solutions work as hard as you do</Box>. Let's create something amazing together!
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Why Choose Us Section - Modified to center cards */}
            <Box
                sx={{
                    py: 8,
                    backgroundColor: 'background.default',
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
                        >Why Choose Us
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
                        {whyChooseUsItems.map((item) => (
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
                                            {item.icon({
                                                sx: {
                                                    fontSize: 60,
                                                    color: vsoftPurple,
                                                    transform: item.iconTransform,
                                                    mb: 1
                                                }
                                            })}
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


            <ClientLogoSlider />
        </>
    );
};

export default AboutUs;
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import WebDevlop from './component/WebDevlop';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter here
import AboutUs from './component/AboutUs';
import Contact from './component/Contact';
import DigitalMarketing from './component/DigitalMarketing';
import WordPress from './component/WordPress';
import UiUx from './component/UiUx';
import Career from './component/CareerPage';
import ScrollToTop from './component/ScrollToTop';
import ApplicationDevelopment from './component/ApplicationDevelopment';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7a337a', // Purple color from your design
    },
    secondary: {
      main: '#000000', // Black for buttons
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          },
        },
      },
    },
  },
});
function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/website-development" element={<WebDevlop />} />
          <Route path="/services/app-development" element={<ApplicationDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/wordpress-development" element={<WordPress />} />
          <Route path='/services/ui-ux-design' element={<UiUx/>} ></Route>
          <Route path='/career' element={<Career/>} ></Route> 
        </Routes>
      
      <Footer />
    </>
  );
}

export default App;

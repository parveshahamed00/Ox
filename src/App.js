import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import AOS from 'aos';
import { useEffect } from 'react';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a custom duration
  }, []);
  return (
    <div>
      <NavBar></NavBar>
<Hero/>
<AboutUs/>
<Services/>
<Contact/>
<Footer/>
    </div>
  );
}

export default App;

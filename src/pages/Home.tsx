import { useEffect} from 'react';
import Navbar from '../comp/Navbar';
import Footer from '../comp/Footer';

import Banner from '../comp/Banner';
import ServiceSection from '../comp/ServiceSection';
import OurService from '../comp/OurServiceSection';
import TestimonialsSection from '../comp/Testimony';
import CryptoNews from '../comp/CryptoNews';
import HairShowcase from '../comp/HairShowcase';



function Home() {


  useEffect(() => {
   
  }, []);

  return (
    <div>
      <Navbar  />
      <Banner/>
      <ServiceSection/>
      <OurService/>
      <TestimonialsSection/>
      <CryptoNews/>
      <HairShowcase/>
      <Footer/>
    </div>  );
}

export default Home;

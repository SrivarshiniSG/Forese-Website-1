import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import IntroImg1 from "../assets/IMG_1289.JPG";
import './MockStyles.css';
import { ImOffice } from 'react-icons/im';
import MK1 from "../assets/mk1.jpg";
import MK2 from "../assets/mk2.jpg";
import MK3 from "../assets/mk3.jpg";
import MK4 from "../assets/mk4.jpg";
import MK5 from "../assets/mk5.jpg";
import MK6 from "../assets/mk6.JPG";
import LazyImage from '../components/LazyImage';

const Mock = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Create an array of image sources
  const images = [MK1, MK2, MK3, MK4, MK5, MK6];

  return (
    <div>
      <Navbar />
      <div className='mockstyles'>
        <h3>MOCK PLACEMENTS</h3>

        <p>
          FORESE's Mock Placements event stands as our flagship annual program, dedicated exclusively to pre-final year students across all academic disciplines. This remarkable preparatory event fosters a competitive atmosphere, offering students valuable insights into the dynamics of actual placement processes.
          Annually, approximately 900 pre-final year students undergo technical assessments by around 120 HR professionals and industry experts. Through individual interviews and group discussion sessions, students receive personalized feedback aimed at honing their skill sets in readiness for upcoming placement opportunities.
          With each passing year, Mock Placements continues to empower students with essential skills and invaluable exposure. In 2024, the event attracted participation from over 100 prominent companies, both online and offline. FORESE, in collaboration with our esteemed institution, Sri Venkateswara College of Engineering, takes immense pride in the success of our flagship event and remains steadfast in our commitment to delivering enhanced outcomes year after year.
        </p>

        <div className='image-container'>
          {images.map((image, index) => (
            <LazyImage key={index} src={image} alt={`MK${index + 1}`} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mock;

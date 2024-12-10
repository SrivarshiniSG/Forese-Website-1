import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import HackImg from '../assets/hack.jpg';
import './HackathonStyles.css';

const Hackathon = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="hackathon-heading-container">
        <h1 className="hackathon-heading">HACKATHON</h1>
      </div>

      <div className="hackathon-creative-container">
        <div className="hackathon-content-box">
          <img
            src={HackImg}
            alt="Creative"
            className="hackathon-creative-image"
          />
          <div className="hackathon-text-content">
            <h1>HACKATHON</h1>
            <p>
            FORESE and Coders' Forum held their first 24-hour hackathon, exclusively for pre-final year college students. The event was sponsored by EDWISE INTERNATIONAL and took place on January 28-29, 2023, at Sri Venkateswara College of Engineering, Sriperumbudur.

            Twenty teams were shortlisted for the final round, out of all the submissions received. The shortlisted teams built working models of their products and were guided by mentors from the Coders' Forum. After 24 hours, a team of six professionals from Sahaj Software judged the teams and announced the top three teams as winners. The winning teams received cash prizes of ₹5,000, ₹3,000, and ₹1,500 for the first, second, and third places, respectively.

            The hackathon not only provided a great learning experience for all the participants but also gave them insights into industry practices. Sahaj Software shortlisted five candidates and offered them internship interviews. The hackathon was a great success, and it was a great opportunity for the students to showcase their skills.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Hackathon;
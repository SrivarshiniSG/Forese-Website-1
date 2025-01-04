import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import CFlogo from '../assets/codersforumlogo.jpg';
import TeamMember1 from '../assets/member1.jpg';
import TeamMember2 from '../assets/member2.jpg';
import './CodersForumStyles.css';
import { useNavigate } from 'react-router-dom';

const CodersForum = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/hackathon');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='cf'>
        <img src={CFlogo} alt="CFlogo" />
        <h3>About Coder's Forum</h3>
        <p>
        The Coders’ Forum is a wing of FORESE which believes in the motto of students helping students. Our mission is to break down the barriers students face while learning to code, fostering a supportive and dynamic environment for growth. The forum is driven by experienced mentors who are passionate about helping their peers enhance their coding skills and prepare for the technical challenges they will encounter in placements. Through a series of hands-on interactive teaching sessions, hackathons and skill-building workshops, we empower students to confidently navigate technical interviews and excel in their coding careers.
        </p>

        <button className='btn' onClick={handleClick}>Hackathon</button>

        <div className="team-section">
          <div className="team-member">
            <img src={TeamMember1} alt="Team Member 1" />
            <h4>Gokul S</h4>
            <p>Knowing what it feels to be in pain, is exactly why we try to be kind to others.</p>
          </div>
          
          <div className="team-member">
            <img src={TeamMember2} alt="Team Member 2" />
            <h4>Robin Kumar</h4>
            <p>A dreamer and an optimist with a curious mind finding beauty in small moments.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CodersForum;


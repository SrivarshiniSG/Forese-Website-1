import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import "./AboutStyles.css"
import { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar/>
      <div className='about'> 
        
          <h3>ABOUT US</h3>

          <p>FORESE (FORum for Economic Studies by Engineers) is a student-led initiative dedicated to bridging the gap between engineering education and the professional world. By offering practical learning experiences and fostering industry-relevant skills, FORESE prepares students to excel in placements and thrive in their careers. The forum is a dynamic space where students gain exposure to the intricacies of the placement process while developing essential qualities like teamwork, communication, and critical thinking.</p>
          <p>At FORESE, members immerse themselves in activities that closely mirror real-world recruitment scenarios. Mock interviews and placement simulations help them refine their problem-solving abilities, technical expertise, and interview techniques, ensuring they are well-prepared for future challenges. Regular aptitude tests and skill enhancement sessions focus on analytical and technical proficiency, instilling a culture of continuous learning.</p>
          <p>Engagement with industry professionals is a cornerstone of FORESE’s approach. Through expert talks, corporate interactions, and networking opportunities, members gain valuable insights into industry trends, expectations, and evolving career paths. These experiences not only provide clarity on professional demands but also help students establish meaningful connections with leaders across various fields.</p>
          <p>In addition to technical and professional preparation, FORESE emphasizes personal growth. Members collaborate on team projects that simulate workplace environments, fostering creativity and effective communication. Workshops and sessions on stress management and confidence building equip students with the resilience to handle high-pressure situations, such as placement interviews, with poise and assurance.</p>
          <p>What sets FORESE apart is its hands-on and holistic approach to career readiness. By simulating placement processes and providing real-world exposure, the forum creates an enriching ecosystem for students to grow and excel. FORESE’s ultimate goal is to empower engineering students for long-term success by equipping them with the skills, confidence, and professional networks they need to navigate their careers effectively.</p>
          
      </div>
      <Footer />
    </div>
  )
}

export default About


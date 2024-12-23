import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ContactStyles.css';
// import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="contact-wrapper">
        <h1 className="contact-heading">CONTACT US</h1>
        <div className="contact-box">
          <div className="contact">
            <div className="contactleft">
              {/* Email Section */}
              <div className="contact-item">
                {/* <FaEnvelope className="contact-icon" /> */}
                <div className="contact-info email-info">
                  <h2>Email:</h2>
                  <p>forese.co.in</p>
                </div>
              </div>

              {/* LinkedIn Section */}
              <div className="contact-item">
                {/* <FaLinkedin className="contact-icon" style={{ color: '#0077b5' }} /> */}
                <div className="contact-info">
                  <h2>LinkedIn:</h2>
                  <a
                    href="https://www.linkedin.com/company/forese/mycompany/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.linkedin.com/company/forese/mycompany/
                  </a>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="contact-item location-item">
              {/* <FaMapMarkerAlt className="contact-icon" /> */}
              <div className="contact-info">
                <h2>Location:</h2>
                <div className="map-container">
                  {/* Updated Google Map iframe with correct coordinates */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.4232162922085!2d79.9720!3d12.9873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14ec478afff1%3A0x91f6b60c3fd0fe62!2sSri%20Venkateswara%20College%20of%20Engineering%2C%20Sriperumbudur%2C%20Kanchipuram!5e0!3m2!1sen!2sin!4v1678740282343!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;



// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import './ContactStyles.css';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
// import { useEffect } from 'react';

// const Contact = () => {

//     useEffect(() => {
//         window.scrollTo(0, 0);
//       }, []);

//     return (
//         <div>
//             <Navbar />
//             <div className='contact-wrapper'>
//                 <h1 className='contact-heading'>CONTACT US</h1>
//                 <div className='contact-box'>
//                     <div className='contact'>
//                         <div className='contactleft'>
//                             <div className='contact-item'>
//                                 <FaEnvelope className='contact-icon' />
//                                 <div className='contact-info email-info'>
//                                     <h2>Email:</h2>
//                                     <p>forese.co.in</p>
//                                 </div>
//                             </div>
//                             <div className='contact-item'>
//                                 <FaMapMarkerAlt className='contact-icon' />
//                                 <div className='contact-info'>
//                                     <h2>Location:</h2>
//                                     <p>Placement Cell, Sri Venkateswara College of Engineering</p>
//                                 </div>
//                             </div>
//                             <div className='contact-item'>
//                                 <FaPhone className='contact-icon' />
//                                 <div className='contact-info phone-info'>
//                                     <h2>Phone:</h2>
//                                     <p>9876543210</p>
//                                 </div>
//                             </div>
//                             <div className='contact-item'>
//                                 <FaLinkedin className='contact-icon' />
//                                 <div className='contact-info'>
//                                     <h2>LinkedIn:</h2>
//                                     <a
//                                         href="https://www.linkedin.com/company/forese/mycompany/"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         https://www.linkedin.com/company/forese/mycompany/
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default Contact;



// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import './ContactStyles.css';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

// const Contact = () => {
//     return (
//         <div>
//             <Navbar />
//             <div className='contact-wrapper'>
//                 <h1 className='contact-heading'>CONTACT US</h1>
//                 <div className='contact-box'>
//                     <div className='contact'>
//                         <div className='contactleft'>
//                             <div className='contact-item'>
//                                 <FaEnvelope className='contact-icon' />
//                                 <div className='contact-info'>
//                                     <h2>Email:</h2>
//                                     <p>forese.co.in</p>
//                                 </div>
//                             </div>

                            

//                             <div className='contact-item'>
//                                 <FaMapMarkerAlt className='contact-icon' />
//                                 <div className='contact-info'>
//                                     <h2>Location:</h2>
//                                     <p>Placement Cell, Sri Venkateswara College</p>
//                                 </div>
//                             </div>
//                             <div className='contact-item'>
//                                 <FaPhone className='contact-icon' />
//                                 <div className='contact-info'>
//                                     <h2>Phone:</h2>
//                                     <p>9876543210</p>
//                                 </div>
//                             </div>
//                             <div className='contact-item'>
//                                 <FaLinkedin className='contact-icon' />
//                                 <div className='contact-info'>
//                                     <h2>LinkedIn:</h2>
//                                     <a
//                                         href="https://www.linkedin.com/company/forese/mycompany/"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         https://www.linkedin.com/company/forese/mycompany/
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default Contact;



// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import './ContactStyles.css';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

// const Contact = () => {
//     return (
//         <div>
//             <Navbar />
//             <div className='contact-wrapper'>
//                 <h1 className='contact-heading'>CONTACT US</h1>
//                 <div className='contact-box'>
//                     <div className='contact'>
//                         <div className='contactleft'>
//                             <div className='contact-item'>
//                                 <FaEnvelope className='contact-icon' />
//                                 <div className='contact-info'>
//                                     <h2>Email:</h2>
//                                     <p>forese.co.in</p>
//                                 </div>
//                             </div>
//                             <div className='contact-item'>
//                                 <FaMapMarkerAlt className='contact-icon' />
//                                 <div className='contact-info'>
//                                     <h2>Location:</h2>
//                                     <p>Placement Cell, Sri Venkateswara College</p>
//                                 </div>
//                             </div>
//                             <div className='contact-item'>
//                                 <FaPhone className='contact-icon' />
//                                 <div className='contact-info'>
//                                     <h2>Phone:</h2>
//                                     <p>9876543210</p>
//                                 </div>
//                             </div>
//                             <div className='contact-item'>
//                                 <FaLinkedin className='contact-icon' />
//                                 <div className='contact-info'>
//                                     <h2>LinkedIn:</h2>
//                                     <a
//                                         href="https://www.linkedin.com/company/forese/mycompany/"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         https://www.linkedin.com/company/forese/mycompany/
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default Contact;




// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import './ContactStyles.css';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'; // Importing icons

// const Contact = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className='contact-wrapper'>
//         <h1 className='contact-heading'>CONTACT US</h1>
//         <div className='contact-box'>
//           <div className='contact'>
//             <div className='contactleft'>
//               <div className='contact-item'>
//                 <FaEnvelope className='contact-icon' />
//                 <h2>Email: </h2>
//                 <p>forese.co.in</p>
//               </div>
//               <div className='contact-item'>
//                 <FaMapMarkerAlt className='contact-icon' />
//                 <h2>Location: </h2>
//                 <p>Placement Cell, Sri Venkateswara College</p>
//               </div>
//               <div className='contact-item'>
//                 <FaPhone className='contact-icon' />
//                 <h2>Phone: </h2>
//                 <p>9876543210</p>
//               </div>
//               <div className='contact-item'>
//                 <FaLinkedin className='contact-icon' />
//                 <h2>LinkedIn: </h2>
//                 <a href="https://www.linkedin.com/company/forese/mycompany/" target="_blank" rel="noopener noreferrer">
//                   https://www.linkedin.com/company/forese/mycompany/
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Contact;



// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import './ContactStyles.css';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'; // Importing icons

// const Contact = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className='contact-wrapper'>
//         <h1 className='contact-heading'>CONTACT US</h1>
//         <div className='contact'>
//           <div className='contactleft'>
//             <div className='contact-item'>
//               <FaEnvelope className='contact-icon' />
//               <h2>Email: </h2>
//               <p> forese.co.in</p>
//             </div>
//             <div className='contact-item'>
//               <FaMapMarkerAlt className='contact-icon' />
//               <h2>Location: </h2>
//               <p> Placement Cell, Sri Venkateswara College</p>
//             </div>
//             <div className='contact-item'>
              
//               <FaPhone className='contact-icon' />
//               <h2>Phone: </h2>
//               <p> 9876543210</p>
//             </div>
//             <div className='contact-item'>
//               <FaLinkedin className='contact-icon' />
//               <h2>LinkedIn: </h2>
//               <a href="https://www.linkedin.com/company/forese/mycompany/" target="_blank" rel="noopener noreferrer">
//                  https://www.linkedin.com/company/forese/mycompany/
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Contact;




// import React from 'react'
// import Navbar from "../components/Navbar"
// import Footer from '../components/Footer'
// import './ContactStyles.css'

// const Contact = () => {
//   return (
//     <div>
//       <Navbar />
//     <div className='contact-wrapper'>
//       <h1 className='contact-heading'>CONTACT US</h1>
//       <div className='contact'>
//         <div className='contactleft'>
//             <h2>Mail ID: </h2>
//             <h2>Phone Number: </h2>
//             <h2>Location: </h2>
//             <h2>Linkedln Profile: </h2>
//         </div>
//         <div className='contactright'>
//             <p>forese.co.in</p>
//             <p>9876543210</p>
//             <p>Placement Cell, Sri Venkateswara College</p>
//             <a href="https://www.linkedin.com/company/forese/mycompany/">https://www.linkedin.com/company/forese/mycompany/</a>
//         </div>
//       </div>
//     </div>
//     <Footer />
//     </div>
//   )
// }

// export default Contact

{/* <div >
      <Navbar/>
      <Form /> 
      
      <Footer/>
    </div> */}


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaShieldAlt, FaVideo, FaMedkit, FaSearch, FaHandSparkles, FaFireExtinguisher } from 'react-icons/fa';
import { FaFacebookF, FaYoutube, FaSoundcloud, FaGlobe } from 'react-icons/fa';
import '../style/About.css';

//images//
import ourStoryImage from '../assets/event/Aboutstory.png';
import djZeeImage from '../assets/DJs/dj1.png'; 
import djRheaImage from '../assets/DJs/dj2.png';
import djKaiImage from '../assets/DJs/dj3.png'; 
import djShivaayImage from '../assets/DJs/dj4.png';
import Aboutimg from '../assets/event/about1.png';
const AboutSection = () => {
    const djData = [
  { 
    name: 'DJ ZEE', 
    country: 'MUMBAI, INDIA', 
    image:  djZeeImage , 
    social: { facebook: '#', youtube: '#', soundcloud: '#', website: '#' } 
  },
  { 
    name: 'RHEA', 
    country: 'BANGALORE, INDIA', 
    image: djRheaImage,
    social: { facebook: '#', youtube: '#', soundcloud: '#', website: '#' } 
  },
  { 
    name: 'KAI', 
    country: 'DELHI, INDIA', 
    image: djKaiImage, 
    social: { facebook: '#', youtube: '#', soundcloud: '#', website: '#' } 
  },
  { 
    name: 'SHIVAAY', 
    country: 'GOA, INDIA', 
    image: djShivaayImage, 
    social: { facebook: '#', youtube: '#', soundcloud: '#', website: '#' } 
  },
]
  return (
    <>
    {/* <Navbar/> */}
    <section className="about-section text-light py-5">
      <Container>
        <Row className="align-items-center">
          {/* Text Section */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <p className="about-subtitle mb-2">ABOUT US</p>
            <h1 className="about-title">
              WELCOME TO <br/><span className="outline-text">SKY LOUNGE</span>
            </h1>
            <p className="about-description mt-3">
         Step into a world where every detail is designed for your enjoyment. From signature drinks to electrifying beats, we create unforgettable moments. Indulge in the atmosphere, celebrate with friends, and make every night extraordinary.
         </p>
          </Col>

          {/* Image Section */}
          <Col lg={6}>
            <Row>
             
              <Col xs={12}>
                <div className="about-image bottom-image">
                  <img
                    src={Aboutimg}
                    alt="DJ stage"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      
      {/* 6. Our Story Section */}
      <div className="our-story-section">
          <Container>
              <div className="our-story-grid">
                  <div className="our-story-image-column">
                      {/* Image: Large image on the left */}
                      {/* Placeholder image; replace with your actual path */}
                      <img src={ourStoryImage} alt="DJ performing in the club" />
                  </div>
                  <div className="our-story-text-column">
                      <p className="our-story-subtitle">OUR STORY</p>
                      <h2 className="our-story-title">
                          THE STORY <br/>
                          BEHIND <br/>
                          <span className="our-story-title-outline">SKY LOUNGE</span>
                      </h2>
                      <p className="our-story-description">
✨ Welcome to the Ultimate Nightlife Experience
Relax, unwind, and immerse yourself in an atmosphere of style and excitement. From handcrafted cocktails to vibrant music, every moment is designed to delight. Join us for unforgettable nights where fun, luxury, and good vibes come together.                      </p>
                  </div>
              </div>
          </Container>
      </div>

     
     
      {/* 7. Security Measures Section */}
      <div className="security-section">
          <Container>
              <div className="security-header">
                  <p className="security-subtitle">WE CARE ABOUT YOU</p>
                  <h2 className="security-title">
                      YOUR SECURITY <br/>
                      COMES FIRST
                  </h2>
              </div>

              <div className="security-grid">
                  <div className="security-card">
                      <div className="security-icon">
                          {/* React Icon for Security Team */}
                          <FaShieldAlt size={64} /> 
                      </div>
                      <h3 className="security-card-title">SECURITY TEAM</h3>
                      <p className="security-card-description">
                          Your safety is our top priority. Our trained professionals ensure a secure, comfortable, and worry-free experience so you can fully enjoy the night.
                      </p>
                  </div>

                  <div className="security-card">
                      <div className="security-icon">
                          {/* React Icon for Surveillance */}
                          <FaVideo size={64} /> 
                      </div>
                      <h3 className="security-card-title">SURVEILLANCE</h3>
                      <p className="security-card-description">
                          Advanced monitoring ensures a safe and secure environment at all times. Our team keeps a vigilant eye so you can enjoy the night worry-free.
                      </p>
                  </div>
                  
                  <div className="security-card">
                      <div className="security-icon">
                          {/* React Icon for First Aid */}
                          <FaMedkit size={64} /> 
                      </div>
                      <h3 className="security-card-title">FIRST AID</h3>
                      <p className="security-card-description">
                          Our trained medical team is always on standby to ensure prompt care and peace of mind, so you can enjoy your night safely.
                      </p>
                  </div>

                  <div className="security-card">
                      <div className="security-icon">
                          {/* React Icon for Metal Detectors */}
                          <FaSearch size={64} /> 
                      </div>
                      <h3 className="security-card-title">METAL DETECTORS</h3>
                      <p className="security-card-description">
                          Ensuring a secure environment from the moment you enter, our metal detectors help keep every guest safe without slowing down the fun.
                      </p>
                  </div>

                  <div className="security-card">
                      <div className="security-icon">
                          {/* React Icon for Sanitizer Area */}
                          <FaHandSparkles size={64} /> 
                      </div>
                      <h3 className="security-card-title">SANITIZER AREA</h3>
                      <p className="security-card-description">
                          Stay refreshed and protected with conveniently located sanitizing stations throughout the venue. Hygiene meets comfort.
                      </p>
                  </div>

                  <div className="security-card">
                      <div className="security-icon">
                          {/* React Icon for Smoke Detector (using FaFireExtinguisher for now, you can find a better match) */}
                          <FaFireExtinguisher size={64} /> 
                      </div>
                      <h3 className="security-card-title">SMOKE DETECTOR</h3>
                      <p className="security-card-description">
                          Our advanced smoke detection systems are integrated throughout the venue, ensuring immediate response and compliance with all fire safety regulations.
                      </p>
                  </div>
              </div>
          </Container>
      </div>
     {/* 8. Meet Our DJ's Section */}
      <div className="djs-section">
        <Container>
          <div className="djs-header">
            <p className="djs-subtitle">OUR DJ'S</p>
            <h2 className="djs-title">
              MEET OUR <br />
              AMAZING <span className="djs-title-outline">DJ'S</span>
            </h2>
          </div>

         <div className="djs-grid">
  {djData.map((dj, index) => (
    <div
      className="dj-card"
      key={index}
      style={{ backgroundImage: `url(${dj.image})` }}
    >
      <div className="dj-info">
        <h3 className="dj-name">{dj.name}</h3>
        <p className="dj-country">{dj.country}</p>
        <div className="dj-socials">
          <a href={dj.social.facebook}><FaFacebookF /></a>
          <a href={dj.social.youtube}><FaYoutube /></a>
          <a href={dj.social.soundcloud}><FaSoundcloud /></a>
          <a href={dj.social.website}><FaGlobe /></a>
        </div>
      </div>
    </div>
  ))}
</div>

        </Container>
      </div>
    </section>
  
    </>
  );
};

export default AboutSection;

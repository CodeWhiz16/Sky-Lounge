import React, { useState, useRef } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Play, Pause } from 'lucide-react'; 
import '../style/home.css';
import Navbar from '../componentS/header';
//event image //
import EMONITE from '../assets/event/EMONITE.png';
import KASKADE from '../assets/event/KASKADE.png';
import SICKICK from '../assets/event/SICKICK.png';
import SPECIALGUEST from '../assets/event/GUEST.png';
import TIESTO from '../assets/event/TIESTO.png';
import IANASHER from '../assets/event/IANASHER.png';
const HeroVideoSource = './hero-video.mp4'; 

// Sample data for the event cards
const eventsData = [
    { id: 1, day: 'FRI OCT 27', artist: 'EMO NITE', set: 'GRAVE RAVE SET', bgImage: `url(${EMONITE})` },
    { id: 2, day: 'SAT OCT 28', artist: 'KASKADE', set: 'NIGHTCLUB SET', bgImage: `url(${KASKADE})` },
    { id: 3, day: 'THU NOV 02', artist: 'SICKICK', set: 'MYSTERY SET', bgImage: `url(${SICKICK})` },
    { id: 4, day: 'FRI NOV 03', artist: 'IAN ASHER', set: 'FUTURE HOUSE', bgImage: `url(${IANASHER})` },
    { id: 5, day: 'SAT NOV 04', artist: 'SPECIAL GUEST', set: 'ZOUK NIGHTCLUB', bgImage: `url(${SPECIALGUEST})` },
    { id: 6, day: 'FRI NOV 10', artist: 'TIESTO', set: 'FESTIVAL SET', bgImage: `url(${TIESTO})` },
];

// Helper component for a single event card
const EventCard = ({ day, artist, set, bgImage }) => (
    <div className="event-card-wrapper">
        <div className="event-card">
            <div className="event-card-bg" style={{ backgroundImage: bgImage }}>
                <div className="event-card-overlay">
                    <p className="event-label">SKY LOUNGE NIGHTCLUB</p>
                    <div className="event-info">
                        <span className="event-day">{day}</span>
                        <h3 className="event-artist">{artist}</h3>
                        <span className="event-set">{set}</span>
                    </div>
                </div>
            </div>
            <Button className="event-book-button" onClick={() => console.log(`Booking for ${artist}`)}>
                BOOK NOW
            </Button>
        </div>
    </div>
);


const Home = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    const toggleVideoPlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
  
  return (
    <>
   <Navbar />
    <div>
      {/* 1. Hero Section */}
      <div className="hero-section" id="hero-section">
        <video 
            autoPlay 
            loop 
            muted 
            className="background-video" 
            ref={videoRef}
        >
          <source src={HeroVideoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="hero-overlay"></div>
        <Container className="hero-content">
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <h1 
                className="hero-headline mb-3 d-none d-md-block" 
              >
                Sky Lounge
              </h1>
              <h1 
                className="hero-headline display-4 mb-3 d-block d-md-none" 
              >
                Sky Lounge
              </h1>
              <p className="lead mb-5 text-uppercase text-indigo-400" style={{ color: 'var(--accent-indigo)', fontSize: '1.5rem', fontWeight: '500' }}>
                The City's Premier Nightlife Destination.
              </p>
              <Button 
                size="lg" 
                onClick={() => console.log('Booking initiated')}
                className="cta-button me-3 mb-3"
              >
                Book Your Table
              </Button>
              <Button 
                size="lg" 
                onClick={toggleVideoPlayPause}
                className="video-control-button mb-3"
                variant="outline-light"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      
     

      {/* 3. New Upcoming Events Section */}
      <div className="events-section" id="events">
          <Container className="events-header">
            <p className="services-subtitle">Our events</p>
              <h2 className="section-title">UPCOMING EVENTS</h2>
              
          </Container>
         
          <div className="events-carousel">
              {eventsData.map(event => (
                  <EventCard key={event.id} {...event} />
              ))}
          </div>
          
          <div className="see-event"> <a href="#full-calendar" className="see-all-link">SEE ALL EVENTS </a></div>
      </div>
          {/* 2. Introduction Section (Banner with BG Image) */}
      <div className="intro-section">
          <Container className="text-center">
              <Row className="justify-content-center">
                  <Col md={10} lg={10}>
                      <h2 className="intro-heading">TO ENTER <b className='brand'>SKY LOUNGE</b> IS TO ENTER A NEW WORLD</h2>
                    
                  </Col>
              </Row>
          </Container>
      </div>  
  
      {/* 4. Our Services Section */}
      <div className="services-section">
          <Container>
              <div className="services-header">
                  <div className="services-header-text">
                      <p className="services-subtitle">OUR SERVICES</p>
                      <h2 className="services-title">WHAT WE OFFER <br/> IN OUR CLUB</h2>
                  </div>
                  <Button className="buy-tickets-button">BUY TICKETS</Button>
              </div>

              <div className="services-grid">
                  <div className="service-card">
                      <div className="service-icon">
                          {/* Lounge Bar Icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke=" #4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-glass-water"><path d="M15.2 22H8.8a2 2 0 0 1-2-1.76L5 5h14l-1.8 15.2a2 2 0 0 1-2 1.76Z"/><path d="M7 5c0-1.5 1-3 3-3s3 1.5 3 3"/><path d="M17 5c0-1.5 1-3 3-3s3 1.5 3 3"/></svg>
                      </div>
                      <h3 className="service-card-title">LOUNGE BAR</h3>
                      <p className="service-card-description">
                          Experience the perfect blend of luxury and comfort. Relax, unwind, and enjoy every moment with us.
                      </p>
                  </div>

                  <div className="service-card">
                      <div className="service-icon">
                          {/* VIP Zone Icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke=" #4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      </div>
                      <h3 className="service-card-title">VIP ZONE</h3>
                      <p className="service-card-description">
                          Step into an exclusive space where luxury meets entertainment. Enjoy personalized service, premium drinks, and an unforgettable experience.
                      </p>
                  </div>
                  
                  <div className="service-card">
                      <div className="service-icon">
                          {/* Dance Floor Icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke=" #4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-disc-3"><circle cx="12" cy="12" r="10"/><path d="M6.71 12.37L2 16"/><path d="M22 16l-4.71-3.63"/><path d="M12 2a10 10 0 0 0-2.07 19.72c.45.21.98.37 1.57.28a2 2 0 0 0 1.54-1.12c.22-.5.33-1.07.28-1.63 0-.07-.01-.14-.02-.2"/><path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/></svg>
                      </div>
                      <h3 className="service-card-title">DANCE FLOOR</h3>
                      <p className="service-card-description">
                         Feel the rhythm, lose yourself in the music, and dance the night away under dazzling lights.
                      </p>
                  </div>

                  <div className="service-card">
                      <div className="service-icon">
                          {/* Special Events Icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke=" #4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                      </div>
                      <h3 className="service-card-title">SPECIAL EVENTS</h3>
                      <p className="service-card-description">
                          Celebrate life’s moments with style. From themed nights to exclusive parties, every event is crafted to leave lasting memories.
                      </p>
                  </div>
              </div>
          </Container>
      </div>

    </div>
    </>
  );
};

export default Home;
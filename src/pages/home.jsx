import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style/home.css';

const HeroVideoSource = './Sky.mp4';
import Lounge7Image from '../assets/event/background.png';

const API_BASE_URL = 'http://localhost:5000/api/events';

const EventCard = ({ _id, dayDisplay, artist, set, imageUrl }) => {
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `http://localhost:5000${imageUrl}`;

  return (
    <div className="event-card-wrapper">
      <div className="event-card">
        <div className="event-card-bg" style={{ backgroundImage: `url(${fullImageUrl})` }}>
          <div className="event-card-overlay">
            <p className="event-label">SKY LOUNGE NIGHTCLUB</p>
            <div className="event-info">
              <span className="event-day">{dayDisplay}</span>
              <h3 className="event-artist">{artist}</h3>
              <span className="event-set">{set}</span>
            </div>
          </div>
        </div>
        <Link to={`/event/${_id}`} className="event-book-button-link">
          <Button className="event-book-button" onClick={(e) => e.stopPropagation()}>
            BOOK NOW
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Home = () => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(API_BASE_URL);
        setEventsData(res.data.slice(0, 6));
      } catch (err) {
        console.error('Failed to fetch events:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
    if (videoRef.current) videoRef.current.muted = true;
  }, []);

  const toggleVideoPlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <video autoPlay loop muted={isMuted} className="background-video" ref={videoRef}>
          <source src={HeroVideoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <Container className="hero-content">
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <h1 className="hero-headline mb-3 d-none d-md-block">Sky Lounge</h1>
              <h1 className="hero-headline display-4 mb-3 d-block d-md-none">Sky Lounge</h1>
              <p className="lead mb-5 text-uppercase" style={{ color: 'var(--accent-indigo)', fontSize: '1.5rem', fontWeight: '500' }}>
                The City's Premier Nightlife Destination.
              </p>
              <Button size="lg" className="cta-button me-3 mb-3">Book Your Table</Button>
              <Button size="lg" onClick={toggleVideoPlayPause} className="video-control-button me-3 mb-3" variant="outline-light">
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </Button>
            </Col>
          </Row>
        </Container>
        <Button onClick={toggleMute} className="mute-control-button" variant="outline-light">
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </Button>
      </div>

      {/* About Section */}
     
      <div className="about-section">
        <Container className="p-0"> 
            <Row className="g-0">
                <Col lg={6} className="about-image-col">
                    <img 
                        src={Lounge7Image} 
                        alt="Lounge 7 Club Interior" 
                        className="img-fluid about-image"
                    />
                </Col>
                
                <Col lg={6} className="about-content-col">
                    <div className="about-content-wrapper"> 
                        <p className="about-subtitle">ENTER A NEW WORLD</p>
                        <h2 className="about-title-main">
                            From the Heart of <span className="text-accent">Nagpur</span>
                        </h2>
                        
                        <p className="about-description mb-4">
                            <b>Sky Lounge</b> redefines nightlife in Pune, offering an exceptional 
                            convergence of luxury, music, and entertainment.
                        </p>
                        
                        <p className="about-description-secondary mb-5">
                            Our venue features multiple distinct atmospheres—from the energetic main 
                            dance floor with world-renowned DJs to intimate VIP lounges offering bottle 
                            service and unparalleled views. Every night at <b>Sky Lounge</b>is an experience crafted to 
                            perfection.
                        </p>
                        
                        <div className="about-stats-row">
                            <div className="about-stat">
                                <h3 className="about-stat-number">10K+</h3>
                                <p className="about-stat-label">CAPACITY</p>
                            </div>
                            <div className="about-stat">
                                <h3 className="about-stat-number">100+</h3>
                                <p className="about-stat-label">EVENTS</p>
                            </div>
                            <div className="about-stat">
                                <h3 className="about-stat-number">24/7</h3>
                                <p className="about-stat-label">PREMIUM</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>



      {/* Upcoming Events */}
      <div className="events-section" id="events">
        <Container className="events-header">
          <p className="services-subtitle">Our events</p>
          <h2 className="section-title1">UPCOMING EVENTS</h2>
        </Container>
        <div className="events-carousel">
          {loading ? <p className="text-center text-light">Loading events...</p> :
            eventsData.map(event => <EventCard key={event._id} {...event} />)
          }
        </div>
        <div className="see-event">
          <Link to="/events" className="see-all-link">SEE ALL EVENTS</Link>
        </div>
      </div>
 <div className="intro-section">
     <Container className="text-center">
          <Row className="justify-content-center">
            <Col md={10} lg={10}>
              <h2 className="intro-heading">TO ENTER <b className="brand">SKY LOUNGE</b> IS TO ENTER A NEW WORLD</h2>
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
              <h2 className="services-title">WHAT WE OFFER <br /> IN OUR CLUB</h2>
            </div>
            <Button className="buy-tickets-button">BUY TICKETS</Button>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                {/* Lounge Bar Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke=" #4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-glass-water"><path d="M15.2 22H8.8a2 2 0 0 1-2-1.76L5 5h14l-1.8 15.2a2 2 0 0 1-2 1.76Z" /><path d="M7 5c0-1.5 1-3 3-3s3 1.5 3 3" /><path d="M17 5c0-1.5 1-3 3-3s3 1.5 3 3" /></svg>
              </div>
              <h3 className="service-card-title">LOUNGE BAR</h3>
              <p className="service-card-description">
                Experience the perfect blend of luxury and comfort. Relax, unwind, and enjoy every moment with us.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                {/* VIP Zone Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke=" #4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              </div>
              <h3 className="service-card-title">VIP ZONE</h3>
              <p className="service-card-description">
                Step into an exclusive space where luxury meets entertainment. Enjoy personalized service, premium drinks, and an unforgettable experience.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                {/* Dance Floor Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke=" #4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-disc-3"><circle cx="12" cy="12" r="10" /><path d="M6.71 12.37L2 16" /><path d="M22 16l-4.71-3.63" /><path d="M12 2a10 10 0 0 0-2.07 19.72c.45.21.98.37 1.57.28a2 2 0 0 0 1.54-1.12c.22-.5.33-1.07.28-1.63 0-.07-.01-.14-.02-.2" /><path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" /></svg>
              </div>
              <h3 className="service-card-title">DANCE FLOOR</h3>
              <p className="service-card-description">
                Feel the rhythm, lose yourself in the music, and dance the night away under dazzling lights.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                {/* Special Events Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke=" #4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
              </div>
              <h3 className="service-card-title">SPECIAL EVENTS</h3>
              <p className="service-card-description">
                Celebrate life’s moments with style. From themed nights to exclusive parties, every event is crafted to leave lasting memories.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;

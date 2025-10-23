import React, { useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Clock, MapPin, Tag, Calendar, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom'; // { changed code }
import '../style/eventDetail.css'; 

// Import images (Example for DJ Dominique)
import eventHeroImage from '../assets/event/IANASHER.png'; // Placeholder for the hero banner (Screenshot 2025-10-21 105239.jpg)

const EventDetail = () => {
    const detailSectionRef = useRef(null);
    const navigate = useNavigate(); // { changed code }
    const location = useLocation(); // { changed code }

    // prefer event passed via state, fallback to local defaults
    const eventData = location.state?.event || {
        title: 'DJ IANASHER - Future House Set',
        date: 'DEC 16, 2025',
        time: '9:00 PM - 3:00 AM',
        location: 'Sky Lounge Main Floor',
        slug: 'dj-ianasher'
    }; // { changed code }

    const scrollToDetails = () => {
        if (detailSectionRef.current) {
            detailSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const goToBuyTickets = () => {
        // navigate to /buy-tickets and pass event data via state
        navigate('/buy-tickets', { state: { event: eventData } });
    }; // { changed code }

    return (
        <div className="event-detail-page">
            
            {/* 1. Hero Banner Section (Full Image Overlay) */}
            <div className="event-hero-banner" style={{ backgroundImage: `url(${eventHeroImage})` }}>
                <div className="hero-overlay-gradient"></div>
                <Container className="hero-content-details">
                    <div className="event-date-box">
                        <span className="day">16</span>
                        <span className="month">DEC</span>
                    </div>
                    
                    <h1 className="hero-title-main">DJ IANASHER</h1>
                    <p className="hero-description">
Step into a world of music, luxury, and excitement. From handcrafted cocktails to electrifying beats, every moment is designed for your enjoyment. Make memories that last long after the night ends.                    </p>

                    <div className="hero-cta-buttons">
                        <Button className="btn-buy-tickets" onClick={goToBuyTickets}>BUY TICKETS</Button> {/* { changed code } */}
                        <Button 
                            className="btn-event-details" 
                            variant="outline-light" 
                            onClick={scrollToDetails}
                        >
                            EVENT DETAILS <ChevronDown size={18} className="ms-2" />
                        </Button>
                    </div>
                </Container>
            </div>

            {/* 2. Main Detail Section (Scroll Target) */}
            <div ref={detailSectionRef} className="event-main-details">
                <Container>
                    <Row>
                        {/* Left Column: Full Description */}
                        <Col lg={8} md={7} className="detail-text-column">
                            <h2 className="section-heading">About Event</h2>
                            <p className="main-paragraph">
Step into a space where style, music, and energy come together. Enjoy vibrant beats, exquisite drinks, and a lively atmosphere crafted for unforgettable nights. Every moment is designed for you to relax, celebrate, and create lasting memories.                            </p>
                            <ul className="detail-list">
                              <li>Experience seamless service and attention to every detail, ensuring your night is effortless and enjoyable.</li>
<li>Immerse yourself in a vibrant atmosphere with music, lights, and energy that keeps the night alive.</li>
<li>Enjoy exclusive experiences, from handcrafted drinks to VIP spaces, designed for unforgettable memories.</li>

                            </ul>

                            <h3 className="sub-heading">DJ IANASHER is trending this year</h3>
                            <p>
Step into a world where luxury meets excitement. From energetic music and dazzling lights to exquisite drinks and VIP spaces, every detail is designed to make your night unforgettable. Celebrate, dance, and enjoy every moment in an atmosphere crafted for memories that last.                            </p>

                            <ol className="detail-numbered-list">
                                <li>Enjoy seamless comfort and style throughout the venue, designed for a premium experience.</li>
<li>Relax in thoughtfully arranged spaces that balance energy and intimacy for every guest.</li>
<li>Experience personalized service and attention, making every moment feel special.</li>
<li>Immerse yourself in an atmosphere of music, lights, and vibrant energy that keeps the night alive.</li>

                            </ol>

                            <p className="main-paragraph">
Step into a vibrant space where music, lights, and energy come together. From handcrafted cocktails to exclusive VIP areas, every detail is designed for comfort, excitement, and unforgettable memories. Celebrate, dance, and enjoy every moment in an atmosphere made just for you.                            </p>
                        </Col>

                        {/* Right Column: Event Details Box */}
                        <Col lg={4} md={5} className="detail-sidebar-column">
                            <div className="event-details-box">
                                <h3 className="box-title">EVENT DETAILS</h3>
                                
                                <div className="detail-item">
                                    <Clock size={20} />
                                    <div className="item-content">
                                        <span className="item-label">SCHEDULE</span>
                                        <p className="item-value">11:00 PM - 3:00 AM</p>
                                    </div>
                                </div>
                                
                                <div className="detail-item">
                                    <MapPin size={20} />
                                    <div className="item-content">
                                        <span className="item-label">LOCATION</span>
                                        <p className="item-value">Sky Tower, Nightlife District, Nagpur, 10001</p>
                                    </div>
                                </div>

                                <div className="detail-item">
                                    <Tag size={20} />
                                    <div className="item-content">
                                        <span className="item-label">EVENT TYPE</span>
                                        <p className="item-value">DJ Concert, Party</p>
                                    </div>
                                </div>
                                
                                <div className="detail-item">
                                    <Calendar size={20} />
                                    <div className="item-content">
                                        <span className="item-label">DATE</span>
                                        <p className="item-value">DEC 16, 2025</p>
                                    </div>
                                </div>

                                <Button className="btn-buy-tickets-box" onClick={goToBuyTickets}>BUY TICKETS</Button> {/* { changed code } */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default EventDetail;
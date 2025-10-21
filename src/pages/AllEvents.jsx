import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/allEvents.css'; // Import the CSS for this page
import { ArrowRight } from 'lucide-react'; // Using Lucide icon for the button

// 🚨 IMPORTANT: Replace these with your actual image imports from src/assets/event/
// Assuming you have 6 images for 6 events
import eventImage1 from '../assets/event/EMONITE.png'; 
import eventImage2 from '../assets/event/GUEST.png';
import eventImage3 from '../assets/event/IANASHER.png';
import eventImage4 from '../assets/event/KASKADE.png';
import eventImage5 from '../assets/event/SICKICK.png';
import eventImage6 from '../assets/event/TIESTO.png';
const eventData = [
    {
        date: 'AUG 25, 2023',
        title: 'DJ DOMINIQUE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: eventImage1,
        link: '/event/dj-dominique' 
    },
    {
        date: 'AUG 24, 2023',
        title: 'NEON NIGHTS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: eventImage2,
        link: '/event/neon-nights'
    },
    {
        date: 'SEP 01, 2023',
        title: 'RETRO REWIND',
        description: 'Step back in time with classic hits from the 80s and 90s. Get ready to groove all night long!',
        image: eventImage3,
        link: '/event/retro-rewind'
    },
    {
        date: 'SEP 08, 2023',
        title: 'LIVE SESSIONS',
        description: 'Experience electrifying live performances from top local and international artists. A night of pure musical magic!',
        image: eventImage4,
        link: '/event/live-sessions'
    },
    {
        date: 'SEP 15, 2023',
        title: 'HOUSE PARTY',
        description: 'The ultimate house music experience. Featuring deep beats and soulful rhythms that will keep you dancing till dawn.',
        image: eventImage5,
        link: '/event/house-party'
    },
    {
        date: 'SEP 22, 2023',
        title: 'TECHNO TAKEOVER',
        description: 'Dive into the world of techno with groundbreaking sets from renowned DJs. An immersive auditory journey awaits.',
        image: eventImage6,
        link: '/event/techno-takeover'
    },
];

const AllEvents = () => {
    return (
        <div className="all-events-page">
            <Container>
                {/* Page Header (Kept the same style as previous components) */}
                <div className="events-header">
                    <p className="events-subtitle">EVENTS</p>
                    <h1 className="events-title">
                        UPCOMING <br />
                        <span className="events-title-outline">EVENTS</span>
                    </h1>
                </div>

                {/* Event Cards Grid - Centered Horizontal Cards */}
                <Row className="justify-content-center">
                    {eventData.map((event, index) => (
                        <Col lg={10} key={index} className="mb-5"> 
                            <div className="event-card">
                                {/* The event image acts as the background */}
                                <img src={event.image} alt={event.title} className="event-background-image" />
                                
                                {/* Overlay Content */}
                                <div className="event-overlay">
                                    <div className="event-details-overlay">
                                        <p className="event-date">{event.date}</p>
                                        <h2 className="event-title-card">{event.title}</h2>
                                        <p className="event-description">{event.description}</p>
                                        <a href={event.link} className="btn-view-event">
                                            VIEW EVENT
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default AllEvents;

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




























// import React, { useRef, useState, useEffect } from 'react';
// import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
// import { Clock, MapPin, Tag, Calendar, ChevronDown } from 'lucide-react';
// import { useNavigate, useLocation, useParams } from 'react-router-dom';
// import axios from 'axios';
// import '../style/eventDetail.css';

// const API_BASE_URL = 'http://localhost:5000/api/events';

// const formatDate = (dateString) => {
//     if (!dateString) return { day: '--', month: '---' };
//     const date = new Date(dateString);
//     if (isNaN(date.getTime())) return { day: '--', month: '---' };
    
//     return {
//         day: date.getDate(),
//         month: date.toLocaleString('default', { month: 'short' }).toUpperCase()
//     };
// };

// const EventDetail = () => {
//     const detailSectionRef = useRef(null);
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { id, slug } = useParams();
//     const eventId = id || slug;

//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [eventData, setEventData] = useState(null);

//     useEffect(() => {
//         const fetchEvent = async () => {
//             try {
//                 const res = await axios.get(`${API_BASE_URL}/${eventId}`);
//                 setEventData(res.data);
//             } catch (err) {
//                 setError(err?.response?.data?.message || 'Event not found');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         if (eventId) {
//             fetchEvent();
//         }
//     }, [eventId]);

//     const scrollToDetails = () => {
//         if (detailSectionRef.current) {
//             detailSectionRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     const goToBuyTickets = () => {
//         // navigate to /buy-tickets and pass event data via state
//         navigate('/buy-tickets', { state: { event: eventData } });
//     }; // { changed code }

//     const getImageUrl = (imageUrl) => {
//         if (!imageUrl) return '';
//         return imageUrl.startsWith('http') 
//             ? imageUrl 
//             : `http://localhost:5000${imageUrl}`;
//     };

//     if (loading) return <Container style={{ paddingTop: 150, textAlign: 'center' }}><Spinner animation="border" variant="light" /></Container>;
//     if (error) return <Container style={{ paddingTop: 150, textAlign: 'center', color: '#fff' }}><h3>{error}</h3></Container>;
//     if (!eventData) return <Container style={{ paddingTop: 150, textAlign: 'center', color: '#fff' }}><h3>Event not found</h3></Container>;

//     return (
//         <div className="event-detail-page">
//             <div className="event-hero-banner" 
//                  style={{ backgroundImage: `url(${getImageUrl(eventData.imageUrl)})` }}>
//                 <div className="hero-overlay-gradient"></div>
//                 <Container className="hero-content-details">
//                     <div className="event-date-box">
//                         {/* <span className="day">{formatDate(eventData.date).day}</span>
//                         <span className="month">{formatDate(eventData.date).month}</span> */}
//                         <span className="day">{formatDate(eventData.eventDate).day}</span>
//                             <span className="month">{formatDate(eventData.eventDate).month}</span>


//                     </div>
                    
//                     <h1 className="hero-title-main">{eventData.title}</h1>
//                     <p className="hero-description">{eventData.description}</p>

//                     <div className="hero-cta-buttons">
//                         <Button className="btn-buy-tickets" onClick={() => navigate('/buy-tickets', { state: { event: eventData }})}>
//                             BUY TICKETS
//                         </Button>
//                         <Button 
//                             className="btn-event-details" 
//                             variant="outline-light" 
//                             onClick={() => detailSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
//                         >
//                             EVENT DETAILS <ChevronDown size={18} className="ms-2" />
//                         </Button>
//                     </div>
//                 </Container>
//             </div>

//             <div ref={detailSectionRef} className="event-main-details">
//                 <Container>
//                     <Row>
//                         {/* Left Column: Full Description */}
//                         <Col lg={8} md={7} className="detail-text-column">
//                             <h2 className="section-heading">About Event</h2>
//                             <p className="main-paragraph">{eventData.details || eventData.description}</p>
                            
//                             {eventData.highlights && (
//                                 <ul className="detail-list">
//                                     {eventData.highlights.map((highlight, index) => (
//                                         <li key={index}>{highlight}</li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </Col>

//                         {/* Right Column: Event Details Box */}
//                         <Col lg={4} md={5} className="detail-sidebar-column">
//                             <div className="event-details-box">
//                                 <h3 className="box-title">EVENT DETAILS</h3>
                                
//                                 <div className="detail-item">
//                                     <Clock size={20} />
//                                     <div className="item-content">
//                                         <span className="item-label">SCHEDULE</span>
//                                         <p className="item-value">{eventData.time}</p>
//                                     </div>
//                                 </div>
                                
//                                 <div className="detail-item">
//                                     <MapPin size={20} />
//                                     <div className="item-content">
//                                         <span className="item-label">LOCATION</span>
//                                         <p className="item-value">{eventData.location}</p>
//                                     </div>
//                                 </div>

//                                 {/* <div className="detail-item">
//                                     <Tag size={20} />
//                                     <div className="item-content">
//                                         <span className="item-label">EVENT TYPE</span>
//                                         <p className="item-value">{eventData.eventType}</p>
//                                     </div>
//                                 </div>
                                
//                                 <div className="detail-item">
//                                     <Calendar size={20} />
//                                     <div className="item-content">
//                                         <span className="item-label">DATE</span>
//                                         <p className="item-value">
//                                             {eventData.date 
//                                                 ? new Date(eventData.date).toLocaleDateString('en-US', {
//                                                     month: 'long',
//                                                     day: 'numeric',
//                                                     year: 'numeric'
//                                                   })
//                                                 : 'Date TBA'}
//                                         </p>
//                                     </div>
//                                 </div> */}
                                            
//                                     <div className="detail-item">
//   <Tag size={20} />
//   <div className="item-content">
//     <span className="item-label">EVENT TYPE</span>
//     <p className="item-value">{eventData.eventType || 'N/A'}</p>
//   </div>
// </div>

// <div className="detail-item">
//   <Calendar size={20} />
//   <div className="item-content">
//     <span className="item-label">DATE</span>
//     <p className="item-value">
//       {eventData.eventDate
//         ? new Date(eventData.eventDate).toLocaleDateString('en-US', {
//             month: 'long',
//             day: 'numeric',
//             year: 'numeric'
//           })
//         : 'Date TBA'}
//     </p>
//   </div>
// </div>




//                                 <Button 
//                                     className="btn-buy-tickets-box" 
//                                     onClick={() => navigate('/buy-tickets', { state: { event: eventData }})}
//                                 >
//                                     BUY TICKETS
//                                 </Button>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         </div>
//     );
// };

// export default EventDetail;
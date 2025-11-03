import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import { Clock, MapPin, Tag, Calendar, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import '../style/eventDetail.css';

const API_BASE_URL = 'http://localhost:5000/api/events';

const formatDate = (dateString) => {
    if (!dateString) return { day: '--', month: '---' };
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return { day: '--', month: '---' };
    
    return {
        day: date.getDate(),
        month: date.toLocaleString('default', { month: 'short' }).toUpperCase()
    };
};

const EventDetail = () => {
    const detailSectionRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { id, slug } = useParams();
    const eventId = id || slug;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const res = await axios.get(`${API_BASE_URL}/${eventId}`);
                setEventData(res.data);
            } catch (err) {
                setError(err?.response?.data?.message || 'Event not found');
            } finally {
                setLoading(false);
            }
        };

        if (eventId) {
            fetchEvent();
        }
    }, [eventId]);

    const scrollToDetails = () => {
        if (detailSectionRef.current) {
            detailSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const goToBuyTickets = () => {
        // navigate to /buy-tickets and pass event data via state
        navigate('/buy-tickets', { state: { event: eventData } });
    }; // { changed code }

    const getImageUrl = (imageUrl) => {
        if (!imageUrl) return '';
        return imageUrl.startsWith('http') 
            ? imageUrl 
            : `http://localhost:5000${imageUrl}`;
    };

    if (loading) return <Container style={{ paddingTop: 150, textAlign: 'center' }}><Spinner animation="border" variant="light" /></Container>;
    if (error) return <Container style={{ paddingTop: 150, textAlign: 'center', color: '#fff' }}><h3>{error}</h3></Container>;
    if (!eventData) return <Container style={{ paddingTop: 150, textAlign: 'center', color: '#fff' }}><h3>Event not found</h3></Container>;

    return (
        <div className="event-detail-page">
            <div className="event-hero-banner" 
                 style={{ backgroundImage: `url(${getImageUrl(eventData.imageUrl)})` }}>
                <div className="hero-overlay-gradient"></div>
                <Container className="hero-content-details">
                    <div className="event-date-box">
                        {/* <span className="day">{formatDate(eventData.date).day}</span>
                        <span className="month">{formatDate(eventData.date).month}</span> */}
                        <span className="day">{formatDate(eventData.eventDate).day}</span>
                            <span className="month">{formatDate(eventData.eventDate).month}</span>


                    </div>
                    
                    <h1 className="hero-title-main">{eventData.title}</h1>
                    <p className="hero-description">{eventData.description}</p>

                    <div className="hero-cta-buttons">
                        <Button className="btn-buy-tickets" onClick={() => navigate('/buy-tickets', { state: { event: eventData }})}>
                            BUY TICKETS
                        </Button>
                        <Button 
                            className="btn-event-details" 
                            variant="outline-light" 
                            onClick={() => detailSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            EVENT DETAILS <ChevronDown size={18} className="ms-2" />
                        </Button>
                    </div>
                </Container>
            </div>

            <div ref={detailSectionRef} className="event-main-details">
                <Container>
                    <Row>
                        {/* Left Column: Full Description */}
                        <Col lg={8} md={7} className="detail-text-column">
                            <h2 className="section-heading">About Event</h2>
                            <p className="main-paragraph">{eventData.details || eventData.description}</p>
                            
                            {eventData.highlights && (
                                <ul className="detail-list">
                                    {eventData.highlights.map((highlight, index) => (
                                        <li key={index}>{highlight}</li>
                                    ))}
                                </ul>
                            )}
                        </Col>

                        {/* Right Column: Event Details Box */}
                        <Col lg={4} md={5} className="detail-sidebar-column">
                            <div className="event-details-box">
                                <h3 className="box-title">EVENT DETAILS</h3>
                                
                                <div className="detail-item">
                                    <Clock size={20} />
                                    <div className="item-content">
                                        <span className="item-label">SCHEDULE</span>
                                        <p className="item-value">{eventData.time}</p>
                                    </div>
                                </div>
                                
                                <div className="detail-item">
                                    <MapPin size={20} />
                                    <div className="item-content">
                                        <span className="item-label">LOCATION</span>
                                        <p className="item-value">{eventData.location}</p>
                                    </div>
                                </div>

                                {/* <div className="detail-item">
                                    <Tag size={20} />
                                    <div className="item-content">
                                        <span className="item-label">EVENT TYPE</span>
                                        <p className="item-value">{eventData.eventType}</p>
                                    </div>
                                </div>
                                
                                <div className="detail-item">
                                    <Calendar size={20} />
                                    <div className="item-content">
                                        <span className="item-label">DATE</span>
                                        <p className="item-value">
                                            {eventData.date 
                                                ? new Date(eventData.date).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                  })
                                                : 'Date TBA'}
                                        </p>
                                    </div>
                                </div> */}
                                            
                                    <div className="detail-item">
  <Tag size={20} />
  <div className="item-content">
    <span className="item-label">EVENT TYPE</span>
    <p className="item-value">{eventData.eventType || 'N/A'}</p>
  </div>
</div>

<div className="detail-item">
  <Calendar size={20} />
  <div className="item-content">
    <span className="item-label">DATE</span>
    <p className="item-value">
      {eventData.eventDate
        ? new Date(eventData.eventDate).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })
        : 'Date TBA'}
    </p>
  </div>
</div>




                                <Button 
                                    className="btn-buy-tickets-box" 
                                    onClick={() => navigate('/buy-tickets', { state: { event: eventData }})}
                                >
                                    BUY TICKETS
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default EventDetail;
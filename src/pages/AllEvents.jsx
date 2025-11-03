import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style/AllEvents.css';

const API_BASE_URL = 'http://localhost:5000/api/events';

const AllEvents = () => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(API_BASE_URL);
        setEventsData(res.data);
      } catch (err) {
        console.error('Failed to fetch all events:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) return <Container style={{ paddingTop: '150px' }}><Spinner animation="border" variant="light" /></Container>;

  return (
    <div className="all-events-page">
      <Container>
        <div className="events-header">
          <p className="events-subtitle">EVENTS</p>
          <h1 className="events-title">UPCOMING <br /><span className="events-title-outline">EVENTS</span></h1>
        </div>
        <Row className="justify-content-center">
          {eventsData.map(event => {
            const fullImageUrl = event.imageUrl.startsWith('http') ? event.imageUrl : `http://localhost:5000${event.imageUrl}`;
            return (
              <Col lg={10} key={event._id} className="mb-5">
                <div className="event-card">
                  <img src={fullImageUrl} alt={event.artist} className="event-background-image" />
                  <div className="event-overlay">
                    <div className="event-details-overlay">
                      <p className="event-date">{event.dayDisplay}</p>
                      <h2 className="event-title-card">{event.artist}</h2>       
                                               {/* - {event.set} */}
                      <p className="event-description">{event.description}</p>
                      <Link to={`/event/${event._id}`} className="btn-view-event">VIEW EVENT</Link>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default AllEvents;

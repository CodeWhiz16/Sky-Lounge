import React, { useRef } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { Lightbulb, Wine, Music, Sofa, Quote, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import '../style/PrivateEvents.css';
import  birthday from '../assets/event/image5.png';
import privateHero from '../assets/event/image.png';
import CorporateEvents from '../assets/event/image2.png'; 
import engagement from '../assets/event/image3.png';
import   selfHosted from '../assets/event/image4.png';
const PrivateEvents = () => {
  const bookingSectionRef = useRef(null);

  const scrollToBooking = () => {
    if (bookingSectionRef.current) {
      bookingSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Hero background image
  const herroImage = privateHero;

  const eventTypeImages = {
    birthday: birthday,
    corporate: CorporateEvents,
    engagement: engagement,
    selfHosted: selfHosted,
  };

  const testimonials = [
    {
      quote: "Amazing experience, perfect for our corporate dinner. The ambiance and service were impeccable!",
      author: "CEO, Tech Solutions Inc."
    },
    {
      quote: "Celebrated my 30th birthday here, and it was unforgettable! The team handled everything flawlessly.",
      author: "Priya Sharma"
    },
    {
      quote: "The VIP experience for our anniversary was truly special. Highly recommend Sky Lounge for any celebration.",
      author: "Rajesh Kumar"
    }
  ];

  return (
    <div className="private-events-section min-h-screen font-sans pt-20 pb-10">
      {/* ✅ Private Events Hero Section */}
      <section
        className="private-hero-section"
        style={{
          backgroundImage: `url(${herroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="private-hero-overlay"></div>
        <div className="private-hero-content">
          <h1 className="private-hero-title">Host Your Perfect <br /> Private Event</h1>
          <p className="private-hero-subtitle">Birthdays, Corporate Gatherings, or Exclusive Soirees</p>
          <Button variant="primary" className="private-hero-btn" onClick={scrollToBooking}>
            Book Your Event
          </Button>
        </div>
      </section>

{/*             Event Types Section (Omitted for brevity, assumed unchanged) */}
            <section className="py-16">
                <Container>
                    <h2 className="section-heading-2">Event Types</h2>
                    <Row className="g-4 justify-content-center">
                        <Col md={6} lg={3}>
                            <Card className="event-card-2">
                                <Card.Img variant="top" src={eventTypeImages.birthday} alt="Birthday Party" className="event-card-img" />
                                <Card.Body className="event-card-body-2">
                                    <Card.Title className="event-card-title-2">Birthday Parties</Card.Title>
                                    <Card.Text className="event-card-text-2">Memorable celebrations with custom themes and lavish setups.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="event-card-2">
                                <Card.Img variant="top" src={eventTypeImages.corporate} alt="Corporate Events" className="event-card-img" />
                                <Card.Body className="event-card-body-2">
                                    <Card.Title className="event-card-title-2">Corporate Events</Card.Title>
                                    <Card.Text className="event-card-text-2">Professional gatherings with state-of-the-art facilities and catering.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="event-card-2">
                                <Card.Img variant="top" src={eventTypeImages.engagement} alt="Engagement / Anniversary" className="event-card-img" />
                                <Card.Body className="event-card-body-2">
                                    <Card.Title className="event-card-title-2">Engagement / Anniversary</Card.Title>
                                    <Card.Text className="event-card-text-2">Celebrate milestones with elegant decor and personalized services.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="event-card-2">
                                <Card.Img variant="top" src={eventTypeImages.selfHosted} alt="Self-hosted Events" className="event-card-img" />
                                <Card.Body className="event-card-body-2">
                                    <Card.Title className="event-card-title-2">Self-hosted Events</Card.Title>
                                    <Card.Text className="event-card-text-2">Bring your vision to life with our versatile spaces and support.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Why Choose SKY LOUNGE Section (Omitted for brevity, assumed unchanged) */}
            <section className="py-16 bg-gray-900">
                <Container>
                    <h2 className="section-heading-2">Why Choose <span>SKY LOUNGE</span></h2>
                    <Row className="g-4">
                        <Col md={6} lg={3} className="feature-item">
                            <Lightbulb size={60} />
                            <h5>Ambient Lighting & Luxurious Interiors</h5>
                            <p>Set the perfect mood with our sophisticated lighting and opulent decor.</p>
                        </Col>
                        <Col md={6} lg={3} className="feature-item">
                            <Wine size={60} />
                            <h5>Full Bar & Catering Options</h5>
                            <p>Enjoy bespoke menus and an extensive selection from our premium bar.</p>
                        </Col>
                        <Col md={6} lg={3} className="feature-item">
                            <Music size={60} />
                            <h5>DJ or Live Music Setup</h5>
                            <p>Elevate your event with top DJs or captivating live performances.</p>
                        </Col>
                        <Col md={6} lg={3} className="feature-item">
                            <Sofa size={60} />
                            <h5>Flexible Seating Arrangement</h5>
                            <p>Customize our versatile space to perfectly suit your event's layout.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Testimonials Section (Omitted for brevity, assumed unchanged) */}
            <section className="py-16">
                <Container>
                    <h2 className="section-heading-2">Testimonials</h2>
                    <Row className="g-4 justify-content-center">
                        {testimonials.map((testimonial, index) => (
                            <Col md={6} lg={4} key={index}>
                                <Card className="testimonial-card">
                                    <Quote size={40} className="mx-auto quote-icon" />
                                    <Card.Text className="testimonial-quote">"{testimonial.quote}"</Card.Text>
                                    <p className="testimonial-author">- {testimonial.author}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* FINAL: Book Your Event Form Section */}
            <section className="final-booking-section" ref={bookingSectionRef}> {/* Attach Ref here */}
                <div className="final-booking-overlay">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={10} className="booking-text-content">
                                <h2 className="title text-uppercase">
                                    Ready to Host? <br />
                                    Get Your <span>Quote</span> Today.
                                </h2>
                                <p className="subtitle">
                                    Fill out the form below and a dedicated event manager will contact you within 24 hours to begin planning your perfect night.
                                </p>
                            </Col>
                        </Row>

                        {/* NEW: Combined Row for Form and Venue/Social */}
                        <Row className="justify-content-center mt-5 g-4">
                            
                            {/* 1. Booking Form (Left Column - Takes 50% on large screens, 100% on small) */}
                            <Col lg={6}>
                                <Card className="final-booking-form-card">
                                    <Form>
                                        {/* Horizontal Group 1: Name & Email */}
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group controlId="finalFormName" className="mb-3">
                                                    <Form.Control type="text" placeholder="Your Full Name" className="form-control-final" required />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="finalFormEmail" className="mb-3">
                                                    <Form.Control type="email" placeholder="Email Address" className="form-control-final" required />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        {/* Horizontal Group 2: Phone & Date */}
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group controlId="finalFormPhone" className="mb-3">
                                                    <Form.Control type="tel" placeholder="Phone Number" className="form-control-final" required />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="finalFormDate" className="mb-3">
                                                    <Form.Control type="date" className="form-control-final" required />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        {/* Horizontal Group 3: Event Type & Guests */}
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group controlId="finalFormEventType" className="mb-3">
                                                    <Form.Select className="form-control-final" required>
                                                        <option value="">Select Event Type</option>
                                                        <option>Birthday Party</option>
                                                        <option>Corporate Event</option>
                                                        <option>Engagement / Anniversary</option>
                                                        <option>Other Private Gathering</option>
                                                    </Form.Select>
                                                    </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="finalFormGuests" className="mb-3">
                                                    <Form.Control type="number" placeholder="Number Of Guests" min="1" className="form-control-final" required />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        
                                        {/* Full Width Textarea: Special Requests */}
                                        <Form.Group controlId="finalFormSpecialRequests" className="mb-3">
                                            <Form.Control as="textarea" rows={3} placeholder="Tell us more about your needs (decor, music, budget, etc.)" className="form-control-final" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit" className="request-quote-btn-final">
                                            REQUEST A QUOTE
                                        </Button>
                                    </Form>
                                </Card>
                            </Col>

                            {/* 2. Venue/Address & Social Icons (Right Column - Takes 50% on large screens, 100% on small) */}
                            <Col lg={4}>
                                <div className="venue-social-card h-100 d-flex flex-column justify-content-center">
                                    <MapPin size={36} className="mx-auto mb-3" style={{ color: '#5180ffff' }} />
                                    <h3>Venue & Contact</h3>
                                    <div className="address-line flex-column">
                                        <p className="mb-1">Sky Tower, Nightlife District,</p>
                                        <p className="mb-0">Downtown, Nagpur, 10001</p>
                                        <p className="mt-3 text-white-50">events@skylounge.com | (+91) 1112224345</p>
                                    </div>
                                    <hr className="my-4 border-gray-700 w-50 mx-auto" />
                                    <div className="social-icons">
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                            <Instagram size={30} />
                                        </a>
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                            <Facebook size={30} />
                                        </a>
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                            <Twitter size={30} />
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    );
};

export default PrivateEvents;
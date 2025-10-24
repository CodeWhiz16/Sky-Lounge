import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { CreditCard, ShoppingCart, Ticket, TrendingUp } from "lucide-react";
import "../style/BookTicket.css";
import KASKADE from '../assets/event/KASKADE.png';
import SICKICK from '../assets/event/SICKICK.png';
import TIESTO from '../assets/event/TIESTO.png';



const BookTicket = () => {
  const [selectedTier, setSelectedTier] = useState("general"); 
  const [generalCount, setGeneralCount] = useState(1);
  const [vipCount, setVipCount] = useState(0);

const trendingEvents = [
  { id: 1, title: "Future Sounds Festival", date: "22.13 AJ / 20M", img: KASKADE },
  { id: 2, title: "Neon Beats Night", date: "22.13 AJ / 20M", img: SICKICK },
  { id: 3, title: "Afterlife Experience", date: "22.13 AJ / 20M", img: TIESTO }
];


  const tiers = [
    { id: "general", name: "General Admission", price: 50, count: generalCount, setCount: setGeneralCount },
    { id: "vip", name: "VIP Gold Experience", price: 150, count: vipCount, setCount: setVipCount },
  ];

  return (
    <div className="book-ticket-section">
      <Container>
        <h2 className="page-title">Secure Your Spot</h2>
        <p className="page-subtitle">
          Get your ticket for DJ <span> DJ IANASHER </span> before it’s gone!
        </p>

        <Row className="justify-content-center mt-5">
          <Col lg={6} md={12}>
            <Card className="ticket-card">
              <h5 className="section-title">
                <Ticket size={18} className="me-2" />
                Select Ticket Tier
              </h5>

              <div className="tier-options">
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`tier-option ${selectedTier === tier.id ? "active" : ""}`}
                    onClick={() => setSelectedTier(tier.id)}
                  >
                    <p className="tier-name">{tier.name}</p>
                    <h4 className="tier-price">${tier.price}.00</h4>
                    <div className="counter">
                      <button onClick={(e) => { e.stopPropagation(); tier.setCount(Math.max(0, tier.count - 1)) }}>-</button>
                      <span>{tier.count}</span>
                      <button onClick={(e) => { e.stopPropagation(); tier.setCount(tier.count + 1) }}>+</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="payment-section mt-4">
                <h5 className="section-title">
                  <CreditCard size={18} className="me-2" />
                  Payment Details
                </h5>
                <Form>
                  <Row className="g-3">
                    <Col md={6}><Form.Control placeholder="Name on Card" /></Col>
                    <Col md={6}><Form.Control placeholder="Expiry Date" /></Col>
                    <Col md={6}><Form.Control placeholder="Card Number" /></Col>
                    <Col md={6}><Form.Control placeholder="CVC" /></Col>
                  </Row>

                  <Button className="pay-btn mt-3" type="submit">
                    Confirm & Pay
                  </Button>
                  <p className="secure-text mt-2">🔒 256-bit SSL Secure Checkout</p>
                </Form>
              </div>
            </Card>
          </Col>

          <Col lg={4} md={12}>
            <Card className="summary-card">
              <h5 className="section-title">
                <ShoppingCart size={18} className="me-2" />
                Order Summary
              </h5>
              <div className="summary-item">
                <div>
                  <p className="item-name">{tiers.find(t => t.id === selectedTier).name}</p>
                  <p className="item-detail">DJ IANASHER: 16 Dec,</p>
                  <p className="item-detail">Location:Sky-Lounge,Nagpur</p>
                </div>
                <p className="item-price">${tiers.find(t => t.id === selectedTier).price * tiers.find(t => t.id === selectedTier).count}.00</p>
              </div>

              <div className="summary-total">
                <div className="summary-line">
                  <span>Subtotal</span>
                  <span>${tiers.find(t => t.id === selectedTier).price * tiers.find(t => t.id === selectedTier).count}.00</span>
                </div>
                <div className="summary-line">
                  <span>Booking Fee</span>
                  <span>$5.00</span>
                </div>
                <hr />
                <div className="summary-line total">
                  <span>Total</span>
                  <span>${tiers.find(t => t.id === selectedTier).price * tiers.find(t => t.id === selectedTier).count + 5}.00</span>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <div className="trending-section mt-5">
          <h4 className="trending-title">
            <TrendingUp size={20} className="me-2" />
            Trending Near You
          </h4>
          <Row className="justify-content-center">
  {trendingEvents.map((event) => (
    <Col lg={3} md={4} sm={6} xs={12} key={event.id}>
      <Card className="trending-card">
        <div
          className="trending-img"
          style={{ backgroundImage: `url(${event.img})` }}
        ></div>
        <Card.Body>
          <h6>{event.title}</h6>
          <p>{event.date}</p>
          <Button className="view-btn">View Event</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

        </div>
      </Container>
    </div>
  );
};

export default BookTicket;

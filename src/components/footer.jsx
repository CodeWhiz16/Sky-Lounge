import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Using lucide-react for compatibility
import { Facebook, Instagram, Youtube, Clapperboard, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import '../style/footer.css';

const Footer = () => {
    // Basic navigation and contact data
    const quickLinks = [
        { name: 'Home', link: '/' },
        { name: 'Events', link: '/events' },
        { name: 'Gallery', link: '#gallery' },
        { name: 'About Us', link: '/about' },
        { name: 'Book Table', link: '#booking' },
    ];

    const legalLinks = [
        { name: 'Privacy Policy', link: '/privacy' },
        { name: 'Terms of Service', link: '/terms' },
        { name: 'Careers', link: '/careers' },
        { name: 'FAQ', link: '/faq' },
    ];

    return (
        <footer className="sky-lounge-footer">
            <Container>
                <Row>
                    {/* Column 1: Logo/Brand and Socials */}
                    <Col md={4} className="footer-col footer-brand-col">
                        <h3 className="footer-logo">SKY LOUNGE / ESKOBAR</h3>
                        <p className="footer-slogan">
                            The City's Premier Nightlife Destination.
                        </p>

                        <div className="footer-socials">
                            {/* Social Icons using Lucide-React */}
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={24} /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={24} /></a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={24} /></a>
                            <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud"><Clapperboard size={24} /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={24} /></a>
                        </div>
                    </Col>

                    {/* Column 2: Quick Links */}
                    <Col md={2} sm={6} className="footer-col">
                        <h5 className="footer-heading">Quick Links</h5>
                        <ul className="footer-links">
  {quickLinks.map((item, index) => (
    <li key={index}>
      {item.link.startsWith('/') ? (
        <Link to={item.link}>{item.name}</Link>
      ) : (
        <a href={item.link}>{item.name}</a>
      )}
    </li>
  ))}
</ul>
                    </Col>

                    {/* Column 3: Legal & Info */}
                    <Col md={2} sm={6} className="footer-col">
                        <h5 className="footer-heading">Information</h5>
                        <ul className="footer-links">
                            {legalLinks.map((item, index) => (
                                <li key={index}><a href={item.link}>{item.name}</a></li>
                            ))}
                        </ul>
                    </Col>

                    {/* Column 4: Contact & Location */}
                    <Col md={4} className="footer-col footer-contact-col">
                        <h5 className="footer-heading">Get in Touch</h5>
                        <div className="contact-item">
                            <MapPin className="contact-icon" size={20} />
                            <span>Sky Tower, Nightlife District, Nagpur, 10001</span>
                        </div>
                        <div className="contact-item">
                            <Phone className="contact-icon" size={20} />
                            <span>(+91) 1112224345</span>
                        </div>
                        <div className="contact-item">
                            <Mail className="contact-icon" size={20} />
                            <span><a href="mailto:info@skylounge.com">info@skylounge.com</a></span>
                        </div>
                        <div className="contact-item footer-hours">
                            <h6 className="mt-3">Opening Hours: <p>Mon - Sun: 8:00 PM - 4:00 AM</p></h6>
                           
                        </div>
                    </Col>
                </Row>
                
                {/* Copyright Row */}
                <Row>
                    <Col className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Sky Lounge / Eskobar. All Rights Reserved.</p>
                       <p className="powered-by">Built with ❤️ by the <a href="https://inovite.in" target="blank" rel="noopener noreferrer">Inovite Team</a>
</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
import { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import { ChevronDown, Menu, X } from 'lucide-react'; // Import icons
import '../style/header.css'; // New CSS file for Navbar
// Removed image imports

const AppNavbar = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleOffcanvasToggle = () => setShowOffcanvas((prev) => !prev);
    const handleOffcanvasClose = () => setShowOffcanvas(false);

    // For now, simply close offcanvas on any nav link click
    const handleNavLinkClick = () => {
        handleOffcanvasClose();
    };

    return (
        <>
            <Navbar expand="lg" variant="dark" fixed="top" className="app-navbar">
                <Container>
                    {/* Brand Logo for Desktop (Text) */}
                    <Navbar.Brand href="#home" className="d-none d-lg-block skylounge-text-logo">
                        SKY LOUNGE
                    </Navbar.Brand>

                    {/* Mobile Only: Burger Menu Toggler */}
                    <Navbar.Toggle 
                        aria-controls="offcanvasNavbar" 
                        className="d-lg-none menu-toggler"
                        onClick={handleOffcanvasToggle}
                    >
                        <Menu size={24} color="var(--text-light)" />
                    </Navbar.Toggle>

                    {/* Desktop Navigation Links */}
                    <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex justify-content-center">
                        <Nav className="mx-auto"> {/* Centering the nav links */}
                            <Nav.Link href="#events" className="nav-item">EVENT CALENDAR</Nav.Link>
                            <Nav.Link href="#vip" className="nav-item">VIP SERVICES</Nav.Link>
                            <Nav.Link href="#tickets" className="nav-item">TICKETS</Nav.Link>
                            <Nav.Link href="#venues" className="nav-item dropdown-nav-item">
                                VENUES <ChevronDown size={16} className="ms-1" />
                            </Nav.Link>
                            <Nav.Link href="#private-events" className="nav-item dropdown-nav-item">
                                PRIVATE EVENTS <ChevronDown size={16} className="ms-1" />
                            </Nav.Link>
                            <Nav.Link href="#more" className="nav-item dropdown-nav-item">
                                MORE <ChevronDown size={16} className="ms-1" />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Offcanvas for Mobile Navigation */}
            <Offcanvas 
                show={showOffcanvas} 
                onHide={handleOffcanvasClose} 
                placement="end" 
                className="mobile-offcanvas"
            >
                <Offcanvas.Header className="mobile-offcanvas-header">
                    {/* Sky Lounge Text Logo for Mobile Header (replaces Zouk Group logo) */}
                    <div className="skylounge-text-logo mobile-header-logo">
                        SKY LOUNGE
                    </div>
                    {/* Close button at the top right */}
                    <Button variant="link" onClick={handleOffcanvasClose} className="close-offcanvas-btn">
                        <X size={24} color="var(--text-light)" />
                    </Button>
                </Offcanvas.Header>
                <Offcanvas.Body className="mobile-offcanvas-body">
                    <Nav className="flex-column text-center mobile-nav-links">
                        <Nav.Link href="#events" className="nav-item-mobile" onClick={handleNavLinkClick}>
                            EVENT CALENDAR <ChevronDown size={20} className="ms-2" />
                        </Nav.Link>
                        <Nav.Link href="#vip" className="nav-item-mobile" onClick={handleNavLinkClick}>VIP SERVICES</Nav.Link>
                        <Nav.Link href="#tickets" className="nav-item-mobile" onClick={handleNavLinkClick}>TICKETS</Nav.Link>
                        <Nav.Link href="#venues" className="nav-item-mobile" onClick={handleNavLinkClick}>
                            VENUES <ChevronDown size={20} className="ms-2" />
                        </Nav.Link>
                        <Nav.Link href="#private-events" className="nav-item-mobile" onClick={handleNavLinkClick}>
                            PRIVATE EVENTS <ChevronDown size={20} className="ms-2" />
                        </Nav.Link>
                        <Nav.Link href="#more" className="nav-item-mobile" onClick={handleNavLinkClick}>
                            MORE <ChevronDown size={20} className="ms-2" />
                        </Nav.Link>
                    </Nav>

                    {/* Social links & Contact Info for Mobile */}
                    <div className="mobile-footer-links text-center mt-auto">
                        <Nav.Link href="#contact" onClick={handleNavLinkClick}>CONTACT US</Nav.Link>
                        <Nav.Link href="#news" onClick={handleNavLinkClick}>NEWS</Nav.Link>
                        <Nav.Link href="#artists" onClick={handleNavLinkClick}>ARTISTS</Nav.Link>
                        <div className="social-icons-mobile mt-4">
                            {/* Placeholder for social icons */}
                            <a href="#facebook" className="social-icon-mobile">FB</a>
                            <a href="#mail" className="social-icon-mobile">MAIL</a>
                            <a href="#instagram" className="social-icon-mobile">IG</a>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default AppNavbar;
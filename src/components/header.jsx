import { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; 
import { ChevronDown, Menu, X } from 'lucide-react';
import '../style/header.css';

const AppNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false); // Mobile MORE dropdown
  const location = useLocation();

  const handleOffcanvasToggle = () => setShowOffcanvas((prev) => !prev);
  const handleOffcanvasClose = () => {
    setShowOffcanvas(false);
    setMoreOpen(false);
  };

  // Navbar links and dropdowns
  const links = [
    { name: 'EVENT CALENDAR', path: '/events' },
    { name: 'PRIVATE EVENTS', path: '/private-events' },
    { name: 'VIP SERVICES', path: '/vip-services' },
    { name: 'BOOK A TABLE', path: '/book-table' },
    { name: 'CONTACT', path: '/contact' },
     
    {
      name: 'MORE',
      path: '/more',
      dropdown: [
        { name: 'About', path: '/about' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Admin', path: '/Admin' }
      ]
    },
  ];

  const isActive = (path) => location.pathname === path;

  const isDropdownActive = (dropdown) => {
    if (!dropdown) return false;
    return dropdown.some(item => item.path === location.pathname);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <Navbar expand="lg" variant="dark" fixed="top" className="app-navbar">
        <Container className="p-0">
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="skylounge-text-logo me-auto">
            SKY LOUNGE
          </Navbar.Brand>

          {/* Hamburger (Mobile) */}
          <Button
            className="d-lg-none hamburger-btn"
            onClick={handleOffcanvasToggle}
            variant="link"
          >
            <Menu size={28} color="white" />
          </Button>

          {/* Desktop Links */}
          <Navbar.Collapse className="d-none d-lg-flex justify-content-center">
            <Nav className="mx-auto">
              {links.map((link) => (
                <Nav.Link
                  key={link.name}
                  as={link.dropdown ? 'div' : Link}
                  to={link.path}
                  className={`nav-item ${isActive(link.path) || isDropdownActive(link.dropdown) ? 'active-link' : ''}`}
                >
                  {link.name} {link.dropdown && <ChevronDown size={14} className="ms-1" />}
                  
                  {/* Desktop dropdown */}
                  {link.dropdown && (
                    <div className="dropdown-menu-custom">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`dropdown-item-custom ${isActive(item.path) ? 'active-link' : ''}`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Sidebar */}
      <Offcanvas
        show={showOffcanvas}
        onHide={handleOffcanvasClose}
        placement="end"
        className="mobile-offcanvas"
      >
        <Offcanvas.Header className="mobile-offcanvas-header">
          <div className="mobile-header-logo">SKY LOUNGE</div>
          <Button variant="link" onClick={handleOffcanvasClose} className="close-offcanvas-btn">
            <X size={28} color="white" />
          </Button>
        </Offcanvas.Header>

        <Offcanvas.Body className="mobile-offcanvas-body">
          <Nav className="flex-column text-center mobile-nav-links">
            {links.map((link) => (
              <div key={link.name} className="mobile-link-container">
                <Nav.Link
                  as={link.dropdown ? 'div' : Link}
                  to={link.path}
                  className={`nav-item-mobile ${isActive(link.path) || isDropdownActive(link.dropdown) ? 'active-link' : ''}`}
                  onClick={link.dropdown ? () => setMoreOpen(!moreOpen) : handleOffcanvasClose}
                >
                  {link.name} {link.dropdown && <ChevronDown size={18} className="ms-1" />}
                </Nav.Link>

                {/* Mobile dropdown */}
                {link.dropdown && moreOpen && (
                  <div className="mobile-dropdown">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`mobile-dropdown-item ${isActive(item.path) ? 'active-link' : ''}`}
                        onClick={handleOffcanvasClose}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AppNavbar;

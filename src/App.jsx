import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap CSS globally
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/home';
import About from './pages/About';
import Event from './pages/AllEvents';
import EventDetail from './pages/EventDetail';
// import BuyTickets from './pages/BuyTickets';
import PrivateEvents from './pages/PrivateEvents';

// Components
import Navbar from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <Navbar /> 
     
      <Routes>
       
        <Route path="/" element={<Home />} />

        
        <Route path="/about" element={<About />} />

        
        <Route path="/events" element={<Event />} />

        
        <Route path="/event/:slug" element={<EventDetail />} />

        
        {/* <Route path="/buy-tickets" element={<BuyTickets />} /> */}


        <Route path="/private-events" element={<PrivateEvents />} />

        {/* =========================
            Future pages can be added below:
            Example:
            <Route path="/contact" element={<Contact />} />
            <Route path="/vip-services" element={<VipServices />} />
            <Route path="/book-table" element={<BookTable />} />
           ========================= */}
      </Routes>

      
      <Footer />
    </BrowserRouter>
  );
}

export default App;

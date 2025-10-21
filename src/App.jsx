import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Import Bootstrap CSS globally
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Footer from './components/footer';
import Navbar from './componentS/header'; // keep your existing import
import ScrollToTop from './components/ScrollToTop';
import Event from './pages/AllEvents';
import EventDetail from './pages/EventDetail'; 

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Event/>} />
        <Route path="/event/:slug" element={<EventDetail />} />

      
        {/* add other routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

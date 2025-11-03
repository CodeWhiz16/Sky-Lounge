// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap CSS globally
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// // Pages
// import Home from './pages/home';
// import About from './pages/About';
// import Event from './pages/AllEvents';
// import EventDetail from './pages/EventDetail';
//  import BuyTickets from './pages/BookTicket';
// import PrivateEvents from './pages/PrivateEvents';
// // import BookTable from './pages/BookTable.jsx';
// // Components
// import Navbar from './components/header';
// import Footer from './components/footer';
// import ScrollToTop from './components/ScrollToTop';
// import AdminPanel from './pages/admin';

// function App() {
//   return (
//     <BrowserRouter>
//       <ScrollToTop /> 
//       <Navbar /> 
     
//       <Routes>
       
//         <Route path="/" element={<Home />} />

//  <Route path="/admin" element={<AdminPanel />} />
        
//         <Route path="/about" element={<About />} />

        
//         <Route path="/events" element={<Event />} />

        
//         <Route path="/event/:slug" element={<EventDetail />} />

        
//         <Route path="/buy-tickets" element={<BuyTickets />} />


//         <Route path="/private-events" element={<PrivateEvents />} />

//  {/* <Route path="/book-table" element={<BookTable />} /> */}
//         {/* =========================
//             Future pages can be added below:
//             Example:
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/vip-services" element={<VipServices />} />
           
//            ========================= */}
//       </Routes>

      
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/home';
import About from './pages/About';
import Event from './pages/AllEvents';
import EventDetail from './pages/EventDetail';
import BuyTickets from './pages/BookTicket';
import PrivateEvents from './pages/PrivateEvents';
import AdminPanel from './pages/AdminPanel'; // ✅ CORRECTED IMPORT

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

        {/* ADMIN ROUTE for Event Management */}
        <Route path="/admin" element={<AdminPanel />} /> 
        
        <Route path="/about" element={<About />} />

        
        <Route path="/events" element={<Event />} />

        
        <Route path="/event/:slug" element={<EventDetail />} />

        
        <Route path="/buy-tickets" element={<BuyTickets />} />


        <Route path="/private-events" element={<PrivateEvents />} />

      </Routes>

      <Footer /> {/* Assuming Footer is at the bottom of the App component */}
    </BrowserRouter>
  );
}

export default App;
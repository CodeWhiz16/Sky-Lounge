import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Import Bootstrap CSS globally
import Home  from "./pages/home";
// import AppNavbar from "./components/header";
import About from "./pages/About";

function App() {
  return (
    <><Home/>
      <About/>
      
    </>
  );
}

export default App;

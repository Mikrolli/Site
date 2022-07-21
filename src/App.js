import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banners from "./UI/banners/Banners";
import Navbar from "./UI/navbar/Navbar";
import Footer from "./UI/footer/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Certificates from "./pages/Certificates";
import News from "./pages/News";
import Price from "./pages/Price";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Banners />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/news" element={<News />} />
        <Route path="/price" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

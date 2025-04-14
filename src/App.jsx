import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Component/Home';
import AboutUs from './Component/AboutUs';
import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import CategoriesPage from './Component/Catagories';
import Profile from './Component/Profile';
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          {/* Add more routes as needed */}
<Route path="/contact" element={<Contact />} />
<Route path="/catagories" element={<CategoriesPage/>} />
<Route path="/profile" element={<Profile/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;




































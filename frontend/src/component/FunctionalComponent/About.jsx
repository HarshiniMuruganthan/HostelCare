import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./About.css";

export default function About() {
    const [showProfileDetails, setShowProfileDetails] = useState(false);
  
    const handleProfileClick = () => {
      setShowProfileDetails(!showProfileDetails);
    };
  
    return (
      <div className="home-container">
        {/* Navbar */}
        <nav className="navbar">
        <div className="logo">
    <img src="/ourlogo.png" alt="HostelCare Logo" className="logo-image" />
  </div>
          <div className="nav-right">
            <div className="nav-links">
              <Link to="/ahome">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/history">History</Link>
            </div>
            <div className="profile-icon" onClick={handleProfileClick}>
              <FaUserCircle size={40} />
            </div>
          </div>
        </nav>
  
        {/* Profile Details Popup */}
        {showProfileDetails && (
          <div className="profile-details">
            <h3>Login Details</h3>
            <p>Email: w@gmail.com</p>
            <p>Name: chithra</p>
            <p>Block: A</p>
          </div>
        )}
  
  

      {/* About Content */}
      <div id="about-section" className="about-section">
        <div className="about-content">
          <img src="/hostel.jpg" alt="About Us" className="about-image" />
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              HostelCare is dedicated to ensuring the best maintenance services for hostels. 
              Our platform provides easy access to maintenance requests and quick solutions. 
              We aim to create a hassle-free experience for students and hostel staff. 
              With dedicated services in carpentry, electrical work, plumbing, housekeeping, 
              and network support, we ensure smooth hostel management. 
              Our team is committed to delivering reliable and efficient services.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>Email: <a href="mailto:hostelcare@gmail.com">hostelcare@gmail.com</a></p>
        <p>Contact: <a href="tel:+911234567890">+91 1234567890</a></p>
      </div>
    </div>
  );
}

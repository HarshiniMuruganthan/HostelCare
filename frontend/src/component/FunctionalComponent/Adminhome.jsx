import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import './Adminhome.css';

export default function AdminHome() {
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const navigate = useNavigate();

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

      {/* Maintenance Service Boxes */}
      <div className="service-boxes">
        <div className="service-box carpentry" onClick={() => navigate("/complaintcarpentry")}><span>Carpentry</span></div>
        <div className="service-box electrical"><span>Electrical</span></div>
        <div className="service-box plumbing"><span>Plumbing</span></div>
        <div className="service-box drinking-water"><span>Drinking Water</span></div>
        <div className="service-box housekeeping"><span>Housekeeping</span></div>
        <div className="service-box network"><span>Network</span></div>
        <div className="service-box infrastructure"><span>Infrastructure</span></div>
        <div className="service-box food-dining"><span>Food & Dining Hall</span></div>
        <div className="service-box waste-management"><span>Waste Management</span></div>
        <div className="service-box laundry"><span>Laundry</span></div>
      </div>
    </div>
  );
}

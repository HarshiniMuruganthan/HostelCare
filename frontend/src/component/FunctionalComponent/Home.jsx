import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [showProfileDetails, setShowProfileDetails] = useState(false);

  const handleProfileClick = () => {
    setShowProfileDetails(!showProfileDetails);
  };

  const handleAboutClick = () => {
    document.getElementById("about-section").scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">HostelCare</div>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#" onClick={() => window.location.reload()}>Home</a>
            <a href="#" onClick={handleAboutClick}>About</a>
            <a href="#">History</a>
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
          <p>Room No: 101</p>
          <p>Name: John Doe</p>
        </div>
      )}

      {/* Maintenance Boxes */}
      <div className="service-boxes">
        <div className="service-box carpentry" onClick={() => navigate("/carpentry")}>Carpentry</div>
        <div className="service-box electrical">Electrical</div>
        <div className="service-box plumbing">Plumbing</div>
        <div className="service-box drinking-water">Drinking Water</div>
        <div className="service-box housekeeping">Housekeeping</div>
        <div className="service-box network">Network</div>
        <div className="service-box infrastructure">Infrastructure</div>
        <div className="service-box food-dining">Food & Dining Hall</div>
        <div className="service-box waste-management">Waste Management</div>
        <div className="service-box laundry">Laundry</div>

      </div>

      
      <div id="about-section" className="about-section">
        <div className="about-content">
          <img src='/hostel.jpg' alt="About Us" className="about-image" />
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
    </div>
  );
}

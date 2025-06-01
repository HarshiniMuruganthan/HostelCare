import { useState } from "react";
import { Link } from "react-router-dom";
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
    
      <nav className="navbar">
        <div className="logo">HostelCare</div>
        <div className="nav-right">
          <div className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/userabout">About</Link>
            <Link to="#">History</Link>
          </div>
          <div className="profile-icon" onClick={handleProfileClick}>
            <FaUserCircle size={40} />
          </div>
        </div>
      </nav>

    
      {showProfileDetails && (
        <div className="profile-details">
          <h3>Login Details</h3>
          <p>Room No: 101</p>
          <p>Name: Harshini</p>
        </div>
      )}

      
      <div className="service-boxes">
        <div className="service-box carpentry" onClick={() => navigate("/carpentry")}><span>Carpentry</span></div>
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

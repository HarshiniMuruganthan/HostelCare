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
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="#">History</Link>
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
    </div>
  );
}

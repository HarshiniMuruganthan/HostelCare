import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./UserHistory.css";

const UserHistory = () => {
  const [userComplaints, setUserComplaints] = useState([]);
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user._id) return;

    setUserInfo(user);

    const fetchComplaints = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/complaints/user/${user._id}`
        );
        
        if (!res.ok) {
          throw new Error("Failed to fetch complaints");
        }

        const data = await res.json();
        setUserComplaints(data);
      } catch (error) {
        setError("Error fetching complaints: " + error.message);
        console.error("Error fetching complaints:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  const handleProfileClick = () => {
    setShowProfileDetails(!showProfileDetails);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="user-history-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/ourlogo.png" alt="logo" />
        </div>

        <div className="nav-right">
          <div className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/userabout">About</Link>
            <Link to="/userhistory">History</Link>
          </div>
          <div className="profile-icon" onClick={handleProfileClick}>
            <FaUserCircle size={40} />
          </div>
        </div>
      </nav>

      {showProfileDetails && userInfo && (
        <div className="profile-details">
          <h3>Login Details</h3>
          <p>Name: {userInfo.name}</p>
          <p>Room No: {userInfo.roomNo}</p>
        </div>
      )}

      <div className="history-wrapper">
        <h2>Your Complaint History</h2>
        {error ? (
          <p>{error}</p> // Show error message
        ) : userComplaints.length === 0 ? (
          <p>No complaints found.</p>
        ) : (
          <table className="history-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Problem</th>
                <th>Room No</th>
                <th>Status</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {userComplaints.map((c, idx) => (
                <tr key={idx}>
                  <td>{c.category}</td>
                  <td>{c.complaintText}</td>
                  <td>{c.roomNumber}</td>
                  <td>{c.status}</td>
                  <td>{c.feedback || "No feedback yet"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserHistory;
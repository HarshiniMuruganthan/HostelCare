import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./UserHistory.css";

const allComplaints = [
  { username: "john123", roomNo: "101", block: "A", problem: "Fan not working", category: "Electrical", status: "Completed", feedback: "Fixed quickly" },
  { username: "john123", roomNo: "101", block: "A", problem: "Clogged drain", category: "Plumbing", status: "Pending", feedback: "" },
  { username: "alice456", roomNo: "203", block: "B", problem: "Broken chair", category: "Carpentry", status: "In Progress", feedback: "" },
  { username: "john123", roomNo: "101", block: "A", problem: "Fan not working", category: "Electrical", status: "Completed", feedback: "Fixed quickly" },
  { username: "john123", roomNo: "101", block: "A", problem: "Clogged drain", category: "Plumbing", status: "Pending", feedback: "" },
  { username: "alice456", roomNo: "203", block: "B", problem: "Broken chair", category: "Carpentry", status: "In Progress", feedback: "" },
  { username: "john123", roomNo: "101", block: "A", problem: "Fan not working", category: "Electrical", status: "Completed", feedback: "Fixed quickly" },
  { username: "john123", roomNo: "101", block: "A", problem: "Clogged drain", category: "Plumbing", status: "Pending", feedback: "" },
  { username: "alice456", roomNo: "203", block: "B", problem: "Broken chair", category: "Carpentry", status: "In Progress", feedback: "" },
];

const UserHistory = () => {
  const [userComplaints, setUserComplaints] = useState([]);
  const [showProfileDetails, setShowProfileDetails] = useState(false);

  useEffect(() => {
    const loggedInUsername = localStorage.getItem("username") || "john123";
    const filteredComplaints = allComplaints.filter(
      (complaint) => complaint.username === loggedInUsername
    );
    setUserComplaints(filteredComplaints);
  }, []);

  const handleProfileClick = () => {
    setShowProfileDetails(!showProfileDetails);
  };

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

      {showProfileDetails && (
        <div className="profile-details">
          <h3>Login Details</h3>
          <p>Username: john123</p>
          <p>Block: A</p>
          <p>Room No: 101</p>
        </div>
      )}

      <div className="history-wrapper">
        <h2>Your Complaint History</h2>
        <table className="history-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Problem</th>
              <th>Block</th>
              <th>Room No</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {userComplaints.map((c, idx) => (
              <tr key={idx}>
                <td>{c.category}</td>
                <td>{c.problem}</td>
                <td>{c.block}</td>
                <td>{c.roomNo}</td>
                <td>{c.status}</td>
                <td>{c.feedback || "No feedback yet"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserHistory;

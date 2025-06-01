import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import "./History.css";

const History = () => {
  const [historyData, setHistoryData] = useState([]);
  const [showProfileDetails, setShowProfileDetails] = useState(false);

  const handleProfileClick = () => {
    setShowProfileDetails(!showProfileDetails);
  };

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/complaints/admin/all");
        const grouped = response.data;

      
        const transformed = Object.entries(grouped).map(([category, records]) => ({
          category,
          records,
        }));
        setHistoryData(transformed);
      } catch (err) {
        console.error("Error fetching admin history:", err);
      }
    };

    fetchComplaints();
  }, []);

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

      {showProfileDetails && (
        <div className="profile-details">
          <h3>Login Details</h3>
          <p>Email: w@gmail.com</p>
          <p>Name: Chithra</p>
          <p>Block: A</p>
        </div>
      )}

      <div className="history-container">
        <h2 className="history-title">Service History</h2>
        {historyData.map((service, index) => (
          <div key={index} className="history-section">
            <h3 className="service-title">{service.category}</h3>
            <table className="history-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Room No</th>
                  <th>Problem</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {service.records.map((record, idx) => (
                  <tr key={idx}>
                    <td>{record.studentName}</td>
                    <td>{record.roomNumber}</td>
                    <td>{record.complaintText}</td>
                    <td className={`history-status-${record.status.toLowerCase().replace(" ", "-")}`}>
                      {record.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;

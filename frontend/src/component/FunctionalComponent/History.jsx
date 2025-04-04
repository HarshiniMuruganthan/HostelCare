import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./History.css"; 

const historyData = [
    {
        category: "Carpentry",
        records: [
            { name: "Dhiviya C", block: "B", roomNo: "103", problem: "Door Handle", status: "Completed" },
            { name: "Aathira A", block: "C", roomNo: "210", problem: "Broken Chair", status: "Pending" },
        ],
    },
    {
        category: "Electrical",
        records: [
            { name: "Vaishu S", block: "A", roomNo: "305", problem: "Fan Not Working", status: "In Progress" },
            { name: "Sneha R", block: "D", roomNo: "112", problem: "Light Flickering", status: "Completed" },
        ],
    },
    {
        category: "Plumbing",
        records: [
            { name: "Meera S", block: "E", roomNo: "220", problem: "Leaking Tap", status: "Completed" },
            { name: "Varshini P", block: "B", roomNo: "410", problem: "Clogged Drain", status: "Pending" },
        ],
    },
];

const History = () => {
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
                    <p>Name: Chithra</p>
                    <p>Block: A</p>
                </div>
            )}

            {/* History Section */}
            <div className="history-container">
                <h2 className="history-title">Service History</h2>
                {historyData.map((service, index) => (
                    <div key={index} className="history-section">
                        <h3 className="service-title">{service.category}</h3>
                        <table className="history-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Block</th>
                                    <th>Room No</th>
                                    <th>Problem</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {service.records.map((record, idx) => (
                                    <tr key={idx}>
                                        <td>{record.name}</td>
                                        <td>{record.block}</td>
                                        <td>{record.roomNo}</td>
                                        <td>{record.problem}</td>
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./ComplaintCarpentry.css";

const initialCarpentryComplaints = [
    { name: "Dhiviya C", block: "B", roomNo: "103", problem: "Door Handle", status: "Completed" },
    { name: "Aathira A", block: "C", roomNo: "210", problem: "Broken Chair", status: "Pending" },
];

const ComplaintCarpentry = () => {
    const [complaints, setComplaints] = useState(initialCarpentryComplaints);

    // Function to handle status change
    const handleStatusChange = (index, newStatus) => {
        const updatedComplaints = [...complaints];
        updatedComplaints[index].status = newStatus;
        setComplaints(updatedComplaints);
    };

    return (
        <div className="carpentry-container">
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
                    <div className="profile-icon">
                        <FaUserCircle size={40} />
                    </div>
                </div>
            </nav>

            {/* Carpentry Complaints Table */}
            <div className="complaints-container">
                <h2 className="complaints-title">Carpentry Complaints</h2>
                <table className="complaints-table">
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
                        {complaints.map((record, idx) => (
                            <tr key={idx}>
                                <td>{record.name}</td>
                                <td>{record.block}</td>
                                <td>{record.roomNo}</td>
                                <td>{record.problem}</td>
                                <td>
                                    <select
                                        className={`status-dropdown status-${record.status.toLowerCase().replace(" ", "-")}`}
                                        value={record.status}
                                        onChange={(e) => handleStatusChange(idx, e.target.value)}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ComplaintCarpentry;

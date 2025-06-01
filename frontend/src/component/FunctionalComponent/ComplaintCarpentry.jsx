import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./ComplaintCarpentry.css";

const ComplaintCarpentry = () => {
    const [complaints, setComplaints] = useState([]);

  
    useEffect(() => {
        const fetchCarpentryComplaints = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/complaints/admin/category/Carpentry");
                const data = await response.json();
                setComplaints(data);
            } catch (error) {
                console.error("Error fetching complaints:", error);
            }
        };

        fetchCarpentryComplaints();
    }, []);

   
    const handleStatusChange = (index, newStatus) => {
        const updatedComplaints = [...complaints];
        updatedComplaints[index].status = newStatus;
        setComplaints(updatedComplaints);
    
    };

    return (
        <div className="carpentry-container">
        
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
                                <td>{record.studentName}</td>
                                <td>{record.roomNumber?.charAt(0)}</td>
                                <td>{record.roomNumber}</td>
                                <td>{record.complaintText}</td>
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

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="typewriter">
          <h2>Welcome to HostelCare</h2>
        </div>
        <button className="landing-button" onClick={() => navigate("/alogin")}>
          Login as Admin
        </button>
        <button className="landing-button" onClick={() => navigate("/slogin")}>
          Login as Student
        </button>
      </div>
    </div>
  );
};

export default Landing;

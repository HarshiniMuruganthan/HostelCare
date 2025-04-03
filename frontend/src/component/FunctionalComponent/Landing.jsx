import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-box">
        <h2>Welcome!!</h2>
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

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !roomNo || !password) {
      alert("Please enter Username, Room Number, and Password");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, roomNo, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Login failed");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data));
      alert(`Logged in as ${data.name} with Room No: ${data.roomNo}`);
      navigate("/Home");
    } catch (error) {
      alert("Error during login.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="left-side">
        <img src="/ourlogo.png" alt="Animated" />
      </div>
      <div className="right-side">
        <div className="login-box">
          <h2>HostelCare</h2>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter Room Number"
              value={roomNo}
              onChange={(e) => setRoomNo(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}
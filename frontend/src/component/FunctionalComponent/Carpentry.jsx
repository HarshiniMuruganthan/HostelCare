import { useState } from "react";

export default function CarpentryComplaintForm() {
  const [complaint, setComplaint] = useState("");
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user._id) {
      alert("Please log in before submitting a complaint.");
      return;
    }

    const formData = new FormData();
    formData.append("userId", user._id); // Updated to use userId
    formData.append("studentName", user.name || user.username); // fallback to username
    formData.append("roomNumber", user.roomNo); // room number
    formData.append("complaintText", complaint);
    formData.append("category", "Carpentry");
    if (file) formData.append("image", file);

    try {
      const res = await fetch("http://localhost:5000/api/complaints/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setComplaint("");
        setFile(null);
        setSubmitted(true);
      } else {
        alert(data.message || "Failed to submit complaint.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Error submitting complaint.");
    }
  };

  return (
    <div className="carpentry-container">
      {!submitted ? (
        <div className="carpentry-form">
          <h2 className="carpentry-title">Carpentry Complaint Form</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              className="carpentry-textarea"
              rows="4"
              placeholder="Describe your complaint..."
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              required
            ></textarea>
            <input
              type="file"
              className="carpentry-file-input"
              onChange={handleFileChange}
              accept="image/*"
            />
            <button type="submit" className="carpentry-button">
              Submit Complaint
            </button>
          </form>
        </div>
      ) : (
        <div className="carpentry-success">
          <h2 className="success-message">Complaint Submitted Successfully!</h2>
        </div>
      )}
    </div>
  );
}

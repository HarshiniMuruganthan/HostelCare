import { useState } from "react";

export default function CarpentryComplaintForm() {
  const [complaint, setComplaint] = useState("");
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false); // State to track submission

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Complaint:", complaint);
    console.log("File:", file);

    // Reset form fields
    setComplaint("");
    setFile(null);
    setSubmitted(true); // Hide form after submission
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


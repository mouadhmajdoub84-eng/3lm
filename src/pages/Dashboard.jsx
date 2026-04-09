import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    // Redirect to login if no token
    if (!token) {
      navigate("/se-connecter");
      return;
    }

    fetchSubmissions();
  }, [token, navigate]);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/api/contact/submissions", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("access_token");
          navigate("/se-connecter");
          return;
        }
        throw new Error("Failed to fetch submissions");
      }

      const data = await response.json();
      setSubmissions(data);
      setError("");
    } catch (err) {
      setError(err.message);
      console.error("Error fetching submissions:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/se-connecter");
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Tableau de Bord Admin</h1>
        <button onClick={handleLogout} className="logout-btn">
          Se déconnecter
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="submissions-section">
        <div className="section-header">
          <h2>Soumissions de Contact ({submissions.length})</h2>
          <button onClick={fetchSubmissions} className="refresh-btn">
            🔄 Rafraîchir
          </button>
        </div>

        {submissions.length === 0 ? (
          <div className="no-submissions">Aucune soumission reçue pour le moment.</div>
        ) : (
          <div className="submissions-list">
            {submissions.map((submission) => (
              <div key={submission.id} className="submission-card">
                <div className="submission-header">
                  <h3>{submission.name}</h3>
                  <span className="submission-id">#{submission.id}</span>
                </div>
                <div className="submission-info">
                  <p>
                    <strong>Email:</strong> <a href={`mailto:${submission.email}`}>{submission.email}</a>
                  </p>
                  <p>
                    <strong>Date:</strong> {new Date(submission.created_at).toLocaleString("fr-FR")}
                  </p>
                </div>
                <div className="submission-message">
                  <strong>Message:</strong>
                  <p>{submission.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

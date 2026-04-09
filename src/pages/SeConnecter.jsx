import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SeConnecter.css";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

export default function SeConnecter() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email invalide";
    }

    if (!password.trim()) {
      newErrors.password = "Mot de passe est requis";
    } else if (password.length < 6) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("access_token", data.access_token);
        setEmail("");
        setPassword("");
        setErrors({});
        navigate("/dashboard");
      } else {
        let errorMessage = "Email ou mot de passe incorrect";
        try {
          const errorData = await response.json();
          if (typeof errorData.detail === "string") {
            errorMessage = errorData.detail;
          } else if (Array.isArray(errorData.detail) && errorData.detail.length > 0) {
            errorMessage = errorData.detail[0].msg || errorData.detail[0].detail || JSON.stringify(errorData.detail[0]);
          } else if (errorData.message) {
            errorMessage = errorData.message;
          }
        } catch {
          errorMessage = response.statusText || errorMessage;
        }
        setErrors({ submit: errorMessage });
      }
    } catch (error) {
      console.error("Erreur:", error);
      setErrors({ submit: "Erreur de connexion" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="se-connecter-container">
      <div className="login-card">
        <h1>Se Connecter</h1>
        {errors.submit && <span className="error-message" style={{display: "block", marginBottom: "15px"}}>{errors.submit}</span>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Entrez votre email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: "" });
              }}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              placeholder="Entrez votre mot de passe"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors({ ...errors, password: "" });
              }}
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? "Connexion en cours..." : "Se connecter"}
          </button>
        </form>

        <p className="signup-link">
          Vous n'avez pas de compte ? <a href="/inscription">S'inscrire</a>
        </p>
      </div>
    </div>
  );
}

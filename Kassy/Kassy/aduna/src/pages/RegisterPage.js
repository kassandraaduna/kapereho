import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ← Added Link
import "./Registerpage.css";

function Registerpage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  localStorage.setItem("username", formData.username);

  alert("Account Created Successfully!");
  console.log("Form Data Submitted:", formData);
  navigate("/"); 
};


  return (
    <div className="app-container">
      <header className="navbar">
        <div className="logo">KAPEREHO</div>
        <div className="search-container">
          <input type="text" placeholder="search" />
          <button>🔍</button>
        </div>
        <nav className="menu">
          <Link to="/home">Home</Link>
          <a href="#">Menu</a>
          <a href="#">Favorites</a>
          <a href="#">Contact Us</a>
        </nav>
        <div className="profile-icon">👤</div>
      </header>

      <div className="content">
        <div className="form-container">
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <div className="password-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span
                className="toggle"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>

          <p className="login-link">
            Have an account?{" "}
            <Link to="/" className="link">
              Login Account
            </Link>
          </p>
        </div>
      </div>

      <footer>
        <a href="https://facebook.com/kaperehoph" target="_blank" rel="noopener noreferrer">
          📘 @kaperehoph
        </a>
        <a href="https://instagram.com/kaperehoph" target="_blank" rel="noopener noreferrer">
          📸 @kaperehoph
        </a>
      </footer>
    </div>
  );
}

export default Registerpage;

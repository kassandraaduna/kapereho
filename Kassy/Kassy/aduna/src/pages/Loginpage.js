import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Loginpage.css";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      alert(`Login successful for ${email}`);
      navigate("/home");
    } else {
      alert("Please fill in all fields!");
    }
  };

  const signInWithGoogle = () => {
    alert("Google sign-in coming soon!");
  };

  const searchSite = () => {
    if (searchQuery.trim() !== "") {
      alert(`Searching for: ${searchQuery}`);
    } else {
      alert("Please enter a search term.");
    }
  };

  return (
    
    <div className="App">
      <header className="navbar flex justify-between items-center bg-[#3b2b1a] text-white px-10 py-3 sticky top-0 z-10 shadow-md">
              <div className="nav-left">
              <div className="logo">KAPEREHO</div>
                   
                           <div className="search-container">
                             <input type="text" placeholder="search" />
                             <button>🔍</button>
                           </div>
             
                           <nav className="menu">
                             <a href="#">Home</a>
                             <a href="#">Menu</a>
                             <a href="#">Favorites</a>
                             <a href="#">Contact Us</a>
                           </nav>
      
              <div className="profile-icon">👤</div>
              </div>
            </header>

      <div className="login-container">
        <div className="login-card">
          <h2>
            <strong>Welcome Back!</strong> Please login to your account
          </h2>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  👁️
                </span>
              </div>
            </div>

            <div className="forgot-container">
              <button
                type="button"
                className="forgot"
                onClick={() =>
                  alert("Forgot password functionality to be implemented")
                }
              >
                Forgot password?
              </button>
            </div>

            <button type="submit" className="signin-btn">
              Sign In
            </button>

            <div className="divider">or</div>

            <button
              type="button"
              className="google-btn"
              onClick={signInWithGoogle}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
              />
              Sign in with Google
            </button>

            <div className="create-account">
              New Coffeelover?{" "}
              <Link to="/register" className="link">
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>

      <footer>
        <a
          href="https://facebook.com/kaperehoph"
          target="_blank"
          rel="noopener noreferrer"
        >
          📘 @kaperehoph
        </a>
        <a
          href="https://instagram.com/kaperehoph"
          target="_blank"
          rel="noopener noreferrer"
        >
          📸 @kaperehoph
        </a>
      </footer>
    </div>
  );
}

export default Loginpage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Contactpage.css";

function ContactPage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); 
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields!");
      return;
    }

    alert("Message sent successfully! ☕");
    console.log("Contact Message:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      navigate("/");
    }
  };

  return (
    <div className="contact-page min-h-screen flex flex-col font-[Poppins]">
<header className="navbar flex justify-between items-center bg-[#3b2b1a] text-white px-10 py-3 sticky top-0 z-10 shadow-md">
        <div className="nav-left">
        <div className="logo">KAPEREHO</div>
             
                     <div className="search-container">
                       <input type="text" placeholder="search" />
                       <button>🔍</button>
                     </div>
       
                     <nav className={`menu ${menuOpen ? "open" : ""}`}>
                       <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
                       <Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link>
                       <Link to="/favorites" onClick={() => setMenuOpen(false)}>Favorites</Link>
                       <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                     </nav>
             
                     <div
                       className={`hamburger ${menuOpen ? "active" : ""}`}
                       onClick={() => setMenuOpen(!menuOpen)}
                     >
                       <span></span>
                       <span></span>
                       <span></span>
                     </div>

        <div className="profile-dropdown relative">
          <div
            className="profile-icon text-2xl cursor-pointer hover:text-[#c89b6d] transition"
            onClick={toggleDropdown}
          >
            👤
          </div>

          {showDropdown && (
            <div className="dropdown-menu absolute right-0 top-10 bg-white rounded-lg shadow-lg p-4 min-w-[160px]">
              <p className="username text-[#3b2f1b] font-semibold mb-2">
                Welcome to Kapereho!
              </p>
              <button
                onClick={handleLogout}
                className="w-full bg-[#d4af37] text-[#3b2f1b] font-bold py-1.5 rounded-md hover:bg-[#bfa035] transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
        </div>
      </header>

      <main className="contact-content">
        <h1>Contact Us 📬</h1>
        <p className="subtitle">
          We’d love to hear from you! Send us your feedback, questions, or coffee stories.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </main>

      <footer className="bg-[#3b2b1a] text-white text-center py-4 text-sm flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://facebook.com/kaperehoph"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#c89b6d] transition"
        >
          📘 @kaperehoph
        </a>
        <a
          href="https://instagram.com/kaperehoph"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#c89b6d] transition"
        >
          📸 @kaperehoph
        </a>
      </footer>
    </div>
  );
}

export default ContactPage;

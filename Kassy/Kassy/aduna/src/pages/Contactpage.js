import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Contactpage.css";

function ContactPage() {
  const navigate = useNavigate();
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
        <div className="logo text-[#c89b6d] font-bold text-xl tracking-wide">
          KAPEREHO
        </div>

        <div className="search-container flex gap-2 bg-white rounded-full px-3 py-1">
          <input
            type="text"
            placeholder="search"
            className="border-none outline-none px-2 text-gray-700 placeholder-gray-500"
          />
          <button className="bg-[#c89b6d] text-white px-3 py-1 rounded-full hover:bg-[#b28358] transition">
            🔍
          </button>
        </div>

        <nav className="menu flex gap-6 text-base font-medium">
          <Link to="/home" className="hover:text-[#c89b6d] transition">
            Home
          </Link>
          <Link to="/menu" className="hover:text-[#c89b6d] transition">
            Menu
          </Link>
          <Link to="/favorites" className="hover:text-[#c89b6d] transition">
            Favorites
          </Link>
          <Link
            to="/contact"
            className="text-[#c89b6d] font-semibold border-b-2 border-[#c89b6d]"
          >
            Contact Us
          </Link>
        </nav>

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

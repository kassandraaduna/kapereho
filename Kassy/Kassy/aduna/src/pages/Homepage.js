import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) navigate("/");
  };

  return (
    <div className="home-container font-[Poppins]">

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

      <section className="hero flex items-center justify-start px-20 text-white h-[80vh] bg-cover bg-center">
        <div className="hero-content bg-black/50 p-8 rounded-2xl max-w-lg">
          <h1 className="text-3xl font-bold mb-2 drop-shadow-lg">
            Coffee – Makes you Love
          </h1>
          <p className="text-base mb-4 opacity-90">
            Same Taste. Same Comfort. Kapereho.
          </p>
          <button className="contact-btn bg-[#c89b6d] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#b28358] transition">
            Contact Us
          </button>
        </div>
      </section>

      <section className="about px-24 py-16 bg-white text-[#333]">
        <h2 className="text-2xl font-bold text-[#3b2b1a] mb-8">About Us</h2>

        <div className="about-content flex flex-col md:flex-row gap-12">
          <div className="about-text leading-relaxed flex-1 space-y-4">
            <p>
              At Kapereho, we believe that every cup of coffee tells a story. Our name comes from
              the Filipino word <b>“pareho”</b> which means “the same”, because we dream of creating
              a place where people can connect, share, and find comfort in something familiar like a
              warm cup of coffee.
            </p>
            <p>
              Founded with passion for both community and craft, Kapereho is more than just a coffee
              shop. We are your daily companion, a cozy space where friends gather, ideas are
              brewed, and every sip feels like home.
            </p>
            <p>
              We carefully source our beans and craft each cup with love, ensuring that every brew
              brings out the best flavors—whether you’re here to kickstart your morning, catch up
              with friends, or simply enjoy a quiet moment.
            </p>
            <p>
              At Kapereho, it’s not just about coffee—it’s about connection. Because your coffee,
              just like your story, deserves to be shared.
            </p>
          </div>
        </div>
      </section>

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

export default Homepage;

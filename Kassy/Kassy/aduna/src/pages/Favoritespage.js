import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Favoritespage.css";

function FavoritesPage() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleRemove = (name) => {
    const confirmRemove = window.confirm("Remove this item from favorites?");
    if (confirmRemove) {
      const updated = favorites.filter((item) => item.name !== name);
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
    }
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) navigate("/");
  };

  return (
    <div className="favorites-page bg-gradient-to-b from-[#f5f2ed] to-[#e8e2d9] min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="navbar flex items-center justify-between bg-[#3b2f1b] px-10 py-3 text-white shadow-md">
        <div className="logo font-bold text-[#d4af37] text-xl tracking-wide">
          KAPEREHO
        </div>

        <div className="search-container flex items-center bg-white rounded-full px-3 py-1">
          <input
            type="text"
            placeholder="search"
            className="border-none outline-none text-black px-2 bg-transparent"
          />
          <button className="text-gray-500 hover:text-[#d4af37] transition">
            🔍
          </button>
        </div>

        <nav className="menu flex gap-4 text-white">
          <Link to="/home" className="hover:text-[#d4af37] transition">
            Home
          </Link>
          <Link to="/menu" className="hover:text-[#d4af37] transition">
            Menu
          </Link>
          <Link
            to="/favorites"
            className="text-[#d4af37] font-semibold border-b-2 border-[#d4af37]"
          >
            Favorites
          </Link>
          <Link to="/contact" className="hover:text-[#d4af37] transition">
            Contact Us
          </Link>
        </nav>

        <div className="profile-dropdown relative">
          <div
            className="profile-icon text-2xl cursor-pointer hover:text-[#d4af37] transition"
            onClick={toggleDropdown}
          >
            👤
          </div>

          {showDropdown && (
            <div className="dropdown-menu absolute right-0 mt-2 bg-white text-[#3b2f1b] rounded-lg shadow-lg p-3 w-40 z-50">
              <p className="username text-sm text-center mb-2 font-medium">
                Welcome to Kapereho!
              </p>
              <button
                onClick={handleLogout}
                className="w-full bg-[#d4af37] text-[#3b2f1b] rounded-md py-1 font-semibold hover:bg-[#bfa035] transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Tagline */}
      <div className="tagline text-center mt-12">
        <h2 className="text-3xl font-semibold text-[#3b2f1b] leading-snug mb-4">
          We deliver nothing but<br />the finest coffee<br />experience.
        </h2>

        <div className="categories flex justify-center gap-10 text-[#3b2f1b] text-lg font-medium">
          <div className="flex flex-col items-center">
            ☕<p>Hot Coffee</p>
          </div>
          <div className="flex flex-col items-center">
            🥶<p>Cold Coffee</p>
          </div>
          <div className="flex flex-col items-center">
            🍵<p>Tea</p>
          </div>
          <div className="flex flex-col items-center">
            🍰<p>Dessert</p>
          </div>
        </div>
      </div>

      {/* Favorites List */}
      <main className="favorites-content flex-1 flex flex-col items-center mt-10 px-6">
        {favorites.length === 0 ? (
          <p className="empty text-[#3b2f1b] text-lg italic">
            No favorites yet. Go add some coffee love ☕
          </p>
        ) : (
          <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            {favorites.map((item, index) => (
              <div
                key={index}
                className="product-card bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-40 h-40 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold text-[#3b2f1b]">
                  {item.name}
                </h3>
                <p className="price text-[#d4af37] font-medium">{item.price}</p>
                <button
                  className="remove-btn mt-3 bg-[#d4af37] text-[#3b2f1b] px-4 py-1 rounded-full font-semibold hover:bg-[#bfa035] transition"
                  onClick={() => handleRemove(item.name)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#3b2f1b] text-white text-sm flex justify-center items-center gap-8 py-3 mt-auto">
        <a
          href="https://facebook.com/kaperehoph"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#d4af37] transition"
        >
          📘 @kaperehoph
        </a>
        <a
          href="https://instagram.com/kaperehoph"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#d4af37] transition"
        >
          📸 @kaperehoph
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;

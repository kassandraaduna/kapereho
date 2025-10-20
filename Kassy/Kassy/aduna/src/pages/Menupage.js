import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Menupage.css";


function MenuPage() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  setFavorites(storedFavorites);
}, []);


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const addToFavorites = (item) => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const alreadyFavorite = storedFavorites.some((fav) => fav.name === item.name);

    if (alreadyFavorite) {
      alert(`${item.name} is already in your favorites!`);
      return;
    }

    const updatedFavorites = [...storedFavorites, item];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
    alert(`${item.name} added to favorites! ❤️`);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      navigate("/");
    }
  };

  const menuItems = [
    { name: "Espresso", price: "₱120", img: "https://www.thespruceeats.com/thmb/HJrjMfXdLGHbgMhnM0fMkDx9XPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg" },
    { name: "Cappuccino", price: "₱150", img: "https://www.clarin.com/2022/03/01/ceq4FUBv9_2000x1500__1.jpg" },
    { name: "Caramel Latte", price: "₱170", img: "https://tse1.explicit.bing.net/th/id/OIP.Oc8d-oaazzmO9PtVhiQHpgHaLH?cb=12ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Iced Mocha", price: "₱160", img: "https://i.pinimg.com/originals/b4/28/8f/b4288f3a2dc30be3a47ae796e277e0d3.jpg" },
    { name: "Chocolate Cake", price: "₱140", img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg" },
    { name: "Matcha Latte", price: "₱150", img: "https://www.eatingbirdfood.com/wp-content/uploads/2021/04/iced-matcha-latte-hero-768x1152.jpg" },
    { name: "Lemonade", price: "₱120", img: "https://thesoccermomblog.com/wp-content/uploads/2024/06/Homemade-Lemonade-1.jpg" },
    { name: "Raspberry Cheesecake", price: "₱190", img: "https://www.jocooks.com/wp-content/uploads/2018/11/cheesecake-1-22.jpg" },
  ];

  return (
    <div className="menu-page">
      <header className="navbar">
        <div className="logo">KAPEREHO</div>

        <div className="search-container">
          <input type="text" placeholder="search" />
          <button>🔍</button>
        </div>

        <nav className="menu">
          <Link to="/home">Home</Link>
          <Link to="/menu" className="active">Menu</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        <div className="profile-dropdown">
          <div className="profile-icon" onClick={toggleDropdown}>
            👤
          </div>
          {showDropdown && (
            <div className="dropdown-menu">
              <p className="username"> welcome to kapereho!</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </header>
    
      <main className="menu-content">
        <div className="tagline">
        <h2>
          We deliver nothing but<br />the finest coffee<br />experience.
        </h2>
        <div className="categories">
          <div>
            ☕<p>hot coffee</p>
          </div>
          <div>
            🥶<p>cold coffee</p>
          </div>
          <div>
            🍵<p>tea</p>
          </div>
          <div>
            🍰<p>dessert</p>
          </div>
        </div>
      </div>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div className="menu-card" key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>

              <div className="button-group">
                <button className="order-btn">Order Now</button>
                <button
                  className="heart-btn"
                  onClick={() => addToFavorites(item)}
                >
                  ❤️
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

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

export default MenuPage;

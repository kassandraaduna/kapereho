import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/RegisterPage";
import Homepage from "./pages/Homepage";
import FavoritesPage from "./pages/Favoritespage";
import ContactPage from "./pages/Contactpage";
import MenuPage from "./pages/Menupage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

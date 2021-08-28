import React from "react";
import "./Header.css";
import Logo from "./components/Logo";
import NavBar from "./components/Navbar";

const Header = () => (
  <div className="header">
    Header Component
    <div className="header__logo">
      <Logo />
    </div>
    <div className="header__navbar">
      <NavBar />
    </div>
  </div>
);

export default Header;

"use client"
import React, { useState } from "react";





const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (

    <nav className="navbar">
      <div className="brand">
        <img className="logoimage" src="/fiction logo2.jpg"></img>
        Fiction Developers</div>
      <input
        type="checkbox"
        id="nav-toggle"
        className="nav-toggle"
        checked={isOpen}
        onChange={toggleMenu}
      />
      <label htmlFor="nav-toggle" className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className={`nav-items ${isOpen ? "open" : ""}`}>
        <li className="li">HOME</li>
        <li className="li">ABOUT US</li>
        <li className="li">SERVICES</li>
        <li className="li">CONTACT</li>
      </ul>
    </nav>

  );
};

export default Navbar;

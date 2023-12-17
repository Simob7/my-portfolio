import React from "react";
import "./menu.scss";
const Menu = ({ menuOpen, setMenuOpen }) => {
  const handleClose = () => {
    setMenuOpen(false);
  };
  return (
    <div className={`menu ${menuOpen && " active"}`}>
      <ul className="list-items">
        <li className="item" onClick={handleClose}>
          <a href="#intro">home</a>
        </li>
        <li className="item" onClick={handleClose}>
          <a href="#portfolio">portfolio</a>
        </li>
        <li className="item" onClick={handleClose}>
          <a href="#works">works</a>
        </li>
        <li className="item" onClick={handleClose}>
          <a href="#testimonials">testmonials</a>
        </li>
        <li className="item" onClick={handleClose}>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

import { useState, useEffect } from "react";
import ReactLogo from "../assets/react.svg";
import { FaMoon, FaSun } from "react-icons/fa"; 

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  // Add/remove dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light" style={{ backgroundColor: "transparent" }}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src={ReactLogo}
            alt="FKDN Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2 link-primary"
          />
          FKDN.
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link text-dark link-primary" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link text-dark link-primary" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link text-dark link-primary" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link text-dark link-primary" href="#portfolio">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link text-dark link-primary" href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Dark Mode Toggle */}
        <div
          className="d-flex align-items-center ms-3"
          style={{ cursor: "pointer" }}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun size={22} className="text-warning" /> : <FaMoon size={20} className="text-dark" />}
        </div>
      </div>
    </nav>
  );
}

export default Header;

import ReactLogo from "../assets/react.svg"; // replace with your logo
import { FaMoon } from "react-icons/fa"; 

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-light "
      style={{ backgroundColor: "transparent" }}
    >
      <div className="container">
        {/* Logo */}
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

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-dark link-primary" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark link-primary" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark link-primary" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark link-primary" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark link-primary" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right-side icon */}
        <div className="d-flex align-items-center">
          <FaMoon size={20} className="text-dark" style={{ cursor: "pointer" }} />
        </div>


      </div>
    </nav>
  );
}

export default Header;

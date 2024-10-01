import React from "react";
import ReactDOM from "react-dom";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div>
      <div className="navbar-container">
        <nav className="nav">
          <span className="contact-info">
            <FontAwesomeIcon icon={faEnvelope} /> info@beesoft.com.ng{" "}
            <FontAwesomeIcon icon={faMobile} className="icon-mobile" />{" "}
            +2348136063621
          </span>
        </nav>
      </div>
      <div className="sidebar">
        <h1 className="brand">BeeSoft</h1>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="https://beesoft.com.ng/about">About</a>
          </li>
          <li>
            <a href="https://beesoft.com.ng/services">Services</a>
          </li>
          <li>
            <a href="https://beesoft.com.ng/team">Team</a>
          </li>
          <li>
            <a href="https://beesoft.com.ng/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<Navbar />, document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";

// export default function Footer() {
//   return (
//     <section className="footer">
//       <h1>BeeSoft Ltd.</h1>
//       <p>6 Offa Close, Off Oyo Street Garki Area 2, Abuja Nigeria.</p>
//       <p>Phone : +2348136063621</p>
//       <p>Email : info@beesoft.com.ng</p>

//       <h3>Useful Links</h3>

//       <a href="#about">About us</a>

//       <a href="#services">Services</a>

//       <a href="#terms">Terms of service</a>

//       <a href="#privacy">Privacy policy</a>

//       <h3>Our Services</h3>

//       <a href="#ict">ICT Services</a>

//       <a href="#product">Product Management</a>

//       <a href="#engineering">Engineering & Renewable Energy</a>

//       <h3>Our Social Networks</h3>
//       <p>Follow/like us to stay updated with what we do.</p>

//       <a href="https://x.com">Twitter</a>

//       <a href="https://facebook.com">Facebook</a>

//       <a href="https://instagram.com">Instagram</a>

//       <a href="https://skype.com">Skype</a>

//       <a href="https://linkedin.com">LinkedIn</a>
//     </section>
//   );
// }
// ReactDOM.render(<Footer />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <h1>BeeSoft Ltd.</h1>
      <p>6 Offa Close, Off Oyo Street Garki Area 2, Abuja Nigeria.</p>
      <p>Phone : +2348136063621</p>
      <p>Email : info@beesoft.com.ng</p>

      <h3>Useful Links</h3>
      <a href="#about">
        <span className="arrow">➤</span> About us
      </a>
      <a href="#services">
        <span className="arrow">➤</span> Services
      </a>
      <a href="#terms">
        <span className="arrow">➤</span> Terms of service
      </a>
      <a href="#privacy">
        <span className="arrow">➤</span> Privacy policy
      </a>

      <h3>Our Services</h3>
      <a href="#ict">
        <span className="arrow">➤</span> ICT Services
      </a>
      <a href="#product">
        <span className="arrow">➤</span> Product Management
      </a>
      <a href="#engineering">
        <span className="arrow">➤</span> Engineering & Renewable Energy
      </a>

      <h3>Our Social Networks</h3>
      <p>Follow/like us to stay updated with what we do.</p>
      <div className="social-icons">
        <a
          href="https://beesoft.com.ng/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://beesoft.com.ng/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://beesoft.com.ng/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://beesoft.com.ng/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-skype"></i>
        </a>
        <a
          href="https://beesoft.com.ng/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
}

ReactDOM.render(<Footer />, document.getElementById("root"));

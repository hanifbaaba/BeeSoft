import React from "react";
import ReactDOM from "react-dom";
import BeesoftLogo from "/Users/apple/Desktop/BeeSoft/beesoft-logo.jpeg";
import "./Home.css";

export default function Home() {
  const message = () => {
    alert(
      "Congratulations! You have subscribed to BeeSoft's newsletter. Stay tuned for more updates!"
    );
  };
  return (
    <div className="container">
      <img src={BeesoftLogo} alt="" className="logo" />
      <h1>
        Welcome to <b>BeeSoft</b>
      </h1>
      <h2>
        We are a team of professional developers making websites with suitable
        tools.
      </h2>
      <div className="buttons">
        <a href="https://beesoft.com.ng/about">
          <button className="button"> Get Started </button>
        </a>

        <button className="button">Watch Video</button>
      </div>

      <h3>Join our newsletter</h3>
      <p>Interested? join our newsletter to be kept in the loop</p>
      <input type="email" placeholder="Enter your email" className="input" />
      <button onClick={message} className="subscribe">
        Subscribe
      </button>
    </div>
  );
}

ReactDOM.render(<Home />, document.getElementById("root"));

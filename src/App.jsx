import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));

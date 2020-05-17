import React, { Component } from "react";
import "./Home.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

class Home extends Component {
  render() {
    return (
      <div className="infoSection">
        <div className="name">
          <h1>
            <span className="fName">Thomas</span>{" "}
            <span className="lName">Slezak</span>
          </h1>
        </div>
        <div className="about">
          <p></p>
        </div>
        <div className="socialLinks">
          <a href="https://github.com/tms2442">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/thomas-slezak-967903152/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import "./About.css";
import profile from "./profile_photo.jpg";

class About extends Component {
  render() {
    return (
      <div className="aboutMe">
        <div className="titleAbt">
          <h1>
            <span className="aboutPage">About</span>{" "}
            <span className="me">Me</span>
          </h1>
        </div>
        <div className="abtgrid">
          <div className="pictureDisplay">
            <img src={profile} />
          </div>
          <div className="bio">
            <h1>BIO</h1>
            <p>
              Hi, my name is Thomas Slezak. I recently graduated from Aurora
              University with a Bachelor's in Computer Science. Before I got my
              Bachelors degree at AU I went to Waubonsee Community College where
              I got my Associates degree in Software Development. I am
              passionate about learning and enjoy finding solutions to complex
              problems through programming.
            </p>
          </div>
          <div className="exp au">
            <h4>Education</h4>
            <p>
              Aurora University <br /> Bachelor of Science, Computer Science{" "}
              <br />
              May 2020
            </p>
          </div>
          <div className="exp wawa">
            <h4>Education</h4>
            <p>
              Waubonsee Community College <br /> Associate in Applied Science,
              Software Development <br />
              Certificate in Software Development
              <br />
              May 2017
            </p>
          </div>
          <div className="exp skills">
            <h4>Skills/Technologies</h4>
            <p>
              Java, python, Git, c#, Laravel, PHP, HTML, CSS, C++, Linux/Unix,
              JavaScript, React
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

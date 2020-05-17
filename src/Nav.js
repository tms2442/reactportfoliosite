import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import profile from "./profile_photo.jpg";

class Nav extends Component {
  render() {
    return (
      <div className="navBar">
        <div className="dropDown">
          <button className="dropbtn">
            <div className="text">|||</div>
            <i class="fa fa-caret-down"></i>
          </button>
          <div className="dropdownContent">
            <div className="split left">
              <div className="profilePic">
                <img src={profile} />
              </div>
            </div>
            <div className="split right">
              <a href="/">Home</a>
              <a href="/about">About Me</a>
              <a href="/projects">Projects</a>
              <a href="/contact">Contact Info</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;

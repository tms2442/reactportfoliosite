import React, { Component } from "react";
import Res from "./Thomas_Slezak_Resume.png";
import "./Resume.css";

class Fullres extends Component {
  render() {
    return (
      <div className="respage">
        <img src={Res} />
      </div>
    );
  }
}

export default Fullres;

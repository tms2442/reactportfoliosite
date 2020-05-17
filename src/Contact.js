import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contactHead">
          <h1>How to reach me</h1>
        </div>
        <div className="groupCon">
          <div className="email">
            <p>Email: tmslezak24@gmail.com</p>
          </div>
          <div className="phone">
            <p>Phone: (630) 536-9312</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

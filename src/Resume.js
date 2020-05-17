import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import "./index.css";

class Resume extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
      // <div className="resMain">
      //   <Nav />
      //   <Home />
      // </div>
    );
  }
}

export default Resume;

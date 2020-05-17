import React, { Component } from "react";
import nursing from "./Screen Shot 2020-05-17 at 1.44.02 PM.png";
import course from "./Screen Shot 2020-05-17 at 3.19.48 PM.png";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <h1 className="projHead">Projects</h1>
        <div className="nursingCont">
          <h4>Nursing Internship Management Tool</h4>
          <div className="projContainer">
            <img src={nursing} className="image" />
            <div className="middleau">
              <a
                href="https://github.com/tms2442/AU-Nursing-Project"
                className="links"
              >
                GitHub Link
              </a>
            </div>
          </div>
          <p>
            Alongside a team of three members and I, we successfully created an
            internship Management tool for the Aurora University nursing
            departement. The goal of the project was to create a web app that
            allows the head of the nursing department to assign students to labs
            and clinicals in a fast and efficient way while also avoiding
            collisions in schedule conflicts.
          </p>
        </div>
        <div className="nursingCont">
          <h4>Course Trend Tracker</h4>
          <div className="projContainer">
            <img src={course} className="image" />
            <div className="middleau">
              <a
                href="https://github.com/tms2442/course-history-tracker"
                className="links"
              >
                GitHub Link
              </a>
            </div>
          </div>
          <p>
            The goal of this project was to create an application that would
            allow for the tracking of the amount of students taking CSC courses.
            This would help the staff get an idea of trends in the CSC
            department to help understand the growth in enrollment from semester
            to semester. This would allow them to be able to forcast future
            growth and better understand the amount and size of classes needed.
          </p>
        </div>
      </div>
    );
  }
}

export default Projects;

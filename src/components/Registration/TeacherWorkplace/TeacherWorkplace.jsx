import React, { Component } from "react";
import "./style.css";
import schoolImage from "../Pictures/school.jpg";
import higherEducationImage from "../Pictures/higher-education.jpg";
import schoolAdmistrationImage from "../Pictures/school-administration.jpg";
import businessImage from "../Pictures/business.jpg";

class TeacherWorkplace extends Component {
  render() {
    return (
      <>
        <h1 style={{ color: "wheat", textAlign: "center" }}>
          Choose Your Workplace
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="single-content">
                <img src={schoolImage} alt="" />
                <div className="text-content">
                  <h4>School</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-content">
                <img src={higherEducationImage} alt="" />
                <div className="text-content">
                  <h4>Higher Education</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-content">
                <img src={schoolAdmistrationImage} alt="" />
                <div className="text-content">
                  <h4>School Administration</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-content">
                <img src={businessImage} alt="" />
                <div className="text-content">
                  <h4>Business</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TeacherWorkplace;

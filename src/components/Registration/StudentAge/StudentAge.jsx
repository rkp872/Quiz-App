import React, { Component } from "react";
import "./style.css";
import childImage from "../Pictures/child.jpg";
import boyImage from "../Pictures/boy.jpg";
import girlImage from "../Pictures/girl.jpg";
import womenImage from "../Pictures/woman.jpg";

export default class StudentAge extends Component {
  render() {
    return (
      <>
        <h1 style={{ color: "wheat", textAlign: "center" }}>
          Choose Your Age Group
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="single-content">
                <img src={childImage} alt="" />
                <div className="text-content">
                  <h4>7-12 Years</h4>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="single-content">
                <img src={boyImage} alt="" />
                <div class="text-content">
                  <h4>13-16 Years</h4>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="single-content">
                <img src={girlImage} alt="" />
                <div class="text-content">
                  <h4>17-18 Years</h4>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="single-content">
                <img src={womenImage} alt="" />
                <div class="text-content">
                  <h4>Above 18 Years</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

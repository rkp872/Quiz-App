import React, { Component } from "react";
import "./style.css";

class UserType extends Component {
  render() {
    return (
      <>
        <div className="main-container">
          <h1 style={{ color: "wheat" }}>Choose Your Account Type</h1>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="box-item col-md-4">
                <div className="flip-box">
                  <div className="flip-box-front text-center teacher-image">
                    <div className="inner color-white">
                      <h3 className="flip-box-header">Teacher</h3>
                      <img
                        src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                        alt=""
                        className="flip-box-img"
                      />
                    </div>
                  </div>
                  <div className="flip-box-back text-center teacher-image">
                    <div className="inner color-white">
                      <p>
                        "The mediocre teacher tells. The good teacher explains.
                        The superior teacher demonstrates. The great teacher
                        inspires."
                        <br />
                        <br />― William Arthur Ward
                      </p>
                      <a href="/" className="flip-box-button">
                        Sign Up
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box-item col-md-4">
                <div className="flip-box">
                  <div className="flip-box-front text-center student-image ">
                    <div className="inner color-white">
                      <h3 className="flip-box-header">Student</h3>
                      <img
                        src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                        alt=""
                        className="flip-box-img"
                      />
                    </div>
                  </div>
                  <div className="flip-box-back text-center student-image ">
                    <div className="inner color-white">
                      <p>
                        “Education is the passport to the future, for tomorrow
                        belongs to those who prepare for it today.”
                        <br />
                        <br /> — Malcolm X
                      </p>
                      <a href="/" className="flip-box-button">
                        Sign Up
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserType;

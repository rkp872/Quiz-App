import React, { Component } from "react";
import "./style.css";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      terms: false,
      userType: this.props.location.user.userType,
    };
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    if (this.state.userType === "teacher") {
      this.props.history.push({
        pathname: "/teacher-workplace",
        data: this.state,
      });
    } else {
      this.props.history.push({
        pathname: "/student-age",
        data: this.state,
      });
    }
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="myCard">
            <div className="row justify-content-md-center">
              <div className="col">
                <div className="myLeftCtn">
                  <form
                    onSubmit={this.handleFormSubmit.bind(this)}
                    className="myForm text-center"
                  >
                    <header>Create new account</header>

                    <div className="form-group">
                      <i className="fas fa-envelope"></i>
                      <input
                        className="myInput"
                        placeholder="Email"
                        type="text"
                        id="email"
                        required
                        onChange={(e) => {
                          this.setState({ email: e.target.value });
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <i className="fas fa-lock"></i>
                      <input
                        className="myInput"
                        type="password"
                        id="password"
                        placeholder="Password"
                        required
                        onChange={(e) => {
                          this.setState({ password: e.target.value });
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        <input
                          id="check_1"
                          name="check_1"
                          type="checkbox"
                          required
                          onChange={(e) => {
                            this.setState({ terms: e.target.value });
                          }}
                        ></input>
                        <small> I read and agree to Terms & Conditions</small>
                        <div className="invalid-feedback">
                          You must check the box.
                        </div>
                      </label>
                    </div>

                    <button type="submit" className="glow-on-hover">
                      Welcome to QuizUp
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RegistrationForm;

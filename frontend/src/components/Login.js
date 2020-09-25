import React from "react";
import "./Login.css";

class Login extends React.Component {

  handleSubmitEvents = (event) => {
  } //add post request
  // handle submit events

  handleClearEvents = (events) => {
    events.preventDefault();
    document.getElementById("container-formid").reset();
  }
  //handle clear form

  render() {
    return (
      <div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <form className="container-form" id="container-formid">
            <p className="container-username">
                <label className="container-username-label">Login : {""}<input className="username-field" type="text" name="username" /></label>
            </p>
            <p className="container-password">
                <label className="container-password-label">Password : {""}<input className="password-field" type="password" name="password" ></input></label>
            </p>
            <p className="container-remember">
                <label className="container-remember-label">Remember Me {""}</label><input className="remember-field" type="checkbox" name="checkbox"></input>
            </p>
            <button className="submit-button" style={{ float: "right" }} onClick={this.handleSubmitEvents} type="button"> Login</button>
            <button className="clear-button" style={{ float: "right" }} onClick={this.handleClearEvents}type="button">Clear</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

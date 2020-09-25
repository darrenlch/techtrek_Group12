import React from "react";
import "./Login.css";

class Login extends React.Component {
  handleSubmitevents(event) {
    // handle submit events
  }

  handlePasswordChange(event) {
    //handle password change events
  }

  render() {
    return (
      <div>
        <div>
          <form className="container-form">
            <p className="container-username">
              <label className="container-username-label">
                Login : {""}
                <input type="text" name="username" />
              </label>
            </p>
            <p className="container-password">
              <label className="container-password-label">
                Password : {""}
                <input type="password" name="password"></input>
              </label>
            </p>
            <p className="container-remember">
              <label className="container-remember-label">Remember Me?</label>
              <input type="checkbox"></input>
            </p>
            <button
              className="clear-button"
              style={{ float: "right" }}
              onSubmit={() => console.log("test")}
            >
              Clear
            </button>
            <button
              className="submit-button"
              style={{ float: "right" }}
              onSubmit={() => console.log("test")}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

import React from "react";
import "./Login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="container-login">
        <div>
          <form className="container-login">
            <label>
              Login :
              <input className="loginUsername" type="text" name="username" />
            </label>
            <label>
              Password :
              <input
                className="loginPassword"
                type="password"
                name="password"
              ></input>
            </label>
            <label>Remember Me?</label>
            <input type="checkbox"></input>

            <button onSubmit={console.log("Submitted")}>Clear</button>
            <button onSubmit={console.log("Submitted")}>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

import React from "react";
import "./Login.css";
import {withRouter} from 'react-router-dom';

class Login extends React.Component {

    constructor(props){
        super();
        
    }

    componentDidMount(){
        console.log("Login mounted");
        this.props.handleLogin();
    }

  handleSubmitEvents = (event) => {
      this.props.history.push('/main');
  } //add post request
  // handle submit events

  handleClearEvents = (events) => {
    events.preventDefault();
    //document.getElementById("container-form").reset();
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
          <form className="container-form">
            <p className="container-username">
                <label className="container-username-label">Login : {""}<input type="text" name="username" /></label>
            </p>
            <p className="container-password">
                <label className="container-password-label">Password : {""}<input className="password-field" type="password" name="password" ></input></label>
            </p>
            <p className="container-remember">
                <label className="container-remember-label">Remember Me?</label><input className="username-field" type="checkbox"></input>
            </p>
            <button className="submit-button" style={{ float: "right" }} onClick={this.handleSubmitEvents.bind(this)} type="button"> Login</button>
            <button className="clear-button" style={{ float: "right" }} onClick={this.handleClearEvents}type="button">Clear</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);

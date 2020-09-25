import React from "react";
import "./Login.css";
import {withRouter} from 'react-router-dom';

class Login extends React.Component {

    constructor(props){
        super();
        
    }

    componentDidMount(){
        console.log("Login mounted");
        
    }

  handleSubmitEvents = (event) => {
      this.props.handleLogin();
      this.props.history.push('/main');   
  }
  // handle submit events

  handleClearEvents = (events) => {
    events.preventDefault();
    document.getElementById("container-formid").reset();
  }
  //handle clear form

  render() {
    return (
      <div>
            <div className = "main-form-container">
                <form id="container-formid">
                    <div className ="form-group">
                        <label>Login : {""}<input className="form-control" type="text" name="username" /></label>
                    </div>
                    <div className ="form-group">
                        <label>Password : {""}<input className="form-control" type="password" name="password" ></input></label>
                    </div>
                    <div className = "form-group">
                        <input className="form-check-input ml-3" type="checkbox" name="checkbox"></input>
                        <label className = "ml-5">Remember Me {""}</label>
                    </div>
                        <button className="btn btn-primary mr-3 ml-4"  onClick={this.handleClearEvents}type="button">Clear</button>
                        <button className="btn btn-success"  onClick={this.handleSubmitEvents} type="button"> Login</button>
                </form>
            </div>
             
          {/* <form className="container-form" id="container-formid">
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
          </form> */}
      </div>
    );
  }
}

export default withRouter(Login);

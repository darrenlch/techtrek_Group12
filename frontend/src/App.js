import React from 'react';
import './App.css';
import Login from  './components/Login.js';
import MainPage from  './components/MainPage.js';
import EditCustomer from  './components/EditCustomer.js';
import AddCustomer from  './components/AddCustomer.js';
import Navbar from './components/Navbar.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component{

  constructor(props){
    super();
    this.state = {
      isLogged: false
    }

    console.log("Calledin app constructor");
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
   
  }

  componentDidMount(){
    // For checking login state
    // setInterval(()=>{
    //   console.log(this.state.isLogged);
    // },1000);
  }

  handleLogin(){
    console.log("testing login");
    this.setState({
      isLogged: true
    },()=>{
      console.log(this.state);
    })
  }

  handleLogout(){
    console.log("Logout called");
    this.setState({
      isLogged:false
    })
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Navbar handleLogout = {this.handleLogout}/>
          <Switch>
            <Route path = '/' exact><Login handleLogin = {this.handleLogin}/></Route>
            <ProtectedRoute path = '/main' user = {this.state.isLogged} component={MainPage}></ProtectedRoute>
            <Route path = '/customers/edit'><EditCustomer/></Route>
            <Route path = '/customers/add'><AddCustomer/></Route>
          </Switch> 
        </Router>
       
      </div>
    );
  }
 
}

export default App;

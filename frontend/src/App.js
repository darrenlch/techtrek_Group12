import React from 'react';
import './App.css';
import Login from  './components/Login.js';
import MainPage from  './components/MainPage.js';
import EditCustomer from  './components/EditCustomer.js';
import AddCustomer from  './components/AddCustomer.js';
import Navbar from './components/Navbar.js';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route path = '/' exact><Login/></Route>
          <Route path = '/main'><MainPage/></Route>
          <Route path = '/customers/edit'><EditCustomer/></Route>
          <Route path = '/customers/add'><AddCustomer/></Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;

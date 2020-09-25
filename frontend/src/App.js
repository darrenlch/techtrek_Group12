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

function App() {

  const [isLogged, setLogState] = useState(false);

  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route path = '/' exact><Login/></Route>
          <ProtectedRoute path = '/main' user = {isLogged} component={MainPage}></ProtectedRoute>
          <Route path = '/customers/edit'><EditCustomer/></Route>
          <Route path = '/customers/add'><AddCustomer/></Route>
        </Switch> 
      </Router>
     
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Login from  './components/Login.js';
import MainPage from  './components/MainPage.js';
import EditCustomer from  './components/EditCustomer.js';
import AddCustomer from  './components/AddCustomer.js';

function App() {
  return (
    <div className="App">
      <Login/>
      <MainPage/>
      <EditCustomer/>
      <AddCustomer/>
    </div>
  );
}

export default App;

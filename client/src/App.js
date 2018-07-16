import React, { Component } from 'react';
//import logo from './logo.svg';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
        <header className="App-header">
     <img src="{logo}" className="App-logo" alt="NJ" />
          <h1 className="App-title">Welcome to NJ Global Solutions</h1>
        </header>*/}
      <AppNavbar/>
      </div>
    );
  }
}

export default App;

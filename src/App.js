import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Splash from './components/splash/Splash';
import Nav from './components/nav/Nav';


export default class App extends Component {
  render(){
  return (
      <div className="App">
        <Nav />
        <Splash />
      </div>
  );
  }
}

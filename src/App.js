import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Splash from './components/splash/Splash';


export default class App extends Component {
  render(){
  return (
      <div className="App">
        <Header />
        <Splash />
      </div>
  );
  }
}

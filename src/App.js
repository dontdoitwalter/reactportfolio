import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Splash from './components/splash/Splash';
import Nav from './components/nav/Nav';
import Projects from './components/projects/Projects';
import ContactMe from './components/contact/ContactMe';


export default class App extends Component {
  render(){
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route exact path='/'><Splash /></Route>
            <Route exact path='/projects'><Projects /></Route>
            <Route exact path='/contact'><ContactMe /></Route>
          </Switch>
      </div>
    </Router>
  );
  }
}

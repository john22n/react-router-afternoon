import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Home from './components/Home/Home';


class App extends Component {

  render() {
    return (

      <div className="App">
          <Nav/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about/:id" component={About}/>
          </Switch>
      </div>

    );
  }
}

export default App;




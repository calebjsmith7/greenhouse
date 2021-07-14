import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Lowermenu from './components/Lowermenu';

class App extends Component {
  render() {
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar />
            <div>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/contact' component={Contact} />
                </Switch>
            </div>
          <Lowermenu />
        </div>
      </Router>
    );
  }
}

export default App;

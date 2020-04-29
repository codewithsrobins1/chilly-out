import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import WeatherApp from './WeatherApp';
import ErrorPage from './ErrorPage'

import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';

//CSS Styles
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/weather" component={WeatherApp} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;


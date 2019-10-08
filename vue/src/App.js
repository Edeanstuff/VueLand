import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import AboutUs from './components/AboutUs';

import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Header} />
          <Route exact path='/private' component={AboutUs} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}
//<Route exact path='/header' component={} />
export default App;

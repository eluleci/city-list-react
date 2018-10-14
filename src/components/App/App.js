import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import CityListPage from '../CityListPage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact={true} path="/:column" component={CityListPage} />
          <Route exact={true} path="/" component={CityListPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

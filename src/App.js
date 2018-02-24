import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Main from "./main/Main";
import NotFound from "./NotFound";
import './App.css';

class App extends Component {
  render() {
    // console.log('API key:', process.env.REACT_APP_TMDB_API_KEY);
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;

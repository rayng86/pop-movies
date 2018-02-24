import React, { Component } from 'react';
import Header from "./header/Header";
import Main from "./main/Main";
import './App.css';

class App extends Component {
  render() {
    console.log('API key:', process.env.REACT_APP_TMDB_API_KEY);
    return (
      <div className="App">
       <Header />
       <Main />
      </div>
    );
  }
}

export default App;

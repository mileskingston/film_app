import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h1 className="app__title">Welcome to React</h1>
        </header>

        <form>
          <input type="text" className="app__form-control"/>
          <button type="button" className="app__btn"></button>
        </form>

        <section>
          
        </section>
      </div>
    );
  }
}

export default App;

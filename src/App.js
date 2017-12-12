import React, { Component } from 'react';
import axios from 'axios';
import Films from './Films';
import logo from './images/logo.svg';
import searchIcon from './images/search.svg';

import mockData from './mock-data.json';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: {},
      value: ' '
    };

    this.findFilm = this.findFilm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if(event.target.value.length > 1) {
      this.setState({
        value: event.target.value
      });
    }

    return;
  }

  findFilm(event) {
    event.preventDefault();

    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=65a08ce009e24e9aa54e97af25a56861&language=en-UK&query=${this.state.value}&page=1&include_adult=false`)
      .then(res => this.setState({ results: res }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />

          <form className="app__form" onSubmit={e => this.findFilm(e)}>
            <input
              type="text"
              className="app__form-control"
              minLength="2"
              value={this.state.value}
              onChange={this.handleChange}
              required
            />
            <button type="button" className="app__btn" onClick={e => this.findFilm(e)}>
              <img src={searchIcon} alt="logo" width="25" />
            </button>
          </form>
        </header>

        <section className="app__search-results">
        </section>

        <section className="app__messages" style={{ display: 'none' }}>          
          <div className="app__message message--error">Search for a film</div>
          <div className="app__message message--success">Search for a film</div>
          <div className="app__message message--info">Search for a film</div>
        </section>

        <section>
          <Films data={mockData} />
        </section>
      </div>
    );
  }
}

export default App;

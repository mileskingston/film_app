import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

import mockData from './mock-data.json';

import logo from './images/logo.svg';
import searchIcon from './images/search.svg';

import './Header.css';

class Header extends PureComponent {
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
      <header className="app__header">
        <Link to="/">
          <img src={logo} className="app__logo" alt="logo" />
        </Link>

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
            <img src={searchIcon} alt="search icon" width="25" />
          </button>
        </form>
      </header>
    );
  }
}

Header.displayName = 'Header';

Header.propTypes = {
};

Header.defaultProps = {
};

export default Header;
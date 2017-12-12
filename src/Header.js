import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from './images/logo.svg';
import searchIcon from './images/search.svg';

import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <header className="app__header">
        <Link to="/">
          <img src={logo} className="app__logo" alt="logo" />
        </Link>

        <form className="app__form">
          <input type="text" className="app__input"/>
          <button type="button" className="app__btn">
            <img src={searchIcon} alt="search icon" />
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

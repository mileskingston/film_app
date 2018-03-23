import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';

import './Header.css';

function Header(props) {
  return (
    <header className="app__header">
      <Link to="/">
        <h1 className="app__logo"><span>MY</span>FilmDb</h1>
      </Link>
      
      {props.showSearch ? 
        (
          <SearchBox handleClick={props.handleClick} />
        ) : (
          <Link to="/" className="app__btn btn--secondary app__btn--back">Back</Link>
        )
      }
    </header>
  );
}

Header.displayName = 'Header';

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  showSearch: PropTypes.bool
};

Header.defaultProps = {
  showSearch: true
};

export default Header;

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import logo from './images/logo.svg';
import searchIcon from './images/search.svg';

import './Header.css';

class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = ({
      searchValue: ''
    });

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    const {props, state} = this;

    return (
      <header className="app__header">
        <Link to="/">
          <img src={logo} className="app__logo" alt="logo" />
        </Link>

        <form className="app__form" onSubmit={e => props.handleClick(e, state.searchValue)}>
          <input
            type="text"
            className="app__input"
            onChange={this.handleChange}
            required
          />
          <button type="button" className="app__btn" onClick={e => props.handleClick(e, state.searchValue)}>
            <img src={searchIcon} alt="search icon" width="25" />
          </button>
        </form>
      </header>
    );
  }
}

export default Header;

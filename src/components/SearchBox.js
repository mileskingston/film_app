import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import searchIcon from '../images/search.svg';

import './SearchBox.css';

class SearchBox extends PureComponent {
  constructor(props) {
    super(props);

    this.state = ({
      searchVal: ''
    });

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchVal: e.target.value
    })
  }

  handleClick(e, searchVal) {
    this.props.handleClick(e, this.state.searchVal);
    this.setState({ searchVal: '' });
  }

  render() {
    const { state } = this;

    return (
      <form className="app__form app__form--search-box" noValidate onSubmit={e => this.handleClick(e, state.searchVal)}>
        <input
          type="text"
          className="app__input"
          value={state.searchVal}
          onChange={this.handleChange}
          required
        />
        <button type="button" className="app__btn" onClick={e => this.handleClick(e, state.searchVal)}>
          <img src={searchIcon} alt="search icon" width="25" />
        </button>
      </form>
    );
  }
}

SearchBox.displayName = 'SearchBox';

SearchBox.propTypes = {
  handleClick: PropTypes.func
};

SearchBox.defaultProps = {
  handleClick: () => {}
};

function mapStateToProps(state) {
  return {
    id: state.id,
    hasSubmitted: state.hasSubmitted
  }
}

export default connect(mapStateToProps)(SearchBox);
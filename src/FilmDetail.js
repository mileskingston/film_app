import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './FilmDetail.css';

class FilmDetail extends Component {
  render() {
    const {props} = this;

    return (
      <div className="app__film__detail">
        <h1>FilmDetail</h1>

        <Link to="/">Back</Link>
      </div>
    );
  }
}

FilmDetail.displayName = 'FilmDetail';

FilmDetail.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string
  })
};

FilmDetail.defaultProps = {
};

export default FilmDetail;

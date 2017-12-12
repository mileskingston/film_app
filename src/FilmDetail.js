import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import { Link } from 'react-router-dom';

// import './FilmDetail.css';

class FilmDetail extends Component {
  render() {
    const {props} = this;

    return (
      <div className="app__film__full">
        FilmDetail

        <Link to="/">Back</Link>
      </div>
    );
  }
}

FilmDetail.displayName = 'FilmDetail';

FilmDetail.propTypes = {
};

FilmDetail.defaultProps = {
};

export default FilmDetail;

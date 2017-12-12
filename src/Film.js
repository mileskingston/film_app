import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from './Rating';

import './Film.css';

class Film extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;
    const titleDecoded = props.title.toLowerCase().replace(/ /g, '-');

    return (
      <div className="app_film">
        <Link to={`/film/${titleDecoded}`}>
          <img src={props.poster} alt={`${props.title} film poster`} />
          <div className="film_content">
            <h3>{props.title}</h3>
            <Rating rating={props.vote_average} count={props.vote_count} />
          </div>
        </Link>
      </div>
    );
  }
}

Film.displayName = 'Film';

Film.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

Film.defaultProps = {
};

export default Film;
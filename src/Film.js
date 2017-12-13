import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import placeholder from './images/film-poster.jpg';

import './Film.css';

/** 
 * TODO:
 * replace any special characters
*/

class Film extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;
    const titleDecoded = props.film.title.toLowerCase().replace(/ /g, '-').replace(':', '');
    const renderImage = props.film.poster_path ? 
      `http://image.tmdb.org/t/p/w154/${props.film.poster_path}`
      : placeholder;

    return (
      <div className="app_film">
        <Link to={`/film/${titleDecoded}`}>
          <img
            src={renderImage}
            alt={`${props.film.title} film poster`} 
          />
          <div className="film_content">
            <h3>{props.film.title}</h3>
            {props.film.vote_average > 0 &&
              <Rating rating={props.film.vote_average} count={props.film.vote_count} />
            }
          </div>
        </Link>
      </div>
    );
  }
}

Film.displayName = 'Film';

Film.propTypes = {
  film: PropTypes.shape({

  }).isRequired
};

Film.defaultProps = {
};

export default Film;
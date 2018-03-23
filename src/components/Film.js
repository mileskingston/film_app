import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFilm, fetchFilmIds, fetchFilmCredits } from '../actions/index';
import constants from '../constants';

import Rating from './Rating';

import './Film.css';

class Film extends PureComponent {
  constructor(props) {
    super(props);

    this.getFilm = this.getFilm.bind(this);
  }

  getFilm() {
    this.props.fetchFilm(this.props.film.id);
    this.props.fetchFilmIds(this.props.film.id);
    this.props.fetchFilmCredits(this.props.film.id);
  }

  render() {
    const { props } = this;
    const titleDecoded = props.film.title.toLowerCase().replace(/[^a-zA-Z0-9']+/g, '-').replace(/[']+/g, '');
    const renderImage = props.film.poster_path ? 
      `${constants.IMG_BASE}w300/${props.film.poster_path}`
      : 'http://via.placeholder.com/300x450';

    return (
      <div className="app_film">
         <Link to={`/film/${titleDecoded}`} onClick={this.getFilm}> 
          <img
            src={renderImage}
            alt={`${props.film.title} film poster`} 
          />
          <div className="film_content">
            <h3>{props.film.title}</h3>
            {props.film.vote_average > 0 &&
               <Rating
                rating={props.film.vote_average}
                count={props.film.vote_count}
                showTotal={true} 
              /> 
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
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    genre_id: PropTypes.arrayOf(
      PropTypes.string
    ),
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview:  PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    video: PropTypes.bool,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number
  }).isRequired
};

function mapStateToProps(state) {
  return {
    filmDetail: state.film,
    filmIds: state.filmIds,
    filmCredits: state.filmCredits
  }
}

export default connect(mapStateToProps,{fetchFilm, fetchFilmIds, fetchFilmCredits})(Film);
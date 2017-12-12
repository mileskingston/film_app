import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from './Rating';

// import './FilmSearch.css';
import filmPoster from './images/film-poster.jpg';

const product = {
  title: 'House of Cards',
  poster_path: filmPoster,
  rating: {
    score: 9.3,
    total: 300
  }
};

function FilmSearch(props) {
  const film = product.title.toLowerCase().replace(/ /g, '-');

  return (
    <section>
      <h2>Lastest films</h2>

      <div className="app__films">
        <div className="app__film">
          <Link to={`/film/${film}`}>
            <img src={product.poster_path} alt={product.title} />
            <h3>{product.title}</h3>
            {Rating &&
              <Rating rating={product.rating} />
            }
          </Link>
        </div>            
      </div>
    </section>
  );
}

FilmSearch.displayName = 'FilmSearch';

FilmSearch.propTypes = {
};

FilmSearch.defaultProps = {
};

export default FilmSearch;

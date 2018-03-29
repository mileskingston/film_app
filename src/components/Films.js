import React from 'react';
import PropTypes from 'prop-types';
import Film from './Film';

import './Films.css';

function Films(props) {
  let renderFilm;

  if (props.results) {
    renderFilm = props.results.map((film, i) =>
      <Film key={film.id} film={film} />
    )
  }

  return (
    <div className="app__films">
      {renderFilm}
    </div>
  );
}

Films.displayName = 'Films';

Films.propTypes = {
  results: PropTypes.array.isRequired
};

export default Films;
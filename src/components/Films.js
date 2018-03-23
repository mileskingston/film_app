import React from 'react';
import PropTypes from 'prop-types';
import Film from './Film';

import './Films.css';

function Films(props) {
  let renderFilm;
  
  if (props.results.data) {
    renderFilm = props.results.data.results.map((film, i) =>
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
  results: PropTypes.shape({}).isRequired
};

export default Films;
import React from 'react';
import PropTypes from 'prop-types';
import mockData from './mock-data.json';
import Films from './Films';

import './FilmSearch.css';

import filmPoster from './images/film-poster.jpg';

function FilmSearch(props) {

  return (
    <section>
      <Films title="Latest films" data={mockData} />
    </section>
  );
}

FilmSearch.displayName = 'FilmSearch';

FilmSearch.propTypes = {
};

FilmSearch.defaultProps = {
};

export default FilmSearch;

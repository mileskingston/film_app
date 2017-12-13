import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Film from './Film';

import './Films.css';

class Films extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let renderFilm;
    const { props } = this;

    if (props.results.data) {
      renderFilm = props.results.data.results.map((film, i) =>
        <Film key={film.id} film={film} />
      )
    }

    return (
      <div className="app_films">
        <h3 className="app_films_title">{props.title}</h3>
        {renderFilm}
      </div>
    );
  }
}

Films.displayName = 'Films';

Films.propTypes = {
  title: PropTypes.string,
  results: PropTypes.shape({
    
  })
};

Films.defaultProps = {
  title: null
};

export default Films;
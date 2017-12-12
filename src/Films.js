import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Film from './Film';

import './Films.css';

class Films extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;

    return (
      <div className="app_films">
        <h2 className="app_films_title">Most Popular</h2>
        {props.data.results.map((film, i) =>
          <Film
            key={i}
            title={film.title}
            poster={`http://image.tmdb.org/t/p/w185//${film.poster_path}`}
          />
        )}
      </div>
    );
  }
}

Films.displayName = 'Films';

Films.propTypes = {
};

Films.defaultProps = {
};

export default Films;
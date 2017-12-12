import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Film.css';

class Film extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;

    return (
      <div className="app_film">
        <img src={props.poster} alt={`${props.title} film poster`} />
        <div className="film_content">
          <h3>{props.title}</h3>
          <div className="rating"></div>
        </div>
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
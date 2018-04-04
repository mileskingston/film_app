import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import './LazyLoadImage.css';

class LazyLoadImage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    const newImage = document.createElement('img');

    newImage.src = this.props.src;

    newImage.onload = () => {
      this.setState({ loaded: true });
    };
  }

  render() {
    const { props, state } = this;

    return (
      <div className="lazy-load-image">
        <img
          src={props.src}
          alt={props.alt}
          className={`lazy-load-image__img ${state.loaded ? 'is--fade-in' : 'is--hidden'}`}
        />
        <img
          src={props.placeholder}
          alt="placeholder image"
          className={`lazy-load-image__img ${state.loaded ? 'is--fade-out' : ''}`}
        />
      </div>
    );
  }
}

LazyLoadImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  backgroundImage: PropTypes.bool
};

LazyLoadImage.defaultProps = {
  alt: '',
  backgroundImage: false
};

export default LazyLoadImage;

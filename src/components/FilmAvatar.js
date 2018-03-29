import React, { Component } from 'react';
import constants from '../constants';
import PropTypes from 'prop-types';
import placeholder from '../images/placeholder-avatar.svg';

import './FilmAvatar.css';

class FilmAvatar extends Component {
  render() {
    const {props} = this;
    const renderImage = props.data.profile_path ? 
      `${constants.IMG_BASE}w138_and_h175_face${props.data.profile_path}`
      : placeholder;

    return (
      <div className="app__col app__film__avatar">
        <img
          src={renderImage}
          alt={props.data.name}
        />

        <h4>{props.data.name}</h4>
        
        {props.data.character &&
          <p>{props.data.character}</p>
        }

        {props.data.job &&
          <p>{props.data.job}</p>
        }
      </div>
    );
  }
}  

FilmAvatar.displayName = 'FilmAvatar';

FilmAvatar.propTypes = {
  data: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string,
    job: PropTypes.string
  }).isRequired
};

export default FilmAvatar;

import React from 'react';
import PropTypes from 'prop-types';
import LazyLoadImage from '../LazyLoadImage/LazyLoadImage';
import constants from '../../constants';
import placeholder from '../../images/placeholder-avatar.svg';

import './Profile.css';

function Profile(props) {
  const renderImage = props.data.profile_path ? 
    `${constants.IMG_BASE}w138_and_h175_face${props.data.profile_path}`
    : placeholder;
  // const renderImage = placeholder;

  function renderRole() {
    if (props.data.job) {
      return (
        <p>{props.data.job}</p>
      );
    } else if (props.data.character) {
      return (
        <p>{props.data.character}</p>
      );
    } else {
      return;
    }
  }

  return (
    <div className="col profile">
      <LazyLoadImage
        src={renderImage}
        alt={props.data.name}
        placeholder={placeholder}
      />

      <h4>{props.data.name}</h4>
      { renderRole() }
    </div>
  );
} 

Profile.displayName = 'Profile';

Profile.propTypes = {
  data: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string,
    job: PropTypes.string
  }).isRequired
};

export default Profile;

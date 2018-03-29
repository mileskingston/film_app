import React from 'react';
import PropTypes from 'prop-types';

import './SocialLink.css';

function SocialLink(props) {
  return (
    <a
      className="app__social-link"
      target="_blank"
      href={props.href}
    >
      <img src={props.src} alt={props.alt} />
    </a>
  );
}

SocialLink.displayName = 'SocialLink';

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default SocialLink;
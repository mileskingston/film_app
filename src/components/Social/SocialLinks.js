import React from 'react';
import PropTypes from 'prop-types';
import facebook from '../../images/i-facebook.svg';
import twitter from '../../images/i-twitter.svg';
import imdb from '../../images/i-imdb.svg';
import instagram from '../../images/i-instagram.svg';

import SocialLink from './SocialLink';

function SocialLinks(props) {
  
  function renderLink(key, href, src, alt) {
    return (
      <SocialLink 
        key={key}
        href={href}
        src={src}
        alt={alt}
      />
    );
  }

  const renderedLinks = Object.keys(props.links).map((key) => {
    const value = props.links[key];

    if (value !== null || isNaN(value)) {
      switch(key) {
        case 'imdb_id':
          return (
            renderLink(key, `http://www.imdb.com/title/${value}`, imdb, 'imdb icon')
          );
        case 'twitter_id':
          return (
            renderLink(key, `https://www.twitter.com/${value}`, twitter, 'twitter icon')
          );
        case 'facebook_id':
          return (
            renderLink(key, `https://www.facebook.com/${value}`, facebook, 'facebook icon')
          );
        case 'instagram_id':
          return (
            renderLink(key, `https://www.instagram.com/${value}`, instagram, 'instagram icon')
          );
        default:
          return;
      }
    }
  });

  return (
    <div className="social">
      {renderedLinks}
    </div>
  );    
}

SocialLinks.displayName = 'SocialLinks';

SocialLinks.propTypes = {
  links: PropTypes.shape({}).isRequired
};

export default SocialLinks;
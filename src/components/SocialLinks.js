import React from 'react';
import PropTypes from 'prop-types';
import facebook from '../images/i-facebook.svg';
import twitter from '../images/i-twitter.svg';
import imdb from '../images/i-imdb.svg';
import instagram from '../images/i-instagram.svg';

import SocialLink from './SocialLink';

function SocialLinks(props) {
    const renderedLinks = Object.keys(props.links).map((key) => {
      const value = props.links[key];

      if (value !== null || isNaN(value)) {
        switch(key) {
          case 'imdb_id':
            return (
              <SocialLink
                key={key}
                href={`http://www.imdb.com/title/${value}`}
                src={imdb}
                alt="imdb icon"
              />
            );
          case 'twitter_id':
            return (
              <SocialLink
                key={key}
                href={`https://www.twitter.com/${value}`}
                src={twitter}
                alt="twitter icon" 
              />
            );
          case 'facebook_id':
            return (
              <SocialLink
                key={key}
                href={`https://www.facebook.com/${value}`}
                src={facebook}
                alt="facebook icon"
              />
            );
          case 'instagram_id':
            return (
              <SocialLink
                key={key}
                href={`https://www.instagram.com/${value}`}
                src={instagram}
                alt="instagram icon"
              />
            );
        }
      }
    });

    return (
      <div className="app__social">
        {renderedLinks}
      </div>
    );    
}

SocialLinks.displayName = 'SocialLinks';

SocialLinks.propTypes = {
  links: PropTypes.shape({}).isRequired
};

export default SocialLinks;
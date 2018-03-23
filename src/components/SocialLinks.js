import React from 'react';
import PropTypes from 'prop-types';
import './SocialLinks.css';
import facebook from '../images/i-facebook.svg';
import twitter from '../images/i-twitter.svg';
import imdb from '../images/i-imdb.svg';
import instagram from '../images/i-instagram.svg';

function SocialLinks(props) {
  return (
    <div className="app__sociallinks">
      {props.links.twitter_id &&
        <a
          className="app__sociallinks__link"
          target="_blank"
          href={`https://twitter.com/${props.links.twitter_id}`}
        >
          <img src={twitter} alt="twitter" />
        </a>
      }
      {props.links.instagram_id &&
        <a
          className="app__sociallinks__link"
          target="_blank"
          href={`https://www.instagram.com/${props.links.instagram_id}`}
        >
          <img src={instagram} alt="instagram" />
        </a>
      }
      {props.links.facebook_id &&
        <a
          className="app__sociallinks__link"
          target="_blank"
          href={`https://www.facebook.com/${props.links.facebook_id}`}
        >
          <img src={facebook} alt="facebook" />
        </a>
      }
      {props.links.imdb_id &&
        <a
          className="app__sociallinks__link"
          target="_blank"
          href={`http://www.imdb.com/title/${props.links.imdb_id}`}
        >
          <img src={imdb} alt="imdb" />
        </a>
      }
    </div>
  );
}

SocialLinks.displayName = 'SocialLinks';

SocialLinks.propTypes = {
  links: PropTypes.shape({}).isRequired
};

SocialLinks.defaultProps = {
};

export default SocialLinks;
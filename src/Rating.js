import React from 'react';
import PropTypes from 'prop-types';
import './Rating.css';

function Rating(props) {
  const classes = ['rating__score'];

  if (props.rating.score < 5) {
    classes.push('rating__score--low');
  } else if (props.rating.score > 6) {
    classes.push('rating__score--high');
  } else {
    classes.push('rating__score--mid');      
  }

  return (
    <div className="app__rating">
      <span className={classes.join(' ')}>{props.rating.score}</span>

      {props.showTotal &&
        <span className="rating__total">{props.rating.total}</span>
      }
    </div>
  );
}

Rating.displayName = 'Rating';

Rating.propTypes = {
  rating: PropTypes.shape({
    score: PropTypes.number,
    total: PropTypes.number
  }),
  showTotal: PropTypes.bool
};

Rating.defaultProps = {
  showTotal: false
};

export default Rating;

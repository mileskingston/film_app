import React from 'react';
import PropTypes from 'prop-types';
import './Rating.css';

function Rating(props) {
  const classes = ['rating__score'];

  if (props.rating < 5) {
    classes.push('rating__score--low');
  } else if (props.rating > 6) {
    classes.push('rating__score--high');
  } else {
    classes.push('rating__score--mid');      
  }

  return (
    <div className="app__rating">
      <span className={classes.join(' ')}>{props.rating}</span>

      {props.showTotal &&
        <span className="rating__total">{props.count}</span>
      }
    </div>
  );
}

Rating.displayName = 'Rating';

Rating.propTypes = {
  rating: PropTypes.number,
  count: PropTypes.number,
  showTotal: PropTypes.bool
};

Rating.defaultProps = {
  showTotal: false,
  rating: 0,
  count: 0
};

export default Rating;

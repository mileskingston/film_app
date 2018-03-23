import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Rating.css';
import starFull from '../images/star-full.svg';
import starHalf from '../images/star-half.svg';

class Rating extends PureComponent {
  renderStars() {
    const MAX_COUNT = 5;
    const hasHalfItem = this.props.rating % 2 !== 0;
    const value = Math.round((hasHalfItem ? this.props.rating - 1 : this.props.rating) / 2);
    const items = [];

    for (let i = 1; i <= MAX_COUNT; i++) {
      if (i <= value) {
        pushImage(starFull);         
      }

      if (hasHalfItem && (i - 1 === value)) {
        pushImage(starHalf, 'rating__star--half');
      }

      function pushImage(imgUrl, addClass) {
        items.push(
          <img 
            className={`${addClass} rating__star`}
            key={i}
            src={imgUrl}
            alt="star icon"
          />
        );
      }
    }

    return items;
  }

  render() {
    return (
      <div className="app__rating">
        {this.renderStars()}

        {this.props.showTotal &&
          <span className="rating__total">({this.props.count})</span>
        }
      </div>
    );
  }
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

import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';
import nextBtn from '../images/next-btn.svg';
import prevBtn from '../images/prev-btn.svg';

import './Pagination.css';

class Pagination extends PureComponent {
  render() {
    return (
      <div className="app__pagination">
        <button className="app__pagination__btn"><img src={prevBtn} alt="" /></button>
        <button className="app__pagination__btn"><img src={nextBtn} alt="" /></button>
      </div>
    );
  }
}

export default Pagination;


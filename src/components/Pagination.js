import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../actions/index';
import nextBtn from '../images/next-btn.svg';
import prevBtn from '../images/prev-btn.svg';

import './Pagination.css';

class Pagination extends PureComponent {
  getPage(val) {
    this.props.fetchSearchResults(this.props.searchVal, val);
    window.scrollTo(0, 0);
  }

  render() {
    const {props} = this;

    return (
      <div className="app__pagination">
        <button
          className={
            `app__pagination__btn
            ${props.currentPage === 1 ? 'app__pagination__btn--isHidden' : null}`
          }
          onClick={() => this.getPage(props.currentPage - 1)}
        >
          <img src={prevBtn} alt="" />
        </button>
        <button
          className={
            `app__pagination__btn 
            ${props.currentPage === props.total_pages ? 'app__pagination__btn--isHidden' : null}`
          }
          onClick={() => this.getPage(props.currentPage + 1)}
        >
          <img src={nextBtn} alt="" />
        </button>
      </div>
    );
  }
}

Pagination.displayName = 'Pagination';

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  total_pages: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  console.log(state);

  return {
    filmSearch: state.filmSearch,
    searchVal: state.searchVal
  }
}

export default connect(mapStateToProps, {fetchSearchResults})(Pagination);


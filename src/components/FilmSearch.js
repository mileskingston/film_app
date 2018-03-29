import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Films from './Films';
import Message from './Message';
import Pagination from './Pagination';

import './FilmSearch.css';

class FilmSearch extends PureComponent {

  render() {
    const { props } = this;

    return (
      <div className="app__row">
        <section className="app__col app__film-search">
          {props.results.total_results < 1
            && props.hasSubmitted
            && (
              <Message type="info" text="No films found, search again" />
            )
          }

          {props.results.results.length < 1
            && !props.hasSubmitted
            && (<Message type="info" text="Search for a film" />)
          }
          
          {props.results.total_results > 0 &&
            <div className="app__films__title">
              <h3>Results for "{props.searchVal}"</h3>
              <div className="app__films__title--totals">
                Page {props.results.page} of {props.results.total_pages} ({props.results.total_results} results)
              </div>
            </div>
          }

          {props.hasSubmitted &&
            (
              <Films results={props.results.results} />
            )
          }

          {props.results.total_results > 20 &&
            <Pagination total_pages={props.results.total_pages} currentPage={props.results.page} />
          }
        </section>
      </div>
    );
  }
}

FilmSearch.displayName = 'FilmSearch';

FilmSearch.propTypes = {
  path: PropTypes.object,
  page: PropTypes.number,
  total_pages: PropTypes.number,
  results: PropTypes.shape({
    page: PropTypes.number,
    results: PropTypes.array
  }).isRequired
};

function mapStateToProps(state) {
  return {
    hasSubmitted: state.hasSubmitted,
    searchVal: state.searchVal
  }
}

export default connect(mapStateToProps)(FilmSearch);


import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import Films from './Films';
import Message from './Message';
import Pagination from './Pagination';

import './FilmSearch.css';

class FilmSearch extends PureComponent {
  constructor(props) {
    super(props);

    this.state = ({
      latest: {}
    })
  }

  // componentWillMount() {
  //   axios
  //     .get('https://api.themoviedb.org/3/movie/popular?api_key=65a08ce009e24e9aa54e97af25a56861&language=en-US&page=1')
  //     .then(res => this.setState({ latest: res }))
  //     .catch(err => console.log(err))
  // }

  render() {
    const { props } = this;

    return (
      <div className="app__row">
        <section className="app__col app__film-search">
          {props.results.data.total_results < 1
            && props.hasSubmitted
            && (
              <Message type="info" text="No films found, search again" />
            )
          }

          {props.results.data.results.length < 1
            && !props.hasSubmitted
            && (<Message type="info" text="Search for a film" />)
          }
          
          {props.results.data.total_results > 0 &&
            <div className="app__films__title">
              <h3>Results for "{props.searchVal}"</h3>
              <div className="app__films__title--totals">
                Page {props.results.data.page} of {props.results.data.total_pages} ({props.results.data.total_results} results)
              </div>
            </div>
          }

          {props.hasSubmitted &&
            (
              <Films
                searchVal={props.searchVal}
                results={props.results}
              />
            )
          }

          {/* <section className="app__latest-films">
            <Films title="Most popular" results={state.latest} />
          </section> */}
          {props.results.data.total_results > 20 &&
            <Pagination />}
        </section>
      </div>
    );
  }
}

FilmSearch.displayName = 'FilmSearch';

FilmSearch.propTypes = {
  path: PropTypes.object,
  results: PropTypes.shape({
    data: PropTypes.shape({
      page: PropTypes.number,
      results: PropTypes.array
    })
  }).isRequired
};

function mapStateToProps(state) {
  return {
    hasSubmitted: state.hasSubmitted,
    searchVal: state.searchVal
  }
}

export default connect(mapStateToProps)(FilmSearch);


import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Films from './Films';

import './FilmSearch.css';

class FilmSearch extends PureComponent {
  constructor(props) {
    super(props);

    this.state = ({
      latest: {}
    })
  }

  componentWillMount() {
    axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=65a08ce009e24e9aa54e97af25a56861&language=en-US&page=1')
      .then(res => this.setState({ latest: res }))
      .catch(err => console.log(err))
  }

  render() {
    const { props, state } = this;

    return (
      <section className="app__film-search">
        {props.results.data &&
          <Films results={props.results} />
        }

        <section className="app__latest-films">
          <Films title="Most popular" results={state.latest} />
        </section>
      </section>
    );
  }
}

FilmSearch.displayName = 'FilmSearch';

FilmSearch.propTypes = {
  results: PropTypes.shape({})
};

FilmSearch.defaultProps = {
};

export default FilmSearch;

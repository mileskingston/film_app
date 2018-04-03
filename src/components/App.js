import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { fetchSearchResults } from '../actions/index';
import { connect } from 'react-redux';

import Header from './Header/Header';
import FilmDetail from './Film/FilmDetail';
import FilmSearch from './Film/FilmSearch';

import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.findFilm = this.findFilm.bind(this);
  }

  findFilm(e, val) {
    e.preventDefault();
    this.props.fetchSearchResults(val);
  }

  render() {
    return (
      <BrowserRouter>     
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Header handleClick={this.findFilm} />}
            />
            <Route
              path="/film/:filmTitle"
              render={() => <Header handleClick={this.findFilm} showSearch={false} />}
            />
          </Switch>

          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={() => <FilmSearch results={this.props.filmSearch} />}
              />
              <Route
                path="/film/:filmTitle"
                component={FilmDetail}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

App.displayName = 'App';

App.propTypes = {
  filmSearch: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
  return {
    hasSubmitted: state.hasSubmitted,
    filmSearch: state.filmSearch
  }
}

export default connect(mapStateToProps, {fetchSearchResults})(App);

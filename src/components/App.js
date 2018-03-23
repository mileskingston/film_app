import React, { PureComponent } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { addFilmSearch } from '../actions/index';
import { connect } from 'react-redux';

import Header from './Header';
import FilmDetail from './FilmDetail';
import FilmSearch from './FilmSearch';

import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      results: {
        data: {
          results: []
        },
      },
      searchVal: ' '
    };

    this.findFilm = this.findFilm.bind(this);
  }

  findFilm(e, val) {
    e.preventDefault();

    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=65a08ce009e24e9aa54e97af25a56861&language=en-US&query=`+ val +`&page=1&include_adult=false`)
      .then(res => {
        this.props.addFilmSearch(val);
        this.setState({
          results: res
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <BrowserRouter>        
        <div className="app">
          <Switch>
            <Route exact path="/" render={() => <Header handleClick={this.findFilm} />} />
            <Route path="/film/:filmTitle" render={() => <Header handleClick={this.findFilm} showSearch={false} />} />
          </Switch>

          <div className="app__container">
            <Switch>
              <Route exact path="/" render={() => <FilmSearch results={this.state.results} />} />
              <Route path="/film/:filmTitle" component={FilmDetail} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    films: state.films,
    hasSubmitted: state.hasSubmitted
  }
}

export default connect(mapStateToProps, {addFilmSearch})(App);

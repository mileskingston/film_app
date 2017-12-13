import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import FilmDetail from './FilmDetail';
import FilmSearch from './FilmSearch';

import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      results: {},
      value: ' '
    };

    this.findFilm = this.findFilm.bind(this);
  }

  findFilm(event, val) {
    event.preventDefault();

    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=65a08ce009e24e9aa54e97af25a56861&language=en-US&query=`+ val +`&page=1&include_adult=false`)
      .then(res => this.setState({ results: res }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Switch>        
        <div className="app">
          <Header
            handleClick={this.findFilm} 
            handleChange={this.handleChange} 
          />

          <div className="app__wrapper">
            <Route exact path="/" render={() => <FilmSearch results={this.state.results} />} />
            <Route path="/film" component={FilmDetail}/>
          </div>
        </div>
      </Switch>
    );
  }
}

export default App;

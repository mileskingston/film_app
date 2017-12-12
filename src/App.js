import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import FilmDetail from './FilmDetail';
import FilmSearch from './FilmSearch';

import './App.css';

function App() {
  return (
    <Switch>        
      <div className="app">
        <Header />

        <div className="app__wrapper">
          <Route exact path="/" component={FilmSearch}/>
          <Route path="/film" component={FilmDetail}/>
        </div>
      </div>
    </Switch>
  );
}

export default App;

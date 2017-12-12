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

        <section className="app__messages" style={{ display: 'none' }}>          
          <div className="app__message message--error">Search for a film</div>
          <div className="app__message message--success">Search for a film</div>
          <div className="app__message message--info">Search for a film</div>
        </section>

        <div className="app__wrapper">
          <Route exact path="/" component={FilmSearch}/>
          <Route path="/film" component={FilmDetail}/>
        </div>
      </div>
    </Switch>
  );
}

export default App;

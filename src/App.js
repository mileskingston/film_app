import React, { Component } from 'react';
import Rating from './Rating';
import logo from './images/logo.svg';
import searchIcon from './images/search.svg';
import filmPoster from './images/film-poster.jpg';
import './App.css';

const product = {
  title: 'House of Cards',
  poster_path: filmPoster,
  rating: {
    score: 9.3,
    total: 300
  }
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />

          <form className="app__form">
            <input type="text" className="app__input"/>
            <button type="button" className="app__btn">
              <img src={searchIcon} alt="search icon" />
            </button>
          </form>
          {/* <h1 className="app__title">Film search</h1> */}
        </header>

        <div className="wrapper">
          <section>
            <h2>Lastest films</h2>

            <div className="app__films">
              <div className="app__film">
                <img src={product.poster_path} alt={product.title} />
                <h3>{product.title}</h3>
                {Rating &&
                  <Rating rating={product.rating} />
                }
              </div>            
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;

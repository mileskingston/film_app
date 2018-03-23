import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/configureStore';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();

/** 
TODO:
* Home: latest slider
* Search: on failed search two messages show
* Search: placeholder image
* Search: pagination
* FilmDetail: conditions on backdrop and poster image
* FilmDetail: show correct info on page
* props on all components
* unit test all components
* Lazy loaded image component

Improvements
* Loader
* render speed
* svg sprite
* autocomplete searchbox
*/

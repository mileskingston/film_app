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
* create slider component
* unit test all components
* BEM naming refined
* props on all components

Improvements
* Loader
* render speed
* svg sprite
* autocomplete searchbox

Stage 2
* Lazy loaded image component
* Home: latest slider
* create actor/crew profiles
* advanced pagination
*/

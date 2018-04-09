import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import { shallow, mount, render } from 'enzyme';
import Film from './Film';
import configureStore from 'redux-mock-store';

describe('Film, ', () => {
  const mockStore = configureStore()
  const initialState = {
    searchVal: 'thor',
    hasSubmitted: true,
    filmDetail: {
      id: 340684,
      adult: false,
      backdrop_path: '/4WtidAAR0pQPEkJSzaSlLEI3WDx.jpg',
      genre_id: ['18', '10751'],
      original_language: 'en',
      original_title: 'Those People',
      overview: "On Manhattan's gilded Upper East Side, a young gay painter is torn between an obsession with his infamous best friend and a promising new romance with an older foreign pianist.",
      popularity: 4.875902,
      poster_path: '/akFZgps0INgWhSlLOnWgpKhoSL4.jpg',
      release_date: '2015-05-16',
      title: 'Those People',
      video: false,
      vote_average: 6.9,
      vote_count: 109
    }
  };
  const store = mockStore(initialState);
  const data = {
    filmDetail: {
      id: 340684,
      adult: false,
      backdrop_path: '/4WtidAAR0pQPEkJSzaSlLEI3WDx.jpg',
      genre_id: ['18', '10751'],
      original_language: 'en',
      original_title: 'Those People',
      overview: "On Manhattan's gilded Upper East Side, a young gay painter is torn between an obsession with his infamous best friend and a promising new romance with an older foreign pianist.",
      popularity: 4.875902,
      poster_path: '/akFZgps0INgWhSlLOnWgpKhoSL4.jpg',
      release_date: '2015-05-16',
      title: 'Those People',
      video: false,
      vote_average: 6.9,
      vote_count: 109
    }
  }

  const wrapper = shallow(
    <Film store={store} film={data.filmDetail} />
  );

  it('renders container', () => {
    // expect(wrapper.find('.film').length).toEqual(1);
    console.log(wrapper.props());
  });
});
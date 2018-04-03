import React from 'react';
import ReactDOM from 'react-dom';
import Films from './Films';
import { mount } from 'enzyme';

const data = {
  results: [
    {
    adult: false,
    backdrop_path: '/7k4zEgUZbzMHawDaMc9yIkmY1qR.jpg',
    genre_ids: [12, 14, 10751],
    id: 8844,
    overview: "When siblings Judy and Peter discover an enchanted board game that opens the door to a magical world, they unwittingly invite Alan -- an adult who's been trapped inside the game for 26 years -- into their living room. Alan's only hope for freedom is to finish the game, which proves risky as all three find themselves running from giant rhinoceroses, evil monkeys and other terrifying creatures.",
    poster_path: "/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg",
    release_date: "1995-12-15",
    title: "Jumanji",
    vote_average: 7,
    vote_count: 4001
    }
  ]
};

const wrapper = mount(
  <Films results={data.results} />
);

describe('Films, ', () => {
  it('renders container', () => {
    expect(wrapper.find('.films').length).toEqual(1);
  });
});
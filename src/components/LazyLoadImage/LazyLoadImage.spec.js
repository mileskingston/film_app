import React from 'react';
import ReactDOM from 'react-dom';
import LazyLoadImage from './LazyLoadImage';
import { mount } from 'enzyme';
import placeholder from '../../images/placeholder-film.svg';

const wrapper = mount(
  <LazyLoadImage src={placeholder} alt="image" placeholder={placeholder} />
);

describe('LazyLoadImage, ', () => {
  it('renders container', () => {
    expect(wrapper.find('.lazy-load-image').length).toEqual(1);
  });
  it('renders image containers', () => {
    expect(wrapper.find('.lazy-load-image__img').length).toEqual(2);
  });
});
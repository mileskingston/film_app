import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import { mount } from 'enzyme';

const wrapper = mount(
  <Loader />
);

describe('Loader, ', () => {
  it('renders container', () => {
    expect(wrapper.find('.loader').length).toEqual(1);
  });
  it('renders icon container', () => {
    expect(wrapper.find('.loader__icon').length).toEqual(1);
  });
});
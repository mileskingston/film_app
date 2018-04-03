import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Header from './Header';
import { mount } from 'enzyme';

const wrapper = mount(
  <Header
    handleClick=""
    showSearch={false} 
  />
);

describe('Header, ', () => {
  it('renders container', () => {
    expect(wrapper.find('.header').length).toEqual(1);
  });
});
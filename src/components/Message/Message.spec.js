import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import { mount } from 'enzyme';

const wrapper = mount(
  <Message text="Message" type="info" />
);

describe('Message, ', () => {
  it('renders container', () => {
    expect(wrapper.find('.message').length).toEqual(1);
  });

  it('renders type class', () => {
    expect(wrapper.find('.message--info').length).toEqual(1);
  });
  
  it('renders type class', () => {
    expect(wrapper.text()).toEqual('Message');
  });
});
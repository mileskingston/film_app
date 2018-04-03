import React from 'react';
import ReactDOM from 'react-dom';
import SocialLink from './SocialLink';
import { mount } from 'enzyme';

const wrapper = mount(
  <SocialLink
    href="http://facebook.com"
    src="facebookIcon.svg"
    alt="facebook"
  />
);

describe('SocialLinks, ', () => {
  it('renders container', () => {
    expect(wrapper.find('.social__link').length).toEqual(1);
  });

  it('alt text is correct', () => {
    expect(wrapper.find('img').props().alt).toEqual('facebook');
  });
  it('src is correct', () => {
    expect(wrapper.find('img').props().src).toEqual('facebookIcon.svg');
  });

  it('href is correct', () => {
    expect(wrapper.props().href).toEqual('http://facebook.com');  
  });
});

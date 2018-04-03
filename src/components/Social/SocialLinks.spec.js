import React from 'react';
import ReactDOM from 'react-dom';
import SocialLinks from './SocialLinks';
import { mount } from 'enzyme';

const linkData = {
  imdb_id: 'tt4477536',
  facebook_id: 'FiftyShadesMovies',
  instagram_id: 'FiftyShadesMovie',
  twitter_id: 'FiftyShades',
  id: 337167
};
const wrapper = mount(
  <SocialLinks
    links={ linkData }
  />
);

describe('SocialLinks, ', () => {
  it('renders container', () => {
    expect(wrapper.find('.social').length).toEqual(1);
  });
});

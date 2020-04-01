import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Robot from './index';


describe('<Robot />', () => {

  it('renders the robot`', () => {
    const wrapper = shallow(<Robot />);
    expect(wrapper.find('.robot')).to.have.lengthOf(1);
  });

});



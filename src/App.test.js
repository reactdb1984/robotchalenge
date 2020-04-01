import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import App from './App';
import Table from './Components/table/index';

describe('<MyComponent />', () => {
  it('renders one <Table /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Table)).to.have.lengthOf(1);
  });

});



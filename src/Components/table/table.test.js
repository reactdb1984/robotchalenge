import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Table from './table';


describe('<Table />', () => {
    it('renders children when passed in', () => {
        const wrapper = shallow((
          <Table>
            <div className="unique" />
          </Table>
        ));
        expect(wrapper.contains(<div className="unique" />)).to.equal(true);
      });

});



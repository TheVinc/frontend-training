import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ClocksManager from './clocks-manager.jsx';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Clocks Manager component', () => {
  it('should render correctly', () => {
    const output = shallow(<ClocksManager />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

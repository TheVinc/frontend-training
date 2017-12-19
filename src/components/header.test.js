import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './header.jsx';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  it('should render correctly', () => {
    const output = shallow(<Header />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from 'react-dom';
import { shallowToJson } from 'enzyme-to-json';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CustomLink from './custom-link.jsx';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-dom');

describe('CustomLink', () => {
  it('should render correctly', () => {
    const output = shallow(<CustomLink title="mockTitle" url="mockUrl" />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should call render correctly', () => {
    mount(<CustomLink title="mockTitle" url="mockUrl" />);
    // expect(render).toHaveBeenCalledWith(<CustomLink title="mockTitle" url="mockUrl" />, 'element-node');
    expect(render).toHaveBeenCalledTimes(1);
  });

  it('should have the given props', () => {
    const wrapper = shallow(<CustomLink title="mockTitle42" url="mockUrl1" />);
    // console.log(wrapper.debug());
    expect(wrapper.prop('href')).toEqual('mockUrl1');
    expect(wrapper.find('a').text()).toEqual('mockTitle42');
  });

  it('should handle the click event', () => {
    window.alert = jest.fn();
    const output = shallow(<CustomLink title="mockTitle" url="mockUrl" />);
    output.simulate('click');
    expect(window.alert).toHaveBeenCalledWith('clicked!');
  });

  it('should handle state changes', () => {
    const output = shallow(<CustomLink title="mockTitle" url="mockUrl" />);
    expect(output.state().clicked).toEqual(false);
    output.simulate('click');
    expect(output.state().clicked).toEqual(true);
  });
});

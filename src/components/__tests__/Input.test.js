import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../atoms/Input';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Input />);
});

test('input check', () => {
    expect(wrapper.find('#input').length).toEqual(1);
});

test('input tweek', () => {
    expect(wrapper.find('#inp').length).toEqual(1);
});

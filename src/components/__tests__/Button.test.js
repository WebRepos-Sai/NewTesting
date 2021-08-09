import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../atoms/Button';

Enzyme.configure({ adapter: new Adapter() });

test('button check', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.find('#btn').length).toEqual(2);
});

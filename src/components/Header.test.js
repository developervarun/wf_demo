import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, checkProps } from '../test/testUtils';
import Header from './Header';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => {
    return shallow(<Header />)
}

test('check if header component renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component_header");
    expect(component.length).toBe(1);
});
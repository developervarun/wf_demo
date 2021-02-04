import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, checkProps } from '../test/testUtils';
import Container from './Container';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => {
    return shallow(<Container />)
}

test('check if container component renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component_container");
    expect(component.length).toBe(1);
});
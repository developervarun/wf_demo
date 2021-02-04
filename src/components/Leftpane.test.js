import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, checkProps } from '../test/testUtils';
import Leftpane from './Leftpane';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => {
    return shallow(<Leftpane />)
}

const url = '../../navigation.json';
const getNavList = (config) => {
    const { successCB } = config;
    return axios.get(url)  // returns Promise
        .then(response => {
            successCB(response.data, config);
        });
}
test('check if leftpane component renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component_leftpane");
    expect(component.length).toBe(1);
});

describe('test if api is working', () => {
    test('call mock api and test if it is responding', ()=>{
        const wrapper = setup();
        const mock = new MockAdapter(axios);
        const successCB = jest.fn();

        mock.onGet(url).reply(200, 'success');
        const axiosSpy = jest.spyOn(axios, 'get');

        return getNavList({ successCB }).then(() => {
            expect(axiosSpy).toHaveBeenCalled();
            expect(successCB.mock.calls[0][0]).toBe('success');
        });
    });
});
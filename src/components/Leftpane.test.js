import {act} from "react-dom/test-utils";
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByTestAttr } from '../test/testUtils';
import Leftpane from './Leftpane';
import Container from "./Container";

Enzyme.configure({adapter: new Adapter()});

describe("Leftpane Component tests...", () => {
    let wrapper, navList;

    const setup = () => {
        return mount(<Leftpane />);
    }

    beforeEach(() => {
        const mockResponseData = [{"title": "Orders","url": "/orders","children": []}];
        jest.clearAllMocks();

        global.fetch = jest.fn(async () => ({
            json: async () => mockResponseData
        }));
        wrapper = setup();
    });

    test('check if leftpane component renders without error', () => {
        const component = findByTestAttr(wrapper, "component_leftpane");
        expect(component.length).toBe(1);
    });

    test("check if render() is called and dom is updated", async () => {
        await act(() => new Promise(setImmediate));
        wrapper.update();
        const listUL = wrapper.find("ul");
        expect(listUL.exists()).toBeTruthy();
    });
});
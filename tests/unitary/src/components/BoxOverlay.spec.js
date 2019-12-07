import React from 'react';
import reactRouterDom from 'react-router-dom';
import { useKey } from 'react-use';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BoxOverlay } from '../../../../src/components/BoxOverlay/BoxOverlay.js';

configure({ adapter: new Adapter() });

jest.mock('react-router-dom');
jest.mock('react-use');

describe('BoxOverlay Component', () => {
  beforeEach(() => {
    reactRouterDom.useHistory = jest.fn(() => []);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders component', () => {
    const wrapper = mount(<BoxOverlay />);
    expect(wrapper).toHaveLength(1);
    wrapper.unmount();
  });

  it('renders component with children', () => {
    const wrapper = mount(
      <BoxOverlay>
        <div className="BoxOverlayChild" />
      </BoxOverlay>,
    );
    const childNode = wrapper.find('.BoxOverlayChild');
    expect(childNode).toHaveLength(1);
    wrapper.unmount();
  });

  it('contains a close button component', () => {
    const wrapper = mount(<BoxOverlay />);
    const btn = wrapper.find('button');
    expect(btn).toHaveLength(1);
    expect(btn.props()['data-cy']).toBe('BoxOverlay_closeButton');
    wrapper.unmount();
  });

  it('calls react-router-dom useHistory when mounted', () => {
    const wrapper = mount(<BoxOverlay />);
    expect(reactRouterDom.useHistory).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  it('calls react-use useKey when mounted', () => {
    const wrapper = mount(<BoxOverlay />);
    expect(useKey).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });
});

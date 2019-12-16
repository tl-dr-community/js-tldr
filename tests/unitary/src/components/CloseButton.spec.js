import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CloseButton } from '../../../../src/components/CloseButton/CloseButton';

configure({ adapter: new Adapter() });

describe('CloseButton Component', () => {
  it('renders component', () => {
    const wrapper = mount(<CloseButton />);
    const btn = wrapper.find('button');
    expect(btn).toHaveLength(1);
    wrapper.unmount();
  });

  it('renders component with inner attributes', () => {
    const wrapper = mount(<CloseButton />);
    const btn = wrapper.find('button');
    expect(btn.props()['title']).toBe('Close this window (Esc)');
    expect(btn.props()['data-cy']).toBe('BoxOverlay_closeButton');
    wrapper.unmount();
  });

  it('calls parent method on click', () => {
    const parentFn = jest.fn();
    const wrapper = mount(<CloseButton onClick={() => parentFn()} />);
    const btn = wrapper.find('button');
    btn.simulate('click');
    expect(parentFn).toBeCalled();
    wrapper.unmount();
  });
});

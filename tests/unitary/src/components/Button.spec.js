import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../../../../src/components/Button';

configure({ adapter: new Adapter() });

describe('Button Component', () => {
  it('renders component', () => {
    const wrapper = mount(<Button />);
    const btn = wrapper.find('button');
    expect(btn).toHaveLength(1);
    wrapper.unmount();
  });

  it('renders component with correct passed attributes', () => {
    const value = 'Array';
    const wrapper = mount(
      <Button
        key={value}
        size="xs"
        style={{ margin: '0.5rem' }}
        data-cy={`SearchChips_${value}Button`}
      />,
    );
    const btn = wrapper.find('button');
    expect(btn.props()['style'].margin).toBe('0.5rem');
    expect(btn.props()['data-cy']).toBe('SearchChips_ArrayButton');
    wrapper.unmount();
  });

  it('calls parent method on click', () => {
    const parentFn = jest.fn();
    const wrapper = mount(<Button onClick={() => parentFn()} />);
    const btn = wrapper.find('button');
    btn.simulate('click');
    expect(parentFn).toBeCalled();
    wrapper.unmount();
  });
});

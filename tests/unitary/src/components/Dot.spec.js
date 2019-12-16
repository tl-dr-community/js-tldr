import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Dot } from '../../../../src/components/Dot/Dot.js';

configure({ adapter: new Adapter() });

describe('Dot Component', () => {
  it('renders component', () => {
    const wrapper = mount(<Dot />);
    const span = wrapper.find('span');
    expect(span).toHaveLength(1);
    wrapper.unmount();
  });

  it('renders component with children', () => {
    const wrapper = mount(
      <Dot>
        <div className="DotChild" />
      </Dot>,
    );
    const childNode = wrapper.find('.DotChild');
    expect(childNode).toHaveLength(1);
    wrapper.unmount();
  });
});

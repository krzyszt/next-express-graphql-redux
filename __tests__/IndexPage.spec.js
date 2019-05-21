import { mount } from 'enzyme';

import IndexPage from '../pages/index';

describe('Index Page', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<IndexPage/>);
  });

  it('should render as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
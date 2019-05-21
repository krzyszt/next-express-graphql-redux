import { mount } from 'enzyme';

import IndexPage from '../pages/index';

describe('Index Page', () => {
  let wrapper;
  let appBar;
  let toolbar;
  let button;
  let link;

  beforeAll(() => {
    wrapper = mount(<IndexPage/>);
    appBar = wrapper.find('AppBar');
    toolbar = wrapper.find('Toolbar');
    button = wrapper.find('Button');
    link = wrapper.find('Link');
  });

  it('should render as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render AppBar component', () => {
    expect(appBar.length).toEqual(1);
  });

  it('should render Toolbar component', () => {
    expect(toolbar.length).toEqual(1);
  });

  it('should render 2 Button components', () => {
    expect(button.length).toEqual(2);
  });

  it('should render Link component', () => {
    expect(link.length).toEqual(1);
  });
});
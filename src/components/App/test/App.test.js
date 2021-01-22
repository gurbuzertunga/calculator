import { render } from 'enzyme';
import { expect as chaiExpect } from 'chai';
import toJson from 'enzyme-to-json';
import App from '../App';
import Navbar from '../../Navbar/navbar';
import Display from '../../Display/display';
import About from '../../About/about';
import Quote from '../../Quote/quote';

describe('It works', () => {
  it('renders without crashing', () => {
    render(App);
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('contains navbar', () => {
    const wrapper = mount(<App />);
    chaiExpect(wrapper.contains(Navbar)).to.equal(true);
  });
  it('contains about', () => {
    const wrapper = mount(<App />);
    chaiExpect(wrapper.contains(About)).to.equal(true);
  });
  it('contains quote', () => {
    const wrapper = mount(<App />);
    chaiExpect(wrapper.contains(Quote)).to.equal(true);
  });
  it('contains display', () => {
    const wrapper = mount(<App />);
    chaiExpect(wrapper.contains(Display)).to.equal(true);
  });
});

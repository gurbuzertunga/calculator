import { render, mount } from 'enzyme';
import { expect as chaiExpect } from 'chai';
import toJson from 'enzyme-to-json';
import Display from '../display';

describe('It works', () => {
  it('renders without crashing', () => {
    render(<Display />);
    const tree = shallow(<Display />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('renders the props correctly', () => {
    const display = mount(<Display op="op" next="next" total="total" />);
    chaiExpect(display.props().op).to.equal('op');
    chaiExpect(display.props().next).to.equal('next');
    chaiExpect(display.props().total).to.equal('total');
  });
  it('renders the content correctly', () => {
    const display = mount(<Display op="op" next="next" total="total" />);
    chaiExpect(display.text()).to.contain('total' && 'op' && 'next');
  });
});

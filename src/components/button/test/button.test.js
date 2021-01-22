import { render, mount } from 'enzyme';
import { expect as chaiExpect } from 'chai';
import Button from '../button';

describe('It works', () => {
  it('renders without crashing', () => {
    render(<Button />);
  });

  it('renders the props correctly', () => {
    const button = mount(<Button className="hello" color="red" name="button" />);
    chaiExpect(button.props().className).to.equal('hello');
    chaiExpect(button.props().color).to.equal('red');
    chaiExpect(button.props().name).to.equal('button');
  });
});

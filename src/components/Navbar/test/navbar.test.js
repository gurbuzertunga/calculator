import { render, mount } from 'enzyme';
import { expect as chaiExpect } from 'chai';
import { BrowserRouter, Link } from 'react-router-dom';
import Navbar from '../navbar';

describe('<Navbar />', () => {
  it('has links', () => {
    const navbar = mount(<BrowserRouter><Navbar /></BrowserRouter>);
    chaiExpect(navbar.find(Link)).to.have.lengthOf(3);
  });
  it('has title', () => {
    const navbar = mount(<BrowserRouter><Navbar /></BrowserRouter>);
    chaiExpect(navbar.text()).to.contain('Math Magicians');
  });
});

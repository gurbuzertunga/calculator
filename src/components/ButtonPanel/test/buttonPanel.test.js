import { render, mount } from 'enzyme';
import { expect as chaiExpect } from 'chai';

import ButtonPanel from '../buttonPanel';

describe('<ButtonPanel />', () => {
  it('renders without crashing', () => {
    render(<ButtonPanel />);
  });

  it('contains buttons', () => {
    const buttonPanel = mount(<ButtonPanel />);
    chaiExpect(buttonPanel.find('.buttonPanel')).to.have.lengthOf(1);
  });
});

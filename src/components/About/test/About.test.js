/* eslint-disable max-len */
import { shallow } from 'enzyme';
import About from '../about';

it('renders without crashing', () => {
  shallow(<About />);
});
it('has elements inside of it', () => {
  const wrapper = mount(<About />);
  const content = (
    <div className="hello">
      <h1 className=" mb-5">Welcome to our page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui o!cia deserunt mollit anim id est laborum. IpsuLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui o!cia deserunt mollit anim id est laborum. IpsuWelcome to our page!HomeCalculatorQuote
      </p>
    </div>
  );

  expect(wrapper.contains(content)).toEqual(true);
});

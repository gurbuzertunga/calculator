import { Link } from 'react-router-dom';

const navbar = () => (
  <div className="navbar w-100 nav bg-light p-4 ">
    <div className="left">
      <p className="mb-0 font-weight-bold h5 text-decoration-none">Math Magicians</p>
    </div>

    <div className="right ">
      <Link to="/" className="mr-5 h5 text-dark text-decoration-none home-btn ">Home</Link>
      <Link to="/calculator" className="mr-5 h5 text-dark text-decoration-none calculator-btn">Calculator</Link>
      <Link to="/quote" className="mr-5 h5 text-dark text-decoration-none quote-btn">Quote of the day</Link>
    </div>
  </div>
);
export default navbar;

import PropTypes from 'prop-types';

const Display = ({ value }) => (
  <div className="display w-100 d-flex justify-content-end align-items-center">
    {value}
  </div>
);

Display.propTypes = {
  value: PropTypes.string,
};
Display.defaultProps = {
  value: '0',
};
export default Display;

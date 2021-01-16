import PropTypes from 'prop-types';

const Display = ({ next, op, total }) => (

  <div className="display w-100 d-flex flex-column justify-content-end align-items-center">
    <div className="total w-100 d-flex justify-content-end align-items-center">
      {total !== 0 ? total : ''}
    </div>
    <div className="op w-100 d-flex justify-content-end align-items-center">
      {op}
    </div>
    <div className="next  w-100 d-flex justify-content-end align-items-center">
      {next}
    </div>

  </div>
);

Display.propTypes = {
  next: PropTypes.string,
  op: PropTypes.string,
  total: PropTypes.string,
};
Display.defaultProps = {
  next: '0',
  op: '0',
  total: '0',
};
export default Display;

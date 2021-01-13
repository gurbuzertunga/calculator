import PropTypes from 'prop-types';

function Button({ name, className, color }) {
  return (
    <div className={className}>
      <button type="button" className="w-100 btn btn-light " id={color}>
        {name}
      </button>
    </div>
  );
}
Button.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  name: 'button',
  className: 'button',
  color: '',
};

export default Button;

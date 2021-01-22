import PropTypes from 'prop-types';

function Button({
  name, className, color, clickHandler,
}) {
  return (
    <div className={className}>
      <button type="button" onClick={clickHandler} className="w-100 btn btn-light math-btn" id={color}>
        {name}
      </button>
    </div>
  );
}
Button.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  name: 'button',
  className: 'button',
  color: '',
  clickHandler: PropTypes.func,
};

export default Button;

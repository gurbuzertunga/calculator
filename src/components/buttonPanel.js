import PropTypes from 'prop-types';
import Button from './button';

function ButtonPanel({ handleClick }) {
  return (
    <div className="buttonPanel bg-dark w-100 rounded ">
      <div className="component-button-panel d-flex flex-column w-100 ">
        <div className="d-flex w-100 justify-content-between">
          <Button name="AC" clickHandler={handleClick} className="w-100 " color="orange" />
          <Button name="+/-" clickHandler={handleClick} className="w-100 " color="orange" />
          <Button name="%" clickHandler={handleClick} className="w-100 " color="orange" />
          <Button name="÷" clickHandler={handleClick} className="w-100 " color="orange" />
        </div>
        <div className="d-flex w-100 justify-content-between">
          <Button name="7" clickHandler={handleClick} className="w-100" />
          <Button name="8" clickHandler={handleClick} className="w-100" />
          <Button name="9" clickHandler={handleClick} className="w-100" />
          <Button name="x" clickHandler={handleClick} className="w-100 " color="orange" />
        </div>
        <div className="d-flex w-100 justify-content-between">
          <Button name="4" clickHandler={handleClick} className="w-100" />
          <Button name="5" clickHandler={handleClick} className="w-100" />
          <Button name="6" clickHandler={handleClick} className="w-100" />
          <Button name="-" clickHandler={handleClick} className="w-100 " color="orange" />
        </div>
        <div className="d-flex w-100 justify-content-between">
          <Button name="1" clickHandler={handleClick} className="w-100" />
          <Button name="2" clickHandler={handleClick} className="w-100" />
          <Button name="3" clickHandler={handleClick} className="w-100" />
          <Button name="+" clickHandler={handleClick} className="w-100 " color="orange" />
        </div>
        <div className="d-flex w-100 justify-content-between">
          <Button name="0" clickHandler={handleClick} className="w-100" wide />
          <Button name="." clickHandler={handleClick} className="w-100" />
          <Button name="=" clickHandler={handleClick} className="w-100 " color="dark-grey" />
        </div>
      </div>

    </div>
  );
}
export default ButtonPanel;
ButtonPanel.propTypes = {
  handleClick: PropTypes.func,
};

ButtonPanel.defaultProps = {
  handleClick: PropTypes.func,
};

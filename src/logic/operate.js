import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const figureOne = Big(numberOne);
  const figureTwo = Big(numberTwo);
  if (operation === '+') {
    return figureOne.plus(figureTwo).toString();
  }
  if (operation === '-') {
    return figureOne.minus(figureTwo).toString();
  }
  if (operation === 'x') {
    return figureOne.times(figureTwo).toString();
  }
  if (operation === '÷') {
    if (figureOne.c[0] === 0 || figureTwo.c[0] === 0) {
      return 'Division by zero is not allowed';
    }
    return figureOne.div(figureTwo).toString();
  }
  if (operation === '%') {
    return figureOne.times(0.01).toString();
  }
  return 'error';
}

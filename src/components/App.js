/* eslint-disable */
import { useState } from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';

function App() {
  let [total, setTotal] = useState('0');
  let [next, setNext] = useState(null);
  let [operation, setOperation] = useState(null);
  function handleClick(e) {
    if (e.target.classList.contains('math-btn')) {
      var result = calculate({ total , next, operation }, e.target.innerText);
      if (result.total || result.total === null ){
        setTotal(result.total)
        console.log(result.total)
      }
      if (result.operation || result.operation === null ){
        setOperation(result.operation)
      }
      if (result.next || result.next === null){
        setNext(result.next)
      }
      
    }
  }
  return (
    <div className="container d-flex flex-column app rounded">
      <Display next={next}  op= {operation} total={total} />
      <ButtonPanel handleClick={handleClick} />
    </div>
  );
}

export default App;

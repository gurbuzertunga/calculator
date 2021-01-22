import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Display from '../Display/display';
import ButtonPanel from '../ButtonPanel/buttonPanel';
import calculate from '../../logic/calculate/calculate';

import Navbar from '../Navbar/navbar';
import Quote from '../Quote/quote';
import About from '../About/about';

function App() {
  const [total, setTotal] = useState('0');
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  function handleClick(e) {
    if (e.target.classList.contains('math-btn')) {
      const result = calculate({ total, next, operation }, e.target.innerText);
      if (result.total || result.total === null) {
        setTotal(result.total);
      }
      if (result.operation || result.operation === null) {
        setOperation(result.operation);
      }
      if (result.next || result.next === null) {
        setNext(result.next);
      }
    }
  }
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container d-flex flex-column app rounded justify-content-center ">
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route
            exact
            path="/calculator"
            element={(
              <div className="calculator align-self-center">
                <Display next={next} op={operation} total={total} />
                {' '}
                <ButtonPanel handleClick={handleClick} />
                {' '}
              </div>
)}
          />
          <Route exact path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

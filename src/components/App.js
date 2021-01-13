import Display from './display';
import ButtonPanel from './buttonPanel';

function App() {
  return (
    <div className="container d-flex flex-column app rounded">
      <Display value="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;

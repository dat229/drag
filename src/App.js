import './App.css';

import DropFileInput from './components/drop-file-input/DropFileInput';

function App() {
  return (
    <div className="App">
      <div className='drag'>
        <h3>React drop files input</h3>
        <DropFileInput />
      </div>
    </div>
  );
}

export default App;

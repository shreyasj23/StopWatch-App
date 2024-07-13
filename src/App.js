import { useState } from 'react';
import './App.css';
import StopWatch from './Components/Stopwatch';

function App() {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <h1 className="h-tag">STOPWATCH</h1>
      <div className="App">
        <div className="button-box">
          <button onClick={() => setDisplay(prevDisplay => !prevDisplay)}>
            {display ? "Stopwatch" : "Stopwatch"}
          </button>
        </div>
        {display && (
          <div className="stopwatch">
            <StopWatch />
          </div>
        )}
      </div>
    </>
  );
}

export default App;

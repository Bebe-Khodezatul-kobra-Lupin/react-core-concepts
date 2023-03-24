import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <CounterNum></CounterNum>
    </div>
  );
}

export default App;


function CounterNum() {

  const [count, setCount] = useState(55);
  //console.log(abc);
  const incressCount = () => setCount(count + 1);
  const decressCount = () => setCount(count - 1);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={incressCount}  >Incress</button>
      <br />
      <button onClick={decressCount}  >Decrease</button>
    </div>
  )
}





//component and prop code 

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <p></p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

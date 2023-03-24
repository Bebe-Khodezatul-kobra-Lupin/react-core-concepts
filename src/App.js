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
  const incressCount = () => {
    const newcount = count + 1;
    setCount(newcount);
  }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={incressCount}  >Incress</button>

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

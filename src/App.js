import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <CounterNum></CounterNum>
      <EcternalUser></EcternalUser>

    </div>
  );
}
function User(props) {
  return (
    <div className='User'>
      <h3>
        Name:{props.name}
      </h3>
      <p>
        Email:{props.email}
      </p>
    </div>
  )
}

function EcternalUser() {
  const [users, srtUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => srtUsers(data))
  }, [])

  return (
    <div>
      <h2>External users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>


  )
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

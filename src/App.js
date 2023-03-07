import { useEffect } from 'react';
import axios from './utils/axios';

import logo from './logo.svg';
import './App.css';

function App() {

  const test = async() => {

    const params = {
      pIndex : 1,
      pSize : 5
    }

    const response = await axios.get(false, {
      params
    });
    console.log(response)
  }
  useEffect(() => {
    test();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;

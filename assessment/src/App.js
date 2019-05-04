import React from 'react';
<<<<<<< HEAD
import { Hello } from "./components/Hello";
=======
import { ApolloProvider } from 'react-apollo';
>>>>>>> 760d7e722f1bd222a1e84443d49b1b0f0caa2b9b
import logo from './logo.svg';
import './App.scss';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Hello compiler="TypeScript" framework="React" />
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

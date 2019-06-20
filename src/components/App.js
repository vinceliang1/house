import React from 'react';
import logo from '../common/images/logo.svg';
import '../common/css/App.css';
import { Button } from 'antd'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        this is header
      </header>
      <main className="App-main">
        <nav></nav>
        <img src={logo} className="App-logo" alt="logo" />
        <p>react</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary">Button</Button>
      </main>
      <footer className="App-footer">this is footer</footer>
    </div>
  );
}

export default App;

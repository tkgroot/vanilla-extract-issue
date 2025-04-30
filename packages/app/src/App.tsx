import 'lit-component/my-custom-element.js';
import { useState } from 'react';
import './App.css';
import litLogo from './assets/lit.svg';
import reactLogo from './assets/react.svg';
import vanillaExtractLogo from './assets/vanilla-extract.svg';
import { container } from './styles/container.css.js';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={container}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={litLogo} className="logo" alt="Lit logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={vanillaExtractLogo} className="logo" alt="vanilla-extract logo" />
        </a>
      </div>
      <h1>Vite + React + Lit + Vanilla-Extract</h1>
      <div className="card">
        <span className="counter">{count}</span>
        <my-custom-element
          oncustom-count-event={e => {
            const counter: number = Number(e.detail);
            setCount(counter);
          }}
        ></my-custom-element>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite, React, Lit or Vanilla-Extract logos to learn more</p>
    </>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> hello welcome
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more there are none
      </p>
    </>
  )
}

export default App

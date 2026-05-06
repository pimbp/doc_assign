import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const myFunction = () => { alert('Connected!'); }

  return (
    <>
      <h1>VIA Tabloid</h1>
      <div id="sensational">
          
          Hear ye! Hear ye! 
          <p>
              You won't believe your ears! Your eyes... maybe.
          </p>
      
      </div>
      <button onClick={myFunction}>Click Me</button>
    </>
  )
}

export default App

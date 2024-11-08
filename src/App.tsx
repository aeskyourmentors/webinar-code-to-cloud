import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://yourmentors.io/" target="_blank">
          <img src="https://yourmentors.io/wp-content/uploads/2024/07/FA-YourMentors.io-logo.png" className="logo" alt="Vite logo" />
        </a>

      </div>
    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="connect-section">
        <p>Get connected with us on LinkedIn!</p>
        <a href="https://www.linkedin.com/in/nasirnjs/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
        Md. Nasir Uddin
        </a>
        <br />
        <a href="https://www.linkedin.com/in/mohammad-akif2000/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
          Mohammad Akif
        </a>
      </div>
    </>
  )
}

export default App

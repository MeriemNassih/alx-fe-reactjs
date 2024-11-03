import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <WelcomeMessage />
        {/* Autres composants ou contenu ici */}
    </div>
)
}

export default App

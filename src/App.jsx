import { useState } from 'react'
import Card from './componentes/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Card/>
    </div>
  )
}

export default App

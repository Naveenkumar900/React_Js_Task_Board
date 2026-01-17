import { useState } from 'react'
 
import viteLogo from '/vite.svg'
 
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Dashboard/>
    </>
  )
}

export default App

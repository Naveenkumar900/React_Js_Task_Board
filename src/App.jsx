import { useState } from 'react'
 
import viteLogo from '/vite.svg'
 
import Dashbaord from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Dashbaord/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeUser from './pages/HomeUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomeUser />
    <LoginU />
 </>
  )
}

export default App

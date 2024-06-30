import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import RouteViews from './routes/RouteViews'

const App = () => {
  return (
    <>
    <BrowserRouter>
       <RouteViews />
    </BrowserRouter>
    </>
  )
}

export default App
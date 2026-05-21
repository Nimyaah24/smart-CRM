
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
// importing routeprotect

import Customers from './Pages/Customers'

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={ <Dashboard/>   } />
          <Route path='/customers' element={   <Customers />} />
        
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App



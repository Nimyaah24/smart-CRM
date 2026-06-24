
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Customers from './Pages/Customers'
import Projects from './Pages/Projects'
import Analytics from './Pages/Analytics'
import Kanban from './Pages/Kanban'
import Team from './Pages/Team'
import Settings from './Pages/Settings'
import Notifications from './Pages/Notifications'
import ForgotPassword from './Pages/Forgotpassword'

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/kanban' element={<Kanban />} />
          <Route path='/team' element={<Team />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/notifications' element={<Notifications />} />
<Route path="/forgotpassword" element={<ForgotPassword/>}/>


        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App



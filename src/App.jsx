import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Admin from './routes/admin/Admin'
import Auth from './routes/auth/Auth'
import Login from './routes/auth/login/Login'
import Register from './routes/auth/register/Register'
import Nav from './components/nav/Nav'
function App() {

  return (
    <Routes>
      <Route path='' element={<Nav/>}/>
      <Route path='admin' element={<Admin/>}/>
      <Route path='auth' element={<Auth/>}>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      </Route>
    </Routes>
  )
}

export default App

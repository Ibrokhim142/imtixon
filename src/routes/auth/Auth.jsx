import React from 'react'
import { Outlet } from 'react-router-dom'
import './Auth.scss'

const Auth = () => {
  return (
    <div className='auth'>
      <div className='form-container'>
      <Outlet/>
      </div>
    </div>
  )
}

export default Auth

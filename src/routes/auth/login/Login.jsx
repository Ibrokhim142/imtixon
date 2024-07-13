import React from 'react'
import './Login.scss'
import Button from '../../../utils'

const Login = () => {
  return (
    <div className='form__wrapper'>
      <h2 className='auth__title'>Login</h2>
      <p className='auth__text'>Log in to your account to collect your account.</p>
      <form className='auth-form'>
        <input type="email" placeholder='email@domain.com' />
        <input type="password" placeholder='Password' />
        <Button btnType='submit'>Login</Button>
      </form>
    </div>
  )
}

export default Login

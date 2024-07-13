import { useEffect, useReducer, useState } from 'react'
import './Register.scss'
import Button from '../../../utils'
import axios from '../../../api/index'
import { compile } from 'sass'

const Register = () => {
  const [passwordError, setPasswordErrors] = useState({
    uppercase: true,
    lowercase: true,
    length: true
  })

  const [usernameErrors, setUsernameErrors] = useState({
    length: true,
    capitalLetter: true,
  })

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
      setPasswordErrors({
        lowercase: !(/[a-z]/g.test(password)),
        uppercase: !(/[A-Z]/g.test(password)),
        length: password.length >= 8 ? false: ! true
      })
  }, [password])

  useEffect(() => {
  setUsernameErrors({
    capitalLetter: /^[A-Z]/.test(username),
    length: username.trim().length >= 2 ? false: ! true
  })
  }, [username])

  const handleRegisterUser = async (e) => {
    e.preventDefult();

    try {
      const response = await axios.post('/users/', {
        name: username,
        email: email,
        password: password,
      });
      console.log(response.data)
    }

    catch(error) {
      compile.log(error);
    }
  }

  return (
    <div className='form__wrapper'>
      <h2 className='auth__title'>Register</h2>
      <p className='auth__text'>Enter your credential to access your account.</p>
      <form className='auth-form' onSubmit={handleRegisterUser}>
        <input type="text" placeholder='Username' required value={username} onChange={(e) => setUsername(e.target.value)}/>
        <ul>
          {usernameErrors.capitalLetter && <li>First characters should be Uppercase letter </li>}
          {usernameErrors.length && <li>At least 2 characters </li>}
        </ul>
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <ul>
          {
            passwordError.uppercase && <li>At least one Uppercase letter</li>
          }
          {
            passwordError.lowercase && <li>At least 8 characters letter</li>
          }
          {
            passwordError.length && <li>At least one Lowercase letter</li>
          }
        </ul>
        <input type="email" placeholder='email@domain.com' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <Button btnType='submit'>Register</Button>
      </form>
    </div>
  )
}

export default Register

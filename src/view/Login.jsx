import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
 


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        Navigate('/home')
    }
  return (
      <div className='login__wrapper' >
          <form action="" onSubmit={handleLogin}>
              <h3>Login</h3>
              <span  style={{color: 'red'}}>yo</span>
              <div> 
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required onChange={(e)=> setPassword(e.target.value)}/>
              </div>
              <div>
                  
              <label htmlFor="password">Password</label>
              <input onChange={(e)=> setPassword(e.target.value)} type="password" name="password" id="password" required />
              </div>
              <button type='submit'> 
                  Login
              </button>
              <a href='/register'>
                  Register
              </a>
          </form>
    </div>
  )
}

export default Login
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        Navigate('/login')
    }
  return (
    <div className='login__wrapper' >
    <form action="" onSubmit={handleLogin}>
              <h3>Register</h3>
            
              <span  style={{color: 'red'}}>yo</span>
              <div>
            
            <label htmlFor="username">Username</label>
            <input onChange={(e)=> setUsername(e.target.value)} type="text" name="username" id="username" required/>
            </div>
        <div>
            
        <label htmlFor="email">Email</label>
        <input onChange={(e)=> setEmail(e.target.value)} type="email" name="email" id="email" required />
        </div>
        <div>
            
        <label htmlFor="password">Password</label>
        <input onChange={(e)=> setPassword(e.target.value)} type="password" name="password" id="password" required/>
        </div>
        <button type='submit'> 
        Register
        </button>
        <a href='/login'>
           Login
        </a>
    </form>
</div>
  )
}

export default Register
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeApiRequest, responseHandler, saveData } from '../utils';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const Navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setResponseMessage('');
    setIsDisabled(true);
    const data = {
      email,
      password,
    };
    makeApiRequest('/login', 'POST', data)
      .then((res) => {
        saveData('token', res.data.token);
          Navigate('/home');
          setIsDisabled(false)
      })
      .catch((err) => {
        setResponseMessage(responseHandler(err)); setIsDisabled(false)
      })
    
  };
  return (
    <div className='login__wrapper'>
      <form action='' onSubmit={handleLogin}>
        <h3>Login</h3>
        <span style={{ color: 'red' }}>{responseMessage} </span>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            name='password'
            id='password'
            required
          />
        </div>
        <button type='submit' disabled={isDisabled}>
          Login
        </button>
        <a href='/register'>Register</a>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeApiRequest, responseHandler, saveData } from '../utils';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
      firstName,
      lastName,
      email,
      password,
    };

    makeApiRequest('/register', 'POST', data)
      .then((res) => {
        saveData('token', res.data.token);
        Navigate('/');
        setIsDisabled(false);
      })
      .catch((err) => {
        setResponseMessage(responseHandler(err));
        setIsDisabled(false);
      });
  };
  return (
    <div className='login__wrapper'>
      <form action='' onSubmit={handleLogin}>
        <h3>Register </h3>

        <span style={{ color: 'red' }}>{responseMessage}</span>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            name='firstName'
            id='firstName'
            // required
          />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type='text'
            name='lastName'
            id='lastName'
            // required
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            name='email'
            id='email'
            // required
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            name='password'
            id='password'
            // required
          />
        </div>
        <button type='submit' disabled={isDisabled}>Register</button>
        <a href='/'>Login</a>
      </form>
    </div>
  );
};

export default Register;

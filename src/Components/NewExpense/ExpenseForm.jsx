import React, { useEffect, useState } from 'react';
import './ExpenseForm.css';
import { getData, makeApiRequest, responseHandler } from '../../utils';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const token = getData('token')

  useEffect(() => {
    if (title.length > 0 && amount.length > 0 && date.length > 0) {
      setIsValid(true);
    } else setIsValid(false);
  }, [title, amount, date]);

  const titleHandler = (e) => {
    setResponseMessage('')
    setTitle(e.target.value);
  };
  const amoutHandler = (e) => {
    setResponseMessage('')
    setAmount(e.target.value);
  };
  const dateHandler = (e) => {
    setResponseMessage('')
    setDate(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    // props.getFormData(expenseData);
    makeApiRequest('/new-expense', 'POST', expenseData,token)
      .then((res) => {
        console.log(res);
        setTitle('');
        setAmount('');
        setDate('');
        props.onCancel()
        props.onUpdate()
      })
      .catch((err) => setResponseMessage(responseHandler(err)));
  };

  const closeform = () => {
    setTitle('');
        setAmount('');
        setDate('');
        props.onCancel()
  }
  return (
    <form action='' onSubmit={formHandler}>
       { responseMessage && <span className='new-expense__response'>{responseMessage} </span>}
      <div className='new-expense__controls'>

        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input type='text' value={title} onChange={titleHandler} required />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={amoutHandler}
            required
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input type='date' min='2019-01-01' value={date} onChange={dateHandler} required />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' className='cancel' onClick={closeform}>
          {' '}
          Cancel
        </button>
        <button type='submit' disabled={!isValid}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;

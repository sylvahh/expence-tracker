import React, { useEffect, useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (title.length > 0 && amount.length > 0 && date.length > 0) {
      console.log('valid');
      setIsValid(true);
    } else setIsValid(false);
  }, [title, amount, date]);
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const amoutHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      price: +amount,
      date: new Date(date),
    };
    props.getFormData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  };
  return (
    <form action='' onSubmit={formHandler}>
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
        <button type='button' className='cancel' onClick={props.onCancel}>
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

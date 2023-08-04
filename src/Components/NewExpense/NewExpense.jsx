import React, { useEffect, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const { userData } = props;
  const [showform, setShowform] = useState(false);
  const [greetings, setGreetings] = useState('');

  useEffect(() => {
    const date = new Date();
    let hour = date.getHours();
    if (hour <= 11) {
      setGreetings('Good Morning');
    } else if (hour === 12) {
      setGreetings('Good Day');
    } else if (hour > 12 && hour <= 15) {
      setGreetings('Good Afternoon');
    } else if (hour > 15 && hour !== 0) {
      setGreetings('Good Evening');
    }
  }, []);
  const expenseFormHandler = (formData) => {
    const data = {
      ...formData,
      id: Math.random().toString(),
    };
    props.getExpenseData(data);
    setShowform(false);
  };

  const buttonHandler = () => {
    setShowform(true);
  };

  const cancelHandler = () => {
    setShowform(false);
  };

  const addExpenseBtn = (
    <div className='addExpenseBtn'>
      <span style={{ fontSize: '20px', fontWeight: '500', textAlign: 'left', color: '#EEEEAA' }}>
        {' '}
        {greetings} <span style={{ color: ' #40005d' }}>{userData && userData.firstName}</span>{' '}
      </span>
      <button onClick={buttonHandler}>Add New Expense</button>
    </div>
  );
  return (
    <div className='new-expense'>
      {!showform && addExpenseBtn}
      {showform && (
        <ExpenseForm
          getFormData={expenseFormHandler}
          onUpdate={props.onUpdate}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

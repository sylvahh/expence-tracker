import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const {userData} = props
  const [showform, setShowform] = useState(false);

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
      <span style={{ fontSize: '20px', fontWeight: '500', textAlign: 'left', color: '#EEEEAA' }}> Good evening <span style={{ color: ' #40005d' }}>{ userData && userData.firstName}</span>   </span>
      <button onClick={buttonHandler}>Add New Expense</button>
    </div>
  )
  return (
    <div className='new-expense'>
      {!showform && addExpenseBtn}
      {showform && <ExpenseForm getFormData={expenseFormHandler} onUpdate={props.onUpdate} onCancel={cancelHandler} />}
    </div>
  );
};

export default NewExpense;

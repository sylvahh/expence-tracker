import React, { useState } from 'react';
import ExpenseChart from './ExpenseChart';
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState('2023');

  const filterhandler = (data) => {
    setFilterdYear(data);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  return (
    <div className='expenses'>
      <ExpensesFilter selected={filterdYear} getYear={filterhandler} />
      <ExpenseChart expenses={ filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;

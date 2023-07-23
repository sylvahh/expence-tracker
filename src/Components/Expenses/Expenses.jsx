import React, { useState } from 'react';
import ExpenseChart from './ExpenseChart';
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState('2023');
  const [showChart, setShowChart] = useState(false);
  const expenses = props.items;

  const filterhandler = (data) => {
    setFilterdYear(data);
  };
  console.log();
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  return (
    <div className='expenses'>
      <ExpensesFilter selected={filterdYear} getYear={filterhandler} />
      <div className='expenses__showchart'>
        {expenses.length > 0 && (
          <button onClick={() => setShowChart(!showChart)}>
            {!showChart ? 'show' : 'hide'} chart
          </button>
        )}
      </div>
      <div className='expenses_sections'>
        {showChart && <ExpenseChart expenses={filteredExpenses} />}
        <ExpensesList items={filteredExpenses} />
      </div>
    </div>
  );
};

export default Expenses;

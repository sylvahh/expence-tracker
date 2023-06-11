import React from 'react';
import NewExpense from '../Components/NewExpense/NewExpense';
import Expenses from '../Components/Expenses/Expenses';

const Home = ({ addExpenseHandler, updateExpense }) => {
  return (
    <div>
      <NewExpense getExpenseData={addExpenseHandler} />
      <Expenses items={updateExpense} />
    </div>
  );
};

export default Home;

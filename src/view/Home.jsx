import React, { useEffect, useState } from 'react';
import NewExpense from '../Components/NewExpense/NewExpense';
import Expenses from '../Components/Expenses/Expenses';
import { getData, makeApiRequest, responseHandler } from '../utils';
import { useNavigate } from 'react-router-dom';

const style = {
  display: 'flex',
  justifyContent: 'end',
  margin: '10px',
};
const Home = () => {
  const [userData, setuserData] = useState();
  const [expenses, setExpenses] = useState([]);
  const [updateState, setUpdateState] = useState(false);
  const token = getData('token');
  const Navigate = useNavigate();

  useEffect(() => {
    if (token) {
      makeApiRequest('/me', 'GET', {}, token)
        .then((res) => {
          const data = res.data.user;
          setuserData(data);
          setExpenses(
            data.expenses.map(({ id, title, amount, date }) => ({
              id,
              title,
              amount,
              date: new Date(date),
            }))
          );
        })
        .catch((err) => {
          !err.success && Navigate('/');
          console.warn(responseHandler(err));
        });
    } else {
      Navigate('/')
    }
  }, [updateState]);

  const handleLogout = () => {
    makeApiRequest('/logout', 'GET', {}, token)
      .then((res) => {
        sessionStorage.clear();
        Navigate('/');
      })
      .catch((err) => console.warn(responseHandler(err)));
  };
  const handleUpdate = () => setUpdateState(!updateState);

  return (
    <div>
      <div style={style} className='expenses__showchart'>
        <button className='' onClick={handleLogout}>
          logout{' '}
        </button>
      </div>
      <NewExpense userData={userData} onUpdate={handleUpdate} />
      <Expenses items={expenses} />
    </div>
  );
};

export default Home;

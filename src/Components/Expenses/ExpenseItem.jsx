import React from 'react'
import ExpenseDate from './ExpenseDate';
// import { Expenceitem } from './StyledDiv';
import './ExpenseItem.css'
import { numberWithCommas } from '../../utils';

const ExpenseItem = (props) => {
  return (
      <li className='expense-item'> 
          <ExpenseDate date={props.date}/>
          <div className="expense-item__description">
              <h2>{props.title}</h2>
              <div className="expense-item__price">
                  {props.currency}{numberWithCommas(props.price)}
              </div>
          </div>
      </li>
  )
}

export default ExpenseItem;
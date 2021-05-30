import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import React, { useState } from 'react';

const ExpenseItem = (props) => {
  const [title] = useState(props.title);

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{`Rs.` + props.amount}</div>
        {/* <button onClick={updateTitleHandler}>Update</button> */}
      </div>
    </div>
  );
};

export default ExpenseItem;

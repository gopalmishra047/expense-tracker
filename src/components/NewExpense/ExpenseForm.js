import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // });
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (event) => {
    //    setUserInput({ ...userInput, title: event.target.value });
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    //  setUserInput({ ...userInput, amount: event.target.value });
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    //setUserInput({ ...userInput, date: event.target.value });
    setDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const inputData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    // console.log(inputData);
    props.onSaveExpenseData(inputData);
    setTitle('');
    setAmount('');
    setDate('');
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__controls'>
          <label>Title:</label>
          <input type='text' value={title} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__controls'>
          <label>Amount:</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__controls'>
          <label>Date:</label>
          <input
            type='date'
            min='2019-01-01'
            max='2021-12-31'
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

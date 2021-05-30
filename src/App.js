import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 15000,
    date: new Date(2020, 7, 15),
  },
  {
    id: 'e2',
    title: 'Travelling',
    amount: 2000,
    date: new Date(2021, 9, 17),
  },
  {
    id: 'e3',
    title: 'New Home',
    amount: 500000,
    date: new Date(2020, 7, 15),
  },
  {
    id: 'e4',
    title: 'New Television',
    amount: 6500,
    date: new Date(2020, 1, 27),
  },
];

const App = () => {
  const [initialExpenses, setInitialExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expenses) => {
    console.log('Inside App.js');
    console.log(expenses);

    setInitialExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  };

  return (
    <div className='main-container'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <h2>Expense Details:</h2>
      <Expenses items={initialExpenses} />
    </div>
  );
};

export default App;

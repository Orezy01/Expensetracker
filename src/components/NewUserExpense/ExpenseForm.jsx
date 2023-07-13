import React,{ useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = ({onSaveExpenseData}) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value)
  }

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value)
  }

  const handleDateChange = (event) => {
    setEnteredDate(event.target.value)
  }

  const handleSubmit = (ev) => {
      ev.preventDefault();

      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
      }
     setEnteredTitle('');
     setEnteredAmount('');
     setEnteredDate('');
     onSaveExpenseData(expenseData);
    //  alert('Added your Expenses')
    //   console.log(expenseData);
  }
  return (
    <form onSubmit={handleSubmit}>
     <div className="new-expense__controls">
        <div  className="new-expense__control">
            <label htmlFor='title'>Title</label>
            <input type='text' value={enteredTitle} onChange={handleTitleChange} placeholder='Add a title' id='title' />
        </div>
        <div  className="new-expense__control">
            <label htmlFor='amount' >Amount</label>
            <input type='number' value={enteredAmount} onChange={handleAmountChange} id='amount' min='0.01' step='0.01' />
        </div> 
        <div  className="new-expense__control">
            <label>Date</label>
            <input type='date' value={enteredDate} onChange={handleDateChange} min='2021-01-01' max='2023-12-31' />
        </div>
     </div>
     <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
     </div>
    </form>
  )
}

export default ExpenseForm ;
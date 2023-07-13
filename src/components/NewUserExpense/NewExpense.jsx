import React from 'react';
import ExpenseForm  from './ExpenseForm'
import './NewExpense.css';
const NewExpense = ({onAddExpense}) => {
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const getExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
      
    }
    onAddExpense(getExpenseData)
    
  }
  return (
    <div className="new-expense">
     <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense;

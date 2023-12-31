import React, {useState} from "react"
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewUserExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(),
  },
  { id: 'e2',
   title: 'New TV',
    amount: 799.49,
     date: new Date()
     },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpense = (expense) => {
    setExpenses((prevExpense) => {

      
      return [expense, ...prevExpense]
    })
      // console.log('got data', expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      {<Expense items={expenses} />}

    </div>
  );
};

export default App;

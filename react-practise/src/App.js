import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';
import {useState} from 'react';
   const dummy_items = [
     {
       id:'el',
       title:'books',
       amount: 94.00,
       date: new Date(2020,7,14)
     },
     {
      id:'em',
      title:'books',
      amount: 100.00,
      date: new Date(2022,7,14)
    },
    {
      id:'en',
      title:'candles',
      amount: 140.00,
      date: new Date(2021,7,14)
    },
    {
      id:'eo',
      title:'flowers',
      amount: 94.00,
      date: new Date(2021,7,14)
    },
   ]
function App() {
 const [expenses, setExpenses] = useState(dummy_items);
  
  const addExpenseHandler = (expense)=>{
   // setExpenses([expense, ...expenses]);
    //console.log('app.js');
    //console.log(expense);
  //better way
  setExpenses((prevExpenses)=>{
    return [expense, ...prevExpenses];
  })
}
  return (
     <div>
       <h1 className="App"> Expenses List</h1>
        <NewExpense  onAddExpense={addExpenseHandler}/>
        <Expenses expenses={expenses}/>
     </div>  
  );
}

export default App;

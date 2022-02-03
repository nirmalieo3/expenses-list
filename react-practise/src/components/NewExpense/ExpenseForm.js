import './ExpenseForm.css';
import {useState} from 'react';

const ExpenseForm = (props)=>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangedHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangedHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangedHandler = (event) => {
        setEnteredDate(event.target.value);
    } 
    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData= {
            title: enteredTitle,
            amount: enteredAmount,
            date:new Date(enteredDate)
        };
       props.onSaveExpenseData(expenseData);
       setEnteredTitle('');
       setEnteredAmount('');
       setEnteredDate('');
       
    }
   return (
     <form onSubmit={submitHandler}>
       <div className="new-expense__controls">
           <div className="new-expense__control">
               <label>Title</label>
               <input type="text" onChange={titleChangedHandler} value={enteredTitle}/>
           </div>
           <div className="new-expense__control">
               <label>Amount</label>
               <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangedHandler} />
           </div>
           <div className="new-expense__control">
               <label>Date</label>
               <input type="date" min="2019-01-01" value={enteredDate} onChange={dateChangedHandler} />
           </div>
       </div>
       <div className="new-expense__actions">
           <button type="submit">Add expense</button>
       </div>
     </form>
   );
}
export default ExpenseForm;
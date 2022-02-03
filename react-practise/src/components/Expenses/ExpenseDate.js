import './ExpenseDate.css';
  function ExpenseDate(props){
    const month  = props.date.toLocaleString('en-EU', {month:'long'});
    const day  = props.date.toLocaleString('en-EU', {day:'2-digit'});
    const year = props.date.getFullYear();
    return(
        <div>
              <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
            </div>
        </div>

    );  
  }
export default ExpenseDate;
import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(){

    const [enteredTitle, setEnteredTitle] = useState('');

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);

    };

    const [enteredAmount, setEnteredAmount] = useState('');

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const [enteredDate, setEnteredDate] = useState('');
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.target);

    }
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <labe>Title</labe>
                    <input type='text'  onchange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <labe>Amount</labe>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <labe>Date</labe>
                    <input type='date' min='2019-01-02' max='2020-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>

            </div>
        </form>
    );
}

export default ExpenseForm;
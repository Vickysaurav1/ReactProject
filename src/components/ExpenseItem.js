import React from 'react'
import './ExpenseItem.css';
function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    console.log(expenseDate)
    const expenseTitle = "car insurance";
    const expensePrice = "$294";
  return (
    <div className='expense-item'>
       <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        </div>
        <div className='expense-item__price '>{expensePrice}</div>
    </div>
  )
}

export default ExpenseItem
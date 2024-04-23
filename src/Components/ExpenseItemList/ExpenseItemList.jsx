import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpenseItemList = ({items}) => { 
    if(items.length === 0){
        return <h2 className='text-white text-center font-bold tracking-wide'>Data Not Found!</h2>;
    }

  return (
    <ul style={{minHeight:'240px',maxHeight:'240px',overflowY:'scroll'}}>
      {items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            date={expense.date}
            item={expense.item}
            price={expense.price}
          />
        ))}
    </ul>
  )
}

export default ExpenseItemList

import React, { useState } from "react";
import ExpenseItem from "../../Components/ExpenseItem/ExpenseItem";
import NewExpenseItem from "../../Components/NewExpenseItem/NewExpenseItem";
import FilterExpenseItem from "../../Components/FilterExpenseItem/FilterExpenseItem";

const expenseData = [
  {id: 1, date: new Date().toDateString(), item: "asdfdasfadfdf", price: 100 },
  {id: 2, date: new Date().toDateString(), item: "gjgdjsdjfgjf", price: 700 },
  {id: 3, date: new Date().toDateString(), item: "mbmvckrwjabjhg", price: 200 },
];

const ExpenseItemPage = () => {

  const [expenseDataList,setExpenseDataList] = useState(expenseData);

  const enteredExpenseData = (newEnteredData) => {
    // console.log(newEnteredData); 
    let count = expenseData.length;
    let dateParts = newEnteredData.date.split('-');
    let formattedDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    let options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    let formattedDateString = formattedDate.toDateString('en-US', options); 
    const newExpenseData = {
      id : ++count,
      ...newEnteredData, 
      date : formattedDateString
    }
    // expenseData.push(newExpenseData);  
    console.log(expenseData); 
    setExpenseDataList((prevState)=> {
      return [newExpenseData,...prevState];
    });
  };

  const [filterYear,setFilterYear] = useState('2021');

  const changeFilterYear = (onselectYear) =>{
    setFilterYear((onselectYear));  
  };
  return (
    <div className="bg-gray-900 w-screen h-screen flex justify-center items-center flex-col">
      <div className="bg-gray-300 w-2/3 p-5 rounded-md m-2">
        <NewExpenseItem onEnteredExpenseData={enteredExpenseData}/>
      </div>
      <div className="bg-gray-800 w-2/3 p-5 rounded-md m-2">
        <FilterExpenseItem selected={filterYear} onChangeFilterYear={changeFilterYear}/>
        {expenseDataList.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            date={expense.date}
            item={expense.item}
            price={expense.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseItemPage;

import React, { useState, useEffect } from "react"; 
import NewExpenseItem from "../../Components/NewExpenseItem/NewExpenseItem";
import FilterExpenseItem from "../../Components/FilterExpenseItem/FilterExpenseItem";
import ExpenseItemList from "../../Components/ExpenseItemList/ExpenseItemList";
import Card from "../../Components/Card/Card";

const expenseData = [
  { id: 1, date: new Date().toDateString(), item: "asdfdasfadfd", price: 100 },
  { id: 2, date: new Date().toDateString(), item: "gjgdjsdjfgjf", price: 700 },
  { id: 3, date: new Date().toDateString(), item: "mbmvckrwjabj", price: 200 },
];

const ExpenseItemPage = () => {
  const [expenseDataList, setExpenseDataList] = useState(expenseData);

  const enteredExpenseData = (newEnteredData) => {
    // console.log(newEnteredData);
    let count = expenseData.length;
    let dateParts = newEnteredData.date.split("-");
    let formattedDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    let options = {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    };
    let formattedDateString = formattedDate.toDateString("en-US", options);
    const newExpenseData = {
      id: ++count,
      ...newEnteredData,
      date: formattedDateString,
    };
    // expenseData.push(newExpenseData);
    // console.log(newExpenseData);
    setExpenseDataList((prevState) => {
      return [newExpenseData, ...prevState];
    });
  };

  const [filterYear, setFilterYear] = useState("2024");

  let filterExpenseDataList;
  const changeFilterYear = (onselectYear) => {
    // console.log(onselectYear);
    setFilterYear(onselectYear);
    filterExpenseDataList = Object.values(expenseData).filter(
      (item) => new Date(item.date).getFullYear() === parseInt(onselectYear)
    );
    setExpenseDataList(filterExpenseDataList);
  };

  // const filterExpenseDataList = expenseData.filter((expense) => { 
  //   return new Date(expense.date).getFullYear() === parseInt(filterYear);
  // });

  // useEffect(() => {
  //   let ignore = false;
  //   if (!ignore) changeFilterYear(filterYear);
  //   return () => {
  //     ignore = true;
  //   };
  // }, []); 
  console.log(expenseDataList);
  return (
    <div className="bg-gray-900 w-screen h-screen flex justify-center items-center flex-col">
      <div className="bg-gray-300 w-2/3 p-3 rounded-md m-1">
        <NewExpenseItem onEnteredExpenseData={enteredExpenseData} />
      </div>
      <div className="bg-gray-800 w-2/3 p-3 rounded-md m-1">
        <Card items={expenseDataList}/>
        <FilterExpenseItem
          selected={filterYear}
          onChangeFilterYear={changeFilterYear}
        />
        <ExpenseItemList items={expenseDataList}/>
      </div>
    </div>
  );
};

export default ExpenseItemPage;

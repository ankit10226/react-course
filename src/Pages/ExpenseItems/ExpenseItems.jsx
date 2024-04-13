import React from "react";
import ExpenseItem from "../../Components/ExpenseItem/ExpenseItem";

const ExpenseItems = () => {
  const expenseData = [
    {id: 1, date: new Date().toDateString(), itemDesc: "asdfdasfadfdf", price: 100 },
    {id: 2, date: new Date().toDateString(), itemDesc: "gjgdjsdjfgjf", price: 700 },
    {id: 3, date: new Date().toDateString(), itemDesc: "mbmvckrwjabjhg", price: 200 },
  ];
  return (
    <div className="bg-gray-900 w-screen h-screen flex justify-center items-center">
      <div className="bg-gray-800 w-2/3 p-5 rounded-md">
        {expenseData.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            date={expense.date}
            item={expense.itemDesc}
            price={expense.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseItems;

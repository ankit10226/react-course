import React from "react";
import ExpenseItem from "../../Components/ExpenseItem/ExpenseItem";

const ExpenseItems = () => {
  const expenseData = [
    { date: new Date().toDateString(), itemDesc: "asdfdasfadfdf", price: 100 },
    { date: new Date().toDateString(), itemDesc: "gjgdjsdjfgjf", price: 700 },
    { date: new Date().toDateString(), itemDesc: "mbmvckrwjabjhg", price: 200 },
  ];
  return (
    <div className="bg-gray-900 w-screen h-screen flex justify-center items-center">
      <div className="bg-gray-800 w-2/3 p-5 rounded-md">
        {expenseData.map((expense, index) => (
          <ExpenseItem
            id={index}
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
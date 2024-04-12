import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({id,date,item,price}) => {  
  return (
    <div className="bg-gray-700 flex flex-wrap justify-between rounded-md my-3" id={id}>
      <div className="my-3 mx-5 text-white">{date}</div>
      <div className="my-3 mx-5 text-white">{item}</div>
      <div className="my-3 mx-5 text-white">{price}</div>
    </div>
  );
};

export default ExpenseItem;

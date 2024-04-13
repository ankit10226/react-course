import React, { useState } from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({id,date,item,price}) => {  
  const [itemName,setItemName] = useState(item);
  const clickHandler = () =>{
    let updatedItemName = prompt('Enter new Item Name : ');
    setItemName(updatedItemName);
  };
  return (
    <div className="bg-gray-700 flex flex-wrap justify-between rounded-md my-3 items-center" id={id}>
      <div className="my-3 mx-5 text-white">{date}</div>
      <div className="my-3 mx-5 text-white">{itemName}</div>
      <div className="my-3 mx-5 text-white">{price}</div>
      <button type="button" className="bg-slate-400 rounded-md my-3 mx-5 p-2" onClick={clickHandler}>click me</button>
    </div>
  );
};

export default ExpenseItem;

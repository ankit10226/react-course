import React, { useState } from "react"; 

const ExpenseItem = ({id,date,item,price}) => {  
  const [itemName,setItemName] = useState(item);
  const clickHandler = (e) =>{  
    let updatedItemName = prompt('Enter new Item Name : ');  
    if (updatedItemName !== null) {
      if(updatedItemName != ''){ 
        setItemName(updatedItemName);
      }else{ 
        return false;
      }
    }else{
      return false;
    }
  };
  return (
    <li>
      <div className="bg-gray-700 flex flex-wrap justify-between rounded-md my-1 items-center" id={id}>
        <div className="my-2 mx-2 text-white">{date}</div>
        <div className="my-2 mx-2 text-white">{itemName}</div>
        <div className="my-2 mx-2 text-white">{price}</div>
        <button type="button" className="bg-slate-400 rounded-md my-2 mx-2 p-2" onClick={clickHandler}>click me</button>
      </div>
    </li>

  );
};

export default ExpenseItem;

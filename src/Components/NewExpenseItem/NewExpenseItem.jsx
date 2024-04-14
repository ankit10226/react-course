import React, { useState } from "react";

const NewExpenseItem = ({onEnteredExpenseData}) => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredPrice,setEnteredPrice] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    // const [enteredData,setEnteredData] = useState({enteredTitle:'', enteredPrice:'', enteredDate:''});

    // const titleHandlerChange = (e) => {
    //     // console.log(e.target.value);
    //     // setEnteredTitle(e.target.value);
    //     // setEnteredData((prevState) => {
    //     //     return { ...prevState,
    //     //         enteredTitle:e.target.value
    //     //     };
    //     // });

    // };

    // const priceHandlerChange = (e) => {
    //     // setEnteredPrice(e.target.value);
    //     // setEnteredData((prevState) => {
    //     //     return { ...prevState,
    //     //         enteredPrice:e.target.value
    //     //     };
    //     // });
    // };

    // const dateHandlerChange = (e) => {
    //     // setEnteredDate(e.target.value);
    //     // setEnteredData((prevState) => {
    //     //     return { ...prevState,
    //     //         enteredDate:e.target.value
    //     //     };
    //     // });
    // };

    const inputHandlerChange = (identifier,value) =>{
        // console.log(identifier,value);
        if(identifier === 'title'){
            setEnteredTitle(value);
        }else if(identifier === 'price'){
            setEnteredPrice(value);
        }else{
            setEnteredDate(value);
        }
    };

    const submitFormHandler = (e) =>{
        e.preventDefault(); 
        
        const newEnteredData = {
            date:enteredDate,
            item:enteredTitle,
            price:parseInt(enteredPrice)
        }
        onEnteredExpenseData(newEnteredData);
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate(''); 

    };

  return (
    <form onSubmit={submitFormHandler}>
        <div className="grid grid-cols-3 gap-4">
            <div>
                <input type="text" name="addItem" id="addItem" className="w-full rounded-md py-1 px-3 border border-gray-800" value={enteredTitle} onChange={(event)=>inputHandlerChange('title',event.target.value)}/>
            </div>
            <div>
                <input type="number" name="addPrice" id="addPrice" className="w-full rounded-md py-1 px-3 border border-gray-800" min={0} value={enteredPrice} onChange={(event)=>inputHandlerChange('price',event.target.value)}/>
            </div>
            <div>
                <input type="date" name="addDate" id="addDate" className="w-full rounded-md py-1 px-3 border border-gray-800" value={enteredDate} onChange={(event)=>inputHandlerChange('date',event.target.value)}/>
            </div>
            <div className="col-span-3 text-right">
                <button type="submit" className="rounded-md py-1 px-4 border bg-gray-700 text-white">Add</button>
            </div>
        </div>
    </form>
  );
};

export default NewExpenseItem;

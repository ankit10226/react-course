import React, { useState } from 'react'

const AddNewItem = ({getAddedItem}) => {
    const [newItem,setNewItem] = useState('');
    const [errorBorder,setErrorBorder] = useState('');

    const inputHandlerChange = (value) =>{
        setNewItem(value); 
    }

    const submitFormHandler = (e) =>{
        e.preventDefault(); 
        if(newItem == ''){
            setErrorBorder('red');
            return;
        }else{
            setErrorBorder('');
        }

        const newAddedItem = newItem;

        getAddedItem(newAddedItem);
        setNewItem('');
    };
  return (
    <div>
        <form onSubmit={submitFormHandler}>
            <h3 className='font-semibold text-slate-500 my-2'>Add New Item</h3>
            <input type="text" name="newItem" id="newItem" className='shadow-lg border-2 rounded-md w-full px-2 py-1 font-semibold' value={newItem} onChange={(event)=>inputHandlerChange(event.target.value)} style={{borderColor:errorBorder}}/>
            <button type="submit" className="rounded-md py-1 px-4 border bg-slate-400 text-white my-2">Add Item</button>
        </form>
    </div>
  )
}

export default AddNewItem

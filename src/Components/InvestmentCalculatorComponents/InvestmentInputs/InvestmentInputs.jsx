import React from 'react'

const InvestmentInputs = () => {
  return (
    <form onSubmit={submitFormHandler}>
        <div className={`${!errorBorder ? styles.invalid : ''}`}>
            <h3 className='font-semibold text-slate-500 my-2'>Add New Item</h3>
            <input type="text" name="newItem" id="newItem" className='shadow-lg border-2 rounded-md w-full px-2 py-1 font-semibold' value={newItem} onChange={(event)=>inputHandlerChange(event.target.value)}/>
            <button type="submit" className="rounded-md py-1 px-4 border bg-slate-400 text-white my-2">Add Item</button>
        </div>
    </form>
  )
}

export default InvestmentInputs

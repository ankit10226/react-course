import React from 'react'

const FilterExpenseItem = ({selected,onChangeFilterYear}) => {

  const changeFilterYear = (e) =>{
    onChangeFilterYear(e.target.value); 
  };

  return (
    <div className="flex flex-wrap justify-between rounded-md items-center">
      <div className="my-3 mx-1 text-xl text-white font-bold tracking-wide">Filter Year</div> 
      <div className="my-3 mx-1 rounded-md">
        <select name="filterYear" id="filterYear" value={selected} onChange={changeFilterYear} className='rounded-md py-2 px-4'>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
        </select>
      </div> 
    </div>
  )
}

export default FilterExpenseItem

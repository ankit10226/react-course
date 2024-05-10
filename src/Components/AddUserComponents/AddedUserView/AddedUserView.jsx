import React from 'react'

const AddedUserView = ({user,age}) => {
  return (
    <li>
        <div className='text-slate-500 shadow-lg border-2 rounded-md w-full px-2 py-1 font-semibold my-2'> 
                {user} ({age} year old)
        </div>
    </li>
  )
}

export default AddedUserView

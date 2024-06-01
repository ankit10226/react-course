import React from 'react'

const Input = (props) => {
  return (
    <>
        <input type={props.type} name={props.name} id={props.id} className={props.className || `shadow-lg border-2 rounded-md w-full px-2 py-1 font-semibold`} value={props.value} onChange={props.onChange}/>
    </>
  )
}

export default Input

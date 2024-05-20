import React from 'react'

const Button = (props) => { 
  return (
    <button className={props.className || "rounded-md py-1 px-4 border bg-slate-400 text-white my-2 cursor-pointer"} type={props.type || 'button'} onClick={props.onClick} disabled={props.disabled || false}>
      {props.children}
    </button>
  )
}

export default Button

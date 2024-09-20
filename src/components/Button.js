
import React from 'react'

function Button({title, extraStlye, type,onClick}) {
  return (
    <button onClick={onClick} type={type} className={`${extraStlye} p-2 cursor-pointer hover:opacity-65 duration-300 rounded-md font-semibold text-[19px] text-center`}>{title}</button>
  )
}

export default Button

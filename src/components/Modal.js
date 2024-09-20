import React from 'react'

function Modal({children, setIsOpenModal,isOpenModal}) {
    
  return (
    <div onClick={(e) => e.target.id == "modal" ? setIsOpenModal(false) : ""} className={`fixed top-0 bottom-0 left-0 right-0 duration-300 z-40 backdrop-blur ${isOpenModal ? "scale-1" : "scale-0"}`} id='modal'>
        <div className='w-[600px] h-[400px] z-50 p-5 rounded-md bg-slate-300 absolute inset-0 m-auto'>{children}</div>
    </div>
  )
}

export default Modal

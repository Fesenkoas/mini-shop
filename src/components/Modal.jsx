import React from 'react'
import s from './Modal.module.css'

const Modal = ({children,title,onClose}) => {
  return (
    <>
    <div className={s.sModal} onClick={onClose}/>
    <div className={s.sWindow}>
      <h1 className={s.sTitle}>{title}</h1>
      {children}
    </div>
    </>
  )
}

export default Modal
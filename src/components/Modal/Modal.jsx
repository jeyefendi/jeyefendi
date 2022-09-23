import React from 'react'

const Modal = ({active, setActive, children}) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)} >
        <div className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default Modal
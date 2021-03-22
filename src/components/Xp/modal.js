/* eslint-disable jsx-a11y/alt-text */
import React from 'react';


const Modal = ({show, setShow, url}) => {
  const handleDragStart = (e) => e.preventDefault();

  return(
    show
      ? <div className="background" onClick={()=>setShow(false)}>
        <div className="modalImage">
          <img src={url} onDragStart={handleDragStart}/>
        </div>
        <button className="background--close" onClick={()=>setShow(false)}>Close</button>
        </div>
      : null)
;
  }

export default Modal;
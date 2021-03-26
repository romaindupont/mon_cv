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
        <div className="background--close" onClick={()=>setShow(false)}>
          <div className="background--close-bar1"></div>
          <div className="background--close-bar2"></div>
        </div>
        </div>
      : null)
;
  }

export default Modal;
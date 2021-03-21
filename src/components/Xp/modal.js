import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({show}) => {
  
  

  return(
    show
      ? ReactDOM.createPortal(
        <div className="background">
            <h1>truc</h1>
        </div>,
        document.body
      )
      : null)
;
  }

export default Modal;
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Modal = ({show, setShow, url}) => {
  const handleDragStart = (e) => e.preventDefault();
  const photo = [
     <div className="modalImage"><img src={url}/></div>,
      
  ]
  return(
    show
      ? <div className="background">
            <AliceCarousel mouseTracking autoWidth={50} >
              {photo}
            </AliceCarousel>
            <button className="background--close" onClick={()=>setShow(false)}>Close</button>
        </div>
      : null)
;
  }

export default Modal;
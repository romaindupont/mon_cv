/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import './style.scss';



const Cursor = ()=> {
   const [position, setPosition] = useState({
      x: 0,
      y: 0
  })
  const [linkHovered, setLinkHovered] = useState(false);
  const [imgHovered, setImgHovered] = useState(false);
  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
    document.querySelectorAll("img").forEach(el => {
      el.addEventListener("mouseover", () => setImgHovered(true));
      el.addEventListener("mouseout", () => setImgHovered(false));
    });
  };
  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
  };
  
  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };
  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, [addEventListeners,removeEventListeners]);
  
   const onMouseMove = (e) => {
    setInterval(setPosition({x: e.clientX, y: e.clientY}),100);
   };            

  return (
    <div className={classNames("cursor", {"cursor--linkHover":linkHovered,"cursor--imgHover":imgHovered })} style={{
      left: `${position.x}px`,
      top: `${position.y}px`
      }}
    />
  
  )}
export default Cursor;
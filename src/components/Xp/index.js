import React from 'react';
import './style.scss';
import Data from '../../data/data';
import Modal from './modal';
const Xp = ({show, setShow}) => {

const handleClick = () => {
  setShow(!show)
  console.log(show)
}
  return (
    <div id="lienexperiences" className="xp">
     <h2 className="xp-title">Expériences</h2>
     {Data.map((xp)=>(
       <div className="xp-container">
        <div className="xp-infos">
            <p className="xp-infos-description"><span className="xp-infos-description--date">{xp.year}</span>{xp.description}</p>
            <p className="xp-infos-techno"><span className="xp-infos-techno--title">Technologies : </span>{xp.technology}</p>
            <a className="xp-infos-link" href={xp.link}>{xp.link}</a>
        </div>
        <div className="xp-pictures">
          <img src={xp.picture} alt="" onClick={handleClick}/>
          <img src={xp.picture1} alt=""/>
          <img src={xp.picture2} alt=""/>
          <img src={xp.picture3} alt=""/>
        </div>
       </div>
     ))}
     <Modal show={show} />
    </div>
  );
}

export default Xp;
import React, {useState} from 'react';
import './style.scss';
import Data from '../../data/data';
import Modal from './modal';
const Xp = ({show, setShow}) => {
const [url, setUrl] = useState('');
const handleClick = (e) => {
  setShow(!show)
  const imageClick = e.target.src
  setUrl(imageClick);
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
        {xp.picture ? 
        <div className="xp-pictures">
          <img className="xp-pictures-img" src={xp.picture} alt="" onClick={handleClick}/>
          <img className="xp-pictures-img" src={xp.picture1} alt="" onClick={handleClick}/>
          <img className="xp-pictures-img" src={xp.picture2} alt="" onClick={handleClick}/>
          <img className="xp-pictures-img" src={xp.picture3} alt="" onClick={handleClick}/>
        </div>
          :null}
       </div>
     ))}
     <Modal show={show} setShow={setShow} url={url} />
    </div>
  );
}

export default Xp;
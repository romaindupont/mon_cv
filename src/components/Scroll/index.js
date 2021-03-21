import React, {useState} from 'react';
import classNames from 'classnames';
import { HashLink as Link } from 'react-router-hash-link';
import './style.scss';

const Scroll = () => {
  const [isHover, setIsHover] = useState(false)
  //console.log(isHover)
  return (
    <div className={classNames("scrollToTop", {'scrollToTop--nohover':isHover})} onMouseEnter={()=> setIsHover(false)}
                    onMouseLeave={()=> setIsHover(true)} >
        <Link className="scrollToTop-link--1" to="/accueil#lienaccueil"></Link>
        <Link className="scrollToTop-link--2" to="/accueil#lienaccueil"></Link>
    </div>

  );
}

export default Scroll;
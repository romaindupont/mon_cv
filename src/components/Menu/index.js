import './style.scss';
import classNames from 'classnames';
import React from 'react';

function Menu({open, setOpen}) {
  let url ='';
  return (
    <div className="app-menu">
      <div className={classNames("menu-modal", {'menu-modal--open':open})}></div>
        <nav className={classNames("menu-nav", {'menu-nav--open':open})}>
          <a href={url}>Accueil</a>
          <a href={url}>A propos</a>
          <a href={url}>Connaissances</a>
          <a href={url}>Diplômes</a>
          <a href={url}>Expériences</a>
          <a href={url}>Contact</a>
        </nav>
        
      <div className="menu" onClick={e => setOpen(!open)}>
        <div className={classNames("menu-burger", {'menu-burger--open':open})}>
          <div className={classNames("menu-burger-bar1", {'menu-burger--open-bar1':open})}></div>
          <div className={classNames("menu-burger-bar2", {'menu-burger--open-bar2':open})}></div>
          <div className={classNames("menu-burger-bar3", {'menu-burger--open-bar3':open})}></div>
        </div>
      </div>

    </div>
  );
}

export default Menu;
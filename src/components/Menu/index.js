import './style.scss';
import classNames from 'classnames';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Menu({open, setOpen}) {
    const closeMenu = () => {
        setOpen(!open);
    }
  return (
    <div className="app-menu">
      <div className={classNames("menu-modal", {'menu-modal--open':open})}></div>
        <nav className={classNames("menu-nav", {'menu-nav--open':open})}>
          <Link to="/accueil#lienaccueil" onClick={closeMenu}>Accueil</Link>
          <Link to="/a_propos#lienapropos" onClick={closeMenu}>A propos</Link>
          <Link to="/connaissance#lienconnaissances" onClick={closeMenu}>Connaissances</Link>
          <Link to="/diplomes#liendiplomes" onClick={closeMenu}>Diplômes</Link>
          <Link to="/experiences#lienexperiences" onClick={closeMenu}>Expériences</Link>
          <Link to="/contact#liencontact" onClick={closeMenu}>Contact</Link>

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
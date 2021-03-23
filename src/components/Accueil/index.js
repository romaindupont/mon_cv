import React from 'react';
import classNames from 'classnames';
import MaTete from '../../assets/img/tetefinal.png';
import Scroll from '../../assets/img/mouse.svg';
import './style.scss';

const Accueil = ({open}) => {
  
  return (
    <div id="lienaccueil" className={classNames("accueil", {'accueil--open':open})}>
      <h1 className="accueil-name">Romain Dupont</h1>
      <div className="accueil-ensemble">
          <div className="accueil-ensemble-rond">
            <img className="accueil-ensemble-picture" src={MaTete} alt="matete"/>
          </div>
      </div>
      <h2 className="accueil-title">Développeur Web & web mobile</h2>
    </div>
  );
}

export default Accueil;

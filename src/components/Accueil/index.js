import React from 'react';
import classNames from 'classnames';
import MaTete from '../../assets/img/tetefinal.png'
import './style.scss';

const Accueil = ({open}) => {
  
  return (
    <div className={classNames("accueil", {'accueil--open':open})}>
      <h1 className="accueil-name">Romain Dupont</h1>
      <div className="accueil-rond">
        <img className="accueil-picture" src={MaTete} alt="matete"/>
      </div>
      <h2 className="accueil-title">Développeur Web & web mobile</h2>
      <p className="accueil-scroll">scroll</p>
    </div>
  );
}

export default Accueil;

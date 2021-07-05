import React from 'react';
import './style.scss';

const Diplomes = () => {
  
  return (
    <div id="liendiplomes" className="diplomes">
      <h2 className="diplomes-title">Diplomes</h2>
      <p className="diplomes-names"><span className="diplomes-date">2021</span>Titre Pro Développeur web & web mobile niveau 5</p>
      <p className="diplomes-names"><span className="diplomes-date">2021</span>Formation O'clock</p>
      <p className="diplomes-names"><span className="diplomes-date">2005</span>DUT Logistique et Transport</p>
      <p className="diplomes-names"><span className="diplomes-date">2001</span>BEP Comptabilité</p>
    </div>
  );
}

export default Diplomes;
import React from 'react';
import html5 from '../../assets/img/html5.png';
import css3 from '../../assets/img/css3.png';
import js from '../../assets/img/js.png';
import lumen from '../../assets/img/lumen.png';
import mysql from '../../assets/img/mysql.png';
import php from '../../assets/img/php.png';
import psql from '../../assets/img/psql.png';
import python from '../../assets/img/python.png';
import react from '../../assets/img/react.png';
import redux from '../../assets/img/redux.png';
import sqlite from '../../assets/img/sqlite.png';
import sass from '../../assets/img/sass.png';
import './style.scss';

const Connaissances = () => {
  
  return (
    <div id="lienconnaissances" className="connaissances">
      <h2 className="connaissances-title">Mes Connaissances</h2>
      <div className="connaissances-images">
        <span tooltip="Html5"><img className="connaissances-images-logo" src={html5} alt="html5-logo"/></span>
        <span tooltip="CSS3"><img className="connaissances-images-logo" src={css3} alt="css3-logo"/></span>
        <span tooltip="Javascript"><img className="connaissances-images-logo" src={js} alt="js-logo"/></span>
        <span tooltip="PHP"><img className="connaissances-images-logo" src={php} alt="php-logo"/></span>
        <span tooltip="REACT"><img className="connaissances-images-logo" src={react} alt="react-logo"/></span>
        <span tooltip="React-Redux"><img className="connaissances-images-logo" src={redux} alt="redux-logo"/></span>
        <span tooltip="Python"><img className="connaissances-images-logo" src={python} alt="python-logo"/></span>
        <span tooltip="Postgresql"><img className="connaissances-images-logo" src={psql} alt="psql-logo"/></span>
        <span tooltip="Sqlite"><img className="connaissances-images-logo" src={sqlite} alt="sqlite-logo"/></span>
        <span tooltip="Mysql"><img className="connaissances-images-logo" src={mysql} alt="mysql-logo"/></span>
        <span tooltip="Lumen"><img className="connaissances-images-logo" src={lumen} alt="lumen-logo"/></span>
        <span tooltip="Sass/Scss"><img className="connaissances-images-logo" src={sass} alt="sass-logo"/></span>
      </div>
    </div>
  );
}

export default Connaissances;
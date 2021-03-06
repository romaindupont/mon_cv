import React, { useState, useEffect } from 'react';
import './style.scss';
import Menu from '../Menu';
import Accueil from '../Accueil';
import Apropos from '../Apropos';
import Diplomes from '../Diplomes';
import Connaissances from '../Connaissances';
import Xp from '../Xp';
import Contact from '../Contact';
import Scroll from '../Scroll';
import Cursor from '../Cursor';

const App = () => { 
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    //console.log(console.log(window.pageXOffset))
  })
  return (
    <div className="App">
      <Cursor />
      <Menu open={open} setOpen={setOpen} />
        <Accueil open={open} />
        <Apropos />
        <Diplomes />
        <Connaissances />
        <Xp show={show} setShow={setShow}/>
        <Contact />
        <Scroll />
        
    </div>

)}
export default App;

import React, { useState } from 'react';
import Menu from '../Menu';
import Accueil from '../Accueil';
import Apropos from '../Apropos';
import Diplomes from '../Diplomes';
import Connaissances from '../Connaissances';
import Xp from '../Xp';
import Contact from '../Contact';
const App = () => { 
  const [open, setOpen] = useState(false);
  
  return (
    <div className="App">
      <Menu open={open} setOpen={setOpen} />
      <Accueil open={open} />
      <Apropos />
      <Diplomes />
      <Connaissances />
      <Xp />
      <Contact />
    </div>

)}
export default App;

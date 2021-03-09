import React, { useState } from 'react';
import Menu from '../Menu';
import Accueil from '../Accueil';
import Apropos from '../Apropos';
import Diplomes from '../Diplomes';
import Connaissances from '../Connaissances';
import Xp from '../Xp';
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
    </div>

)}
export default App;

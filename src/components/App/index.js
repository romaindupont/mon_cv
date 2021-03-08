import React, { useState } from 'react';
import Menu from '../Menu';
import Accueil from '../Accueil';

const App = () => { 
  const [open, setOpen] = useState(false);
  
  return (
    <div className="App">
      <Menu open={open} setOpen={setOpen} />
      <Accueil open={open} />
    </div>

)}
export default App;

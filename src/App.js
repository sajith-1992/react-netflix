import React from 'react';
import './App.css';

import Banner from './Comoponents/Banner/Banner';
import RowPost from './Comoponents/RowPost/RowPost'
import NavBar from './Comoponents/NavBar/NavBar';
import { orginal, action } from './urls';





function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={orginal} title="Netflix orginals"  />
    <RowPost  url={action}  title="Netflix Movies"  isSmall />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import Banner from './Comoponents/Banner/Banner';
import RowPost from './Comoponents/RowPost/RowPost'
import NavBar from './Comoponents/NavBar/NavBar';




function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost/>
    </div>
  );
}

export default App;

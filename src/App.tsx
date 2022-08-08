import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Palette from "./pages/palette/Palette";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/palette'} element={<Palette />}/>
      </Routes>
    </div>
  );
}

export default App;

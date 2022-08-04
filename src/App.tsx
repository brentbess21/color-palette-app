import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Palette from "./pages/palette/Palette";
import seedColors from "./seedColors";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/palette'} element={<Palette palette={seedColors[1]}/>}/>
      </Routes>
    </div>
  );
}

export default App;

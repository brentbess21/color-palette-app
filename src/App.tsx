import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Palette from "./pages/palette/Palette";
import seedColors from "./seedColors";
import {generatePalette} from "./utils/colorHelpers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/palette'} element={<Palette palette={generatePalette(seedColors[1])}/>}/>
      </Routes>
    </div>
  );
}

export default App;

import React, {useEffect} from 'react';
import './App.scss';
import {Routes, Route, useParams} from 'react-router-dom';
import Palette from "./pages/palette/Palette";
import PaletteList from "./pages/paletteList/PaletteList";
import ErrorPage from "./pages/errorPage/ErrorPage";
import seedColors from "./seedColors";
import SingleColorPalette from "./pages/singleColorPalette/SingleColorPalette";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/palette/:paletteId/:colorId'} element={<SingleColorPalette />} />
        <Route path={'/palette/:id'} element={<Palette />}/>
        <Route path={'/'} element={<PaletteList palettes={seedColors} />}/>
        <Route path={'*'} element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;

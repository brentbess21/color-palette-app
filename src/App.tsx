import React from 'react';
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Palette from "./pages/palette/Palette";
import PaletteList from "./pages/paletteList/PaletteList";
import ErrorPage from "./pages/errorPage/ErrorPage";
import SingleColorPalette from "./pages/singleColorPalette/SingleColorPalette";
import NewPalettePage from "./pages/newPalettePage/NewPalettePage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/new-palette'} element={<NewPalettePage />}/>
        <Route path={'/palette/:paletteId/:colorId'} element={<SingleColorPalette />} />
        <Route path={'/palette/:id'} element={<Palette />}/>
        <Route path={'/'} element={<PaletteList />}/>
        <Route path={'*'} element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;

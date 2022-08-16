import { combineReducers } from "redux";
import paletteReducer from "./paletteReducer";
import colorsReducer from "./colorsReducer";

export default combineReducers<Model.StoreState>({
    paletteState: paletteReducer,
    colorsState: colorsReducer
})


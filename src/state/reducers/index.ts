import { combineReducers } from "redux";
import paletteReducer from "./paletteReducer";

export default combineReducers<Model.StoreState>({
    paletteState: paletteReducer
})


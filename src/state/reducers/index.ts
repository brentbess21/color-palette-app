import { combineReducers } from "redux";
import paletteReducer from "./paletteReducer";

export default combineReducers({
    palette: paletteReducer
})


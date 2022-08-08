import { PaletteActionTypes } from "../actions/paletteActions";
import {generatePalette} from "../../utils/colorHelpers";
import seedColors from "../../seedColors";

const initialPalette = generatePalette(seedColors[0])

interface PaletteState {
    palette: Model.Palette;
    sliderInfo: Model.SliderInfo
}

const initialPaletteState : PaletteState = {
    palette: initialPalette,
    sliderInfo: {
        level: 500
    }
}

const paletteReducer = (state : PaletteState = initialPaletteState, action: any) : PaletteState => {
    switch (action.type) {
        case(PaletteActionTypes.setLevel) :
            return ({...state, sliderInfo: {...state, level: action.payload}})
        default:
            return state
    }
}

export default paletteReducer;
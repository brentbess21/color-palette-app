import { PaletteActionTypes } from "../actions/paletteActions";
import {generatePalette} from "../../utils/colorHelpers";
import seedColors from "../../seedColors";

const initialPalette = generatePalette(seedColors[0])

const initialPaletteState : Model.PaletteState = {
    palette: initialPalette,
    sliderInfo: {
        level: 500
    },
    colorFormat: 'hex'
}

const paletteReducer = (state : Model.PaletteState = initialPaletteState, action: any) : Model.PaletteState => {
    switch (action.type) {
        case(PaletteActionTypes.setLevel) :
            return ({...state, sliderInfo: {...state, level: action.payload}});
        case(PaletteActionTypes.setColorFormat):
            return ({...state, colorFormat: action.payload});
        case(PaletteActionTypes.setPalette):
            return ({...state, palette: generatePalette(action.payload)})
        default:
            return state
    }
}

export default paletteReducer;
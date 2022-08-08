import { PaletteActionTypes } from "../actions/paletteActions";

interface InitialPaletteState {
    sliderInfo: {
        level: number;
    }
}

const initialPaletteState : InitialPaletteState = {
    sliderInfo: {
        level: 500
    }
}

const paletteReducer = (state : InitialPaletteState = initialPaletteState, action: any) => {
    switch (action.type) {
        case(PaletteActionTypes.setLevel) :
            return ({...state, sliderInfo: {...state, level: action.payload}})
        default:
            return state
    }
}

export default paletteReducer;
import  { ColorActionTypes } from "../actions/colorsActions";

const initialColorsState = {
    colors: []
}

const colorsReducer = (state : Model.ColorsState = initialColorsState, action: any) => {
    switch (action.type) {
        case(ColorActionTypes.addColor):
            return ({...state, colors: [...state.colors, action.payload]})
        default:
            return state
    }
}

export default colorsReducer;
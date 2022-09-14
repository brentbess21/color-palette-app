import  { ColorActionTypes } from "../actions/colorsActions";

const initialColorsState = {
    colors: []
}

const colorsReducer = (state : Model.ColorsState = initialColorsState, action: any) => {
    switch (action.type) {
        case(ColorActionTypes.addColor):
            return ({...state, colors: [...state.colors, action.payload]});
        case(ColorActionTypes.deleteColor):
            return ({...state, colors: state.colors.filter(color=> color !== action.payload)})
        case(ColorActionTypes.clearColors):
            return ({...state, colors: []});
        case(ColorActionTypes.setColorOrder):
            return ({...state, colors: action.payload})
        default:
            return state
    }
}

export default colorsReducer;
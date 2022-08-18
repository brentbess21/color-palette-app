
export enum ColorActionTypes {
    addColor = 'ADD_COLOR',
    clearColors = 'CLEAR_COLORS'
}

interface AddColorAction {
    type: ColorActionTypes.addColor;
    payload: Model.Color
}

interface ClearColorsAction {
    type: ColorActionTypes.clearColors;
}

export function addColor(name: string, color: any) : AddColorAction {
    return({type: ColorActionTypes.addColor, payload: {name: name, color: color.hex}})
}

export function clearColors() : ClearColorsAction {
    return({type: ColorActionTypes.clearColors})
}
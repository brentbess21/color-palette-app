
export enum ColorActionTypes {
    addColor = 'ADD_COLOR'
}

interface AddColorAction {
    type: ColorActionTypes.addColor;
    payload: Model.Color
}

export function addColor(name: string, color: any) : AddColorAction {
    return({type: ColorActionTypes.addColor, payload: {name: name, color: color.hex}})
}
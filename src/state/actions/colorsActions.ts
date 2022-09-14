export enum ColorActionTypes {
    addColor = 'ADD_COLOR',
    deleteColor = 'DELETE_COLOR',
    clearColors = 'CLEAR_COLORS',
    setColorOrder = 'SET_COLOR_ORDER'
}

interface AddColorAction {
    type: ColorActionTypes.addColor;
    payload: Model.Color;
}

interface DeleteColorAction {
    type: ColorActionTypes.deleteColor;
    payload: Model.Color;
}

interface ClearColorsAction {
    type: ColorActionTypes.clearColors;
}

interface SetColorOrderAction {
    type: ColorActionTypes.setColorOrder;
    payload: Model.Color[]
}

export function addColor(id: string | number, name: string, color: any) : AddColorAction {
    return({type: ColorActionTypes.addColor, payload: {id: id, name: name, color: color}})
}

export function deleteColor(color: Model.Color) :DeleteColorAction {
    return({type: ColorActionTypes.deleteColor, payload: color})
}

export function clearColors() : ClearColorsAction {
    return({type: ColorActionTypes.clearColors})
}

export function setColorOrder(colors: Model.Color[]) : SetColorOrderAction{
    return({type: ColorActionTypes.setColorOrder, payload: colors})
}
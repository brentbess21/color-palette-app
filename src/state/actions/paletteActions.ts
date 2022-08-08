
export enum PaletteActionTypes {
    setLevel = 'SET_LEVEL'
}

interface SetLevelAction {
    type: PaletteActionTypes.setLevel;
    payload: number | number[];
}


export const setLevel = (value: number | number[]) : SetLevelAction  => {
    return ({type: PaletteActionTypes.setLevel, payload: value})
}

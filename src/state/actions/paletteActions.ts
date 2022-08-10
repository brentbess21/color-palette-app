
export enum PaletteActionTypes {
    setLevel = 'SET_LEVEL',
    setColorFormat = 'SET_COLOR_FORMAT'
}

interface SetLevelAction {
    type: PaletteActionTypes.setLevel;
    payload: number | number[];
}

interface SetColorFormatAction {
    type: PaletteActionTypes.setColorFormat;
    payload: string;
}


export const setLevel = (value: number | number[]) : SetLevelAction  => {
    return ({type: PaletteActionTypes.setLevel, payload: value})
}

export const setColorFormat = (format: string) : SetColorFormatAction => {
    return ({type: PaletteActionTypes.setColorFormat, payload: format})
}

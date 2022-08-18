
export enum PaletteActionTypes {
    setLevel = 'SET_LEVEL',
    setColorFormat = 'SET_COLOR_FORMAT',
    setPalette = 'SET_PALETTE',
    savePalette = 'SAVE_PALETTE'
}

interface SetLevelAction {
    type: PaletteActionTypes.setLevel;
    payload: number | number[];
}

interface SetColorFormatAction {
    type: PaletteActionTypes.setColorFormat;
    payload: string;
}

interface SetPaletteAction {
    type: PaletteActionTypes.setPalette;
    payload: Model.StarterPalette;
}

interface SavePaletteAction {
    type: PaletteActionTypes.savePalette;
    payload: Model.StarterPalette
}


export const setLevel = (value: number | number[]) : SetLevelAction  => {
    return ({type: PaletteActionTypes.setLevel, payload: value})
}

export const setColorFormat = (format: string) : SetColorFormatAction => {
    return ({type: PaletteActionTypes.setColorFormat, payload: format})
}

export const setPalette = (palette: Model.StarterPalette) : SetPaletteAction => {
    return ({type: PaletteActionTypes.setPalette, payload: palette})
}

export const savePalette = (palette: Model.StarterPalette) : SavePaletteAction => {
    return ({type: PaletteActionTypes.savePalette, payload: palette})
}

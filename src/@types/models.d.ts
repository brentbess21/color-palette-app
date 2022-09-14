declare namespace Model {

    export interface StoreState {
        paletteState: PaletteState
        colorsState: ColorsState
    }

    export interface PaletteState {
        palettes: StarterPalette[]
        currentPalette: Model.Palette;
        sliderInfo: Model.SliderInfo;
        colorFormat: string;
    }

    export interface Palette {
        paletteName: string;
        id: string;
        emoji: string;
        colors: ColorLevels
    }

    export interface NewPalette {
        paletteName: string;
        id: string;
        emoji: string;
        colors: any;
    }

    export interface StarterPalette {
        paletteName: string;
        id: string;
        emoji: string;
        colors: Color[];
    }

    export interface ColorsState {
        colors: Color[] | [];
    }

    export interface Color {
        id: string | number
        name: string;
        color: string;
    }

    export interface DetailedColor {
        name: string;
        id: string;
        hex: string;
        rgb: string;
        rgba: string;
    }

    export interface ColorLevels {
        50: DetailedColor[];
        100: DetailedColor[];
        200: DetailedColor[];
        300: DetailedColor[];
        400: DetailedColor[];
        500: DetailedColor[];
        600: DetailedColor[];
        700: DetailedColor[];
        800: DetailedColor[];
        900: DetailedColor[];
    }

    export interface SliderInfo {
        level: number;
    }
}
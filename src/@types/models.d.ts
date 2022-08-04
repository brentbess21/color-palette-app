declare namespace Model {
    export interface Palette {
        paletteName: string;
        id: string;
        emoji: string;
        colors: Color[]
    }

    export interface Color {
        name: string;
        color: string;
    }
}
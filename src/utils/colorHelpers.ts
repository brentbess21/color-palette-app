import chroma from 'chroma-js';

const levels  = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette : Model.StarterPalette) : Model.NewPalette {
    let newPalette : Model.NewPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    };
    for( let level of levels) {
        newPalette.colors[level] = [];
    }
    for (let color of starterPalette.colors) {
        let scale = generateScale(color.color, 10).reverse();
        for (let i in scale) {
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i])
                    .css()
                    .replace("rgb", "rgba")
                    .replace(")", ",1.0)")
            });
        }
    }
    return newPalette
}

function getRange(hexColor: string) : string[] {
    const end = '#ffffff';
    return [
      chroma(hexColor).darken(1.4).hex(),
      hexColor,
      end
    ];
}

function generateScale(hexColor: string, numberOfColors: number) : string[] {
    return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
}

function getSingleColorShades(palette : Model.Palette, colorId : string | undefined) {
    let shades : any[] = [];
    let allColors = palette.colors;
    for(let key in allColors) {
        shades = shades.concat(
            allColors[key as unknown as keyof Model.ColorLevels].filter(color => color.id === colorId)
        )
    }
    return shades.slice(1);
}

export {generatePalette, getSingleColorShades}
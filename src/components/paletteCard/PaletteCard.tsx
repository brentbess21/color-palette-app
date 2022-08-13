import React from 'react';
import './PaletteCard.scss';

interface PaletteCardProps {
    palette: Model.StarterPalette
}

const PaletteCard : React.FC<PaletteCardProps> = (props: PaletteCardProps) : React.ReactElement => {
    const miniColorBoxes = props.palette.colors.map(colorBox => {
        return <div className={'miniColorBox'} style={{backgroundColor: colorBox.color}} key={colorBox.name}></div>
    })
    return (
        <div className={'paletteCard'}>
            <div className={'colorContainer'}>{miniColorBoxes}</div>
            <div className={'titleContainer'}>
                <h3>{props.palette.paletteName}</h3>
                <p>{props.palette.emoji}</p>
            </div>
        </div>
    )
}

export default PaletteCard;
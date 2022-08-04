import React from 'react';
import './Palette.scss';
import ColorCard from "../../components/colorCard/ColorCard";

interface PaletteProps {
    palette: Model.Palette
}

const Palette : React.FC<PaletteProps> = (props: PaletteProps ) => {
    return(
        <div className={'palette'}>
            {/*header goes here */}
            <div className={'palette-colors'}>
                {/* bunch of color boxes go here   */}
                {props.palette.colors.map(color => {
                    return <ColorCard color={color} />
                })}
            </div>
            {/* footer goes here   */}
        </div>
    )
}

export default Palette;
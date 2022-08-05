import React, {useState} from 'react';
import './Palette.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import ColorCard from "../../components/colorCard/ColorCard";

interface PaletteProps {
    palette: Model.Palette
}

const Palette : React.FC<PaletteProps> = (props: PaletteProps ) => {
    const [level, setLevel] = useState<number>(500);

    function changeLevel(value : number | number[]) : void {
        setLevel(value as number);
    }

    return(
        <div className={'palette'}>
            {/*header goes here */}
            <Slider defaultValue={level} min={100} max={900} step={100} onChange={changeLevel} />
            <div className={'palette-colors'}>
                {props.palette.colors[level as keyof Model.ColorLevels].map((color: Model.DetailedColor) => {
                    return <ColorCard key={color.id} color={color} />
                })}
            </div>
            {/* footer goes here   */}
        </div>
    )
}

export default Palette;
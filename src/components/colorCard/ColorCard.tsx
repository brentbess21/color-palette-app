import React, {useState} from 'react';
import './ColorCard.scss';
import classNames from "classnames";
import {connect} from "react-redux";

interface ColorCardStateProps {
    palette: Model.Palette;
    sliderInfo: Model.SliderInfo;
    colorFormat: string;
}

interface ColorCardCustomProps {
    color: Model.DetailedColor;
}

type ColorCardProps = ColorCardStateProps & ColorCardCustomProps;

const timeDelay = 1200;

const ColorCard : React.FC<ColorCardProps> = (props: ColorCardProps) : React.ReactElement => {
    const [copied, setCopied] = useState<boolean>(false);

    async function handleClick() : Promise<void> {
       await navigator.clipboard.writeText(props.color[props.colorFormat as keyof Model.DetailedColor]);
       setCopied(true);
       setTimeout(()=>{
           setCopied(false)
       }, timeDelay)
    }
    return (
        <div className={'colorCard'} style={{backgroundColor: props.color[props.colorFormat as keyof Model.DetailedColor], border: `4px solid ${props.color[props.colorFormat as keyof Model.DetailedColor]}`}}>
            <div style={{backgroundColor: props.color[props.colorFormat as keyof Model.DetailedColor]}} className={classNames({
                    copyOverlay: true,
                    active: copied
                })}
            />
            <div className={classNames({
                copyMessage: true,
                active: copied
            })}>
                <h1>Copied</h1>
                <p>{props.color[props.colorFormat as keyof Model.DetailedColor]}</p>
            </div>
            <div className={'copyContainer'}>
                <div className={'cardContent'}>
                    <span>{props.color.name}</span>
                </div>
                <button onClick={handleClick} className={'copyButton'}>Copy</button>
            </div>
            <span className={'moreInfo'}>More</span>
        </div>
    )
}

const MapStateToProps = (state: Model.StoreState) : Model.PaletteState => {
    return({
        palette: state.paletteState.palette,
        sliderInfo: state.paletteState.sliderInfo,
        colorFormat: state.paletteState.colorFormat
    })
}

export default connect(MapStateToProps)(ColorCard);
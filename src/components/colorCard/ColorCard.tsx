import React, {useState} from 'react';
import './ColorCard.scss';
import classNames from "classnames";
import {connect} from "react-redux";
import {useNavigate} from "react-router";
import chroma from 'chroma-js';

interface ColorCardStateProps {
    currentPalette: Model.Palette;
    sliderInfo: Model.SliderInfo;
    colorFormat: string;
}

interface ColorCardCustomProps {
    color: Model.DetailedColor;
    showMoreLink: boolean;
}

type ColorCardProps = ColorCardStateProps & ColorCardCustomProps;

const timeDelay = 1200;

const ColorCard : React.FC<ColorCardProps> = (props: ColorCardProps) : React.ReactElement => {
    const navigate = useNavigate();
    const [copied, setCopied] = useState<boolean>(false);
    const isDarkColor = chroma(props.color[props.colorFormat as keyof Model.DetailedColor]).luminance() <= 0.6;

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
                <div className={classNames({
                    cardContent: true,
                    darkColor: isDarkColor,
                })}>
                    <span>{props.color.name}</span>
                </div>
                <button onClick={handleClick} className={'copyButton'}>Copy</button>
            </div>
            {props.showMoreLink && <span onClick={()=>navigate(`/palette/${props.currentPalette.id}/${props.color.id}`)} className={(classNames({
                moreInfo: true,
                darkColor: isDarkColor
            }))}>More</span>}
        </div>
    )
}

const MapStateToProps = (state: Model.StoreState) : Model.PaletteState => {
    return({
        palettes: state.paletteState.palettes,
        currentPalette: state.paletteState.currentPalette,
        sliderInfo: state.paletteState.sliderInfo,
        colorFormat: state.paletteState.colorFormat
    })
}

export default connect(MapStateToProps)(ColorCard);
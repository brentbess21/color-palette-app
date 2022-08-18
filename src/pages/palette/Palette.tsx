import React, {useEffect} from 'react';
import './Palette.scss';
import ColorCard from "../../components/colorCard/ColorCard";
import Header from "../../components/header/Header";
import {connect} from "react-redux";
import {setPalette} from "../../state/actions/paletteActions";
import Footer from "../../components/footer/Footer";

interface PaletteStateProps {
    sliderInfo: Model.SliderInfo;
    currentPalette: Model.Palette;
    colorFormat: string;
}

interface PaletteDispatchProps {
    setPalette: (palette: Model.StarterPalette) => void;
}

interface PaletteCustomProps {
    // delete if there are no props here
}

type PaletteProps = PaletteStateProps & PaletteDispatchProps & PaletteCustomProps

const Palette : React.FC<PaletteProps> = (props: PaletteProps ) : React.ReactElement => {
    useEffect(()=> {

    },[])

    return(
        <div className={'palette'}>
            <Header displaySlider={true} />
            <div className={'paletteColors'}>
                {props.currentPalette.colors[props.sliderInfo.level as keyof Model.ColorLevels].map((color: Model.DetailedColor) => {
                    return <ColorCard key={color.id} color={color} showMoreLink={true} />
                })}
            </div>
            <Footer paletteName={props.currentPalette.paletteName} emoji={props.currentPalette.emoji} />
        </div>
    )
}

const MapStateToProps = (state: Model.StoreState ) : Model.PaletteState => {
    return ({
        palettes: state.paletteState.palettes,
        currentPalette: state.paletteState.currentPalette,
        sliderInfo : state.paletteState.sliderInfo,
        colorFormat: state.paletteState.colorFormat
    })
}

const MapDispatchToProps = {setPalette}

export default connect(MapStateToProps, MapDispatchToProps)(Palette);
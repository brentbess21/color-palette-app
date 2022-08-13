import React, {useEffect} from 'react';
import './Palette.scss';
import ColorCard from "../../components/colorCard/ColorCard";
import Header from "../../components/header/Header";
import {connect} from "react-redux";
import {setPalette} from "../../state/actions/paletteActions";
import Footer from "../../components/footer/Footer";

interface PaletteStateProps {
    sliderInfo: Model.SliderInfo;
    palette: Model.Palette;
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
            <Header />
            <div className={'paletteColors'}>
                {props.palette.colors[props.sliderInfo.level as keyof Model.ColorLevels].map((color: Model.DetailedColor) => {
                    return <ColorCard key={color.id} color={color} />
                })}
            </div>
            <Footer paletteName={props.palette.paletteName} emoji={props.palette.emoji} />
        </div>
    )
}

const MapStateToProps = (state: Model.StoreState ) : Model.PaletteState => {
    return ({
        palette: state.paletteState.palette,
        sliderInfo : state.paletteState.sliderInfo,
        colorFormat: state.paletteState.colorFormat
    })
}

const MapDispatchToProps = {setPalette}

export default connect(MapStateToProps, MapDispatchToProps)(Palette);
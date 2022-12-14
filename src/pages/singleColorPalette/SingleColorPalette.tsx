import React from 'react';
import './SingleColorPalette.scss';
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getSingleColorShades} from "../../utils/colorHelpers";
import ColorCard from "../../components/colorCard/ColorCard";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useNavigate} from "react-router";

interface SingleColorPaletteStateProps {
    currentPalette: Model.Palette;
}

interface SingleColorPaletteCustomProps {

}

type SingleColorPaletteProps = SingleColorPaletteStateProps & SingleColorPaletteCustomProps;

const SingleColorPalette: React.FC<SingleColorPaletteProps> = (props: SingleColorPaletteProps) : React.ReactElement => {
    const navigate = useNavigate();
    const { paletteId, colorId } = useParams();
    const singleColorShades = getSingleColorShades(props.currentPalette, colorId);


    return (
        <div className={'singleColorPalette'}>
            <Header displaySlider={false} />
            <div className={'paletteColors'}>
                {singleColorShades.map(color => {
                    return <ColorCard key={color.name} color={color} showMoreLink={false} />
                })}
                <div onClick={()=> navigate(`/palette/${paletteId}`)} className={'colorCard backBox'}>
                    <div className={'backBoxContent'}>
                        <ArrowBackIosIcon />
                        <h3>Back</h3>
                    </div>
                </div>
            </div>
            <Footer paletteName={props.currentPalette.paletteName} emoji={props.currentPalette.emoji} />
        </div>
    )
}

const MapStateToProps = (state: Model.StoreState) : Model.PaletteState => {
    return ({
        palettes: state.paletteState.palettes,
        currentPalette: state.paletteState.currentPalette,
        sliderInfo: state.paletteState.sliderInfo,
        colorFormat: state.paletteState.colorFormat
    })
}

export default connect(MapStateToProps)(SingleColorPalette);
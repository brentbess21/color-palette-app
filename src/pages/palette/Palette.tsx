import React from 'react';
import './Palette.scss';
import ColorCard from "../../components/colorCard/ColorCard";
import Header from "../../components/header/Header";
import {connect} from "react-redux";
import {setLevel} from "../../state/actions/paletteActions";

interface PaletteStateProps {
    sliderInfo: Model.SliderInfo
    palette: Model.Palette
}

interface PaletteDispatchProps {
//    delete if there is no props here
}

interface PaletteCustomProps {
}

type PaletteProps = PaletteStateProps & PaletteDispatchProps & PaletteCustomProps

const Palette : React.FC<PaletteProps> = (props: PaletteProps ) : React.ReactElement => {

    return(
        <div className={'palette'}>
            <Header />
            <div className={'palette-colors'}>
                {props.palette.colors[props.sliderInfo.level as keyof Model.ColorLevels].map((color: Model.DetailedColor) => {
                    return <ColorCard key={color.id} color={color} />
                })}
            </div>
            {/* footer goes here   */}
            <button onClick={()=> console.log(props)}>Click</button>
        </div>
    )
}

const MapStateToProps = (state: any ) => {
    return ({
        palette: state.paletteState.palette,
        sliderInfo : state.paletteState.sliderInfo
    })
}

const MapDispatchToProps = {setLevel}

export default connect(MapStateToProps, MapDispatchToProps)(Palette);
import React from 'react';
import './PaletteList.scss';
import {useNavigate} from "react-router";
import {connect} from "react-redux";
import {setPalette} from "../../state/actions/paletteActions";
import PaletteCard from "../../components/paletteCard/PaletteCard";

interface PaletteListStateProps {
    palettes: Model.StarterPalette[]
}

interface PaletteListDispatchProps {
    setPalette: (newPalette: Model.StarterPalette) => void;
}

interface PaletteListCustomProps {

}

type PaletteListProps = PaletteListStateProps & PaletteListDispatchProps & PaletteListCustomProps;

const PaletteList : React.FC<PaletteListProps> = (props: PaletteListProps) : React.ReactElement => {
    let navigate = useNavigate();
    return (
        <div className={'paletteList'}>
            <div className={'paletteListContainer'}>
                <div className={'headerContainer'}>
                    <h1>Color Palettes</h1>
                    <button onClick={()=>navigate('/new-palette')}>Create New Palette</button>
                </div>
                <div className={'miniPaletteContainer'}>
                    {props.palettes.map(palette=> {
                        return (
                            <div className={'miniPalette'} key={palette.id} onClick={()=> {
                                props.setPalette(palette);
                                navigate(`/palette/${palette.id}`);
                            }}>
                                <PaletteCard palette={palette} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const MapStateToProps = (state: Model.StoreState) => {
    return ({
        palettes: state.paletteState.palettes,
        currentPalette: state.paletteState.currentPalette
    })
}

const MapDispatchToProps = {setPalette}

export default connect(MapStateToProps, MapDispatchToProps)(PaletteList);
import React from 'react';
import './Header.scss';
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import {setLevel} from "../../state/actions/paletteActions";
import {connect} from "react-redux";

interface HeaderStateProps {
    sliderInfo: {
        level: number
    }
}

interface HeaderDispatchProps {
    setLevel: (value: number | number []) => void;
}

interface HeaderCustomProps {
//    delete if there is no props here
}

type HeaderProps = HeaderStateProps & HeaderDispatchProps & HeaderCustomProps;

const Header : React.FC<HeaderProps> = (props: HeaderProps) : React.ReactElement => {

    function changeLevel(value : number | number[]) : void {
        props.setLevel(value as number);
    }

    return(
        <header className={'header'}>
            <div className={'logo'} ></div>
            <div className={'slider'}>
                <p>Level {props.sliderInfo.level}</p>
                <Slider defaultValue={props.sliderInfo.level} min={100} max={900} step={100} onChange={changeLevel} />
            </div>
        </header>
    )
}

const MapStateToProps = (state: any) => {
    return ({
        sliderInfo: state.paletteState.sliderInfo
    })
}

const MapDispatchToProps = {setLevel}

export default connect(MapStateToProps, MapDispatchToProps)(Header);
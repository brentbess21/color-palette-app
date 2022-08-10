import React from 'react';
import './Header.scss';
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import {setLevel} from "../../state/actions/paletteActions";
import {connect} from "react-redux";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface HeaderStateProps {
    sliderInfo: Model.SliderInfo
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

    const handleChange = (event: SelectChangeEvent) => {
        console.log(event.target.value as string);
    };

    return(
        <header className={'header'}>
            <div className={'logo'} ></div>
            <div className={'slider'}>
                <p>Level {props.sliderInfo.level}</p>
                <Slider defaultValue={props.sliderInfo.level} min={100} max={900} step={100} onChange={changeLevel} />
            </div>
            <Box className={'selectContainer'} sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={'something'}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>

        </header>
    )
}

const MapStateToProps = (state: Model.StoreState) : {sliderInfo: Model.SliderInfo} => {
    return ({
        sliderInfo: state.paletteState.sliderInfo
    })
}

const MapDispatchToProps = {setLevel}

export default connect(MapStateToProps, MapDispatchToProps)(Header);
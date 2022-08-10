import React from 'react';
import './Header.scss';
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import {setColorFormat, setLevel} from "../../state/actions/paletteActions";
import {connect} from "react-redux";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface HeaderStateProps {
    palette: Model.Palette;
    sliderInfo: Model.SliderInfo;
    colorFormat: string;
}

interface HeaderDispatchProps {
    setLevel: (value: number | number []) => void;
    setColorFormat: (format : string) => void;
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
        props.setColorFormat(event.target.value as string);
    };

    return(
        <header className={'header'}>
            <div className={'logo'} ></div>
            <div className={'slider'}>
                <p>Level {props.sliderInfo.level}</p>
                <Slider defaultValue={props.sliderInfo.level} min={100} max={900} step={100} onChange={changeLevel} />
            </div>
            <Box className={'selectContainer'} sx={{ width: 320, height: 30 }}>
                <FormControl>
                    <InputLabel id="colorFormatLabel">Format</InputLabel>
                    <Select
                        labelId="colorFormatLabel"
                        value={props.colorFormat}
                        label="Format"
                        onChange={handleChange}
                    >
                        <MenuItem value={'hex'}>HEX - #ffffff</MenuItem>
                        <MenuItem value={'rgb'}>RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value={'rgba'}>RGBA - rgba(255, 255, 255, 0.5)</MenuItem>
                    </Select>
                </FormControl>
            </Box>

        </header>
    )
}

const MapStateToProps = (state: Model.StoreState) : Model.PaletteState => {
    return ({
        palette: state.paletteState.palette,
        sliderInfo: state.paletteState.sliderInfo,
        colorFormat: state.paletteState.colorFormat
    })
}

const MapDispatchToProps = {setLevel, setColorFormat}

export default connect(MapStateToProps, MapDispatchToProps)(Header);
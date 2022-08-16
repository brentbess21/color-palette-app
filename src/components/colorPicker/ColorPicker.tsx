import React, {useState} from 'react';
import './ColorPicker.scss';
import {ChromePicker} from "react-color";
import {connect} from "react-redux";
import {addColor, ColorActionTypes} from "../../state/actions/colorsActions";

interface ColorPickerStateProps {
    colors: Model.Color[];
}

interface ColorPickerDispatchProps {
    addColor: (name: string, color: any)=> void ;
}

interface ColorPickerCustomProps{

}

type ColorPickerProps = ColorPickerStateProps & ColorPickerDispatchProps & ColorPickerCustomProps;

const ColorPicker: React.FC<ColorPickerProps> = (props: ColorPickerProps) : React.ReactElement => {
    const [pickedColor, setPickedColor] = useState<any>('#0000FF');


    function handleAddColor(){
        console.log(pickedColor)
        props.addColor('random color', pickedColor)
    }

    return (
        <div className={'colorPicker'}>
            <h1>Design Your Palette</h1>
            <div className={'buttonContainer'}>
                <button>Clear Palette</button>
                <button>Random Color</button>
            </div>
            <ChromePicker color={pickedColor} onChange={(color)=>setPickedColor(color)}/>
            <button onClick={handleAddColor}>Add Color</button>
        </div>
    )
}

const MapStateToProps = (state: Model.StoreState) : Model.ColorsState => {
    return ({
        colors: state.colorsState.colors
    })
}

const MapDispatchToProps = {addColor}

export default connect(MapStateToProps, MapDispatchToProps)(ColorPicker);
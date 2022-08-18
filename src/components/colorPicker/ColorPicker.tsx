import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import './ColorPicker.scss';
import {ChromePicker} from "react-color";
import {connect} from "react-redux";
import {addColor, clearColors} from "../../state/actions/colorsActions";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

interface ColorPickerStateProps {
    colors: Model.Color[];
}

interface ColorPickerDispatchProps {
    addColor: (name: string, color: any)=> void ;
    clearColors: ()=> void;
}

interface ColorPickerCustomProps{

}

type ColorPickerProps = ColorPickerStateProps & ColorPickerDispatchProps & ColorPickerCustomProps;

const ColorPicker: React.FC<ColorPickerProps> = (props: ColorPickerProps) : React.ReactElement => {
    const [pickedColor, setPickedColor] = useState<any>('#0000FF');
    const [formValues, setFormValues] = useState<string>('');

    useEffect(()=> {
        ValidatorForm.addValidationRule('uniqueName', (value)=> {
            return props.colors.every(({name})=> name.toLowerCase() !== value.toLowerCase())
        });
        //todo: figure out better implementation of unique color validator

        // ValidatorForm.addValidationRule('uniqueColor', (value)=> {
        //     return props.colors.every(({color})=> color !== pickedColor.hex)
        // })
    }, [formValues])

    function handleSubmit(e: FormEvent){
        e.preventDefault()
        props.addColor(formValues, pickedColor);
        setFormValues('');
    }

    function handleChange(e: ChangeEvent<HTMLFormElement>) {
        setFormValues(e.target.value);
    }

    return (
        <div className={'colorPicker'}>
            <h1>Design Your Palette</h1>
            <div className={'buttonContainer'}>
                <button onClick={()=>{props.clearColors()}}>Clear Palette</button>
                <button>Random Color</button>
            </div>
            <ChromePicker color={pickedColor} onChange={(color)=>setPickedColor(color)}/>
            <ValidatorForm className={'inputContainer'} onSubmit={handleSubmit}>
                <TextValidator label={'Color Name'} className={'colorInput'} name={'colorName'} value={formValues} onChange={handleChange} validators={['required', 'uniqueName']} errorMessages={['Color name is required', 'That name has already been used']} />
                <button type={'submit'}>Add Color</button>
            </ValidatorForm>
        </div>
    )
}

const MapStateToProps = (state: Model.StoreState) : Model.ColorsState => {
    return ({
        colors: state.colorsState.colors
    })
}

const MapDispatchToProps = {addColor, clearColors}

export default connect(MapStateToProps, MapDispatchToProps)(ColorPicker);
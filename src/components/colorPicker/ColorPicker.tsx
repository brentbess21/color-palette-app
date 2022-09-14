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
    addColor: (id: string | number, name: string, color: any)=> void ;
    clearColors: ()=> void;
}

interface ColorPickerCustomProps{

}

type ColorPickerProps = ColorPickerStateProps & ColorPickerDispatchProps & ColorPickerCustomProps;

const ColorPicker: React.FC<ColorPickerProps> = (props: ColorPickerProps) : React.ReactElement => {
    const [pickedColor, setPickedColor] = useState<any>('#0000FF');
    const [formValues, setFormValues] = useState<string>('');
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    useEffect(()=> {
        ValidatorForm.addValidationRule('uniqueName', (value)=> {
            return props.colors.every(({name})=> name.toLowerCase() !== value.toLowerCase())
        });
        //todo: figure out better implementation of unique color validator

        // ValidatorForm.addValidationRule('uniqueColor', (value)=> {
        //     return props.colors.every(({color})=> color !== pickedColor.hex)
        // })
    }, [formValues]);

    useEffect(()=>{
        if(!isDisabled && props.colors.length >= 20){
            setIsDisabled(true)
        }

        if(isDisabled && props.colors.length < 20){
            setIsDisabled(false);
        }

    },[props.colors])

    function generateRandomColor(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const randomColor = '#' + [r, g, b].map(x => {
            const hex = x.toString(16)
            return hex.length === 1 ? '0' + hex : hex
        }).join('');
        const randomColorName = `Random Color ${Date.now()}`
        props.addColor(randomColorName,randomColorName, randomColor);
        setFormValues('');
    }

    function handleSubmit(e: FormEvent){
        e.preventDefault()
        props.addColor(formValues, formValues, pickedColor.hex);
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
                <button onClick={generateRandomColor} disabled={isDisabled}>Random Color</button>
            </div>
            <ChromePicker color={pickedColor} onChange={(color)=>setPickedColor(color)}/>
            <ValidatorForm className={'inputContainer'} onSubmit={handleSubmit}>
                <TextValidator autoFocus label={'Color Name'} className={'colorInput'} name={'colorName'} value={formValues} onChange={handleChange} validators={['required', 'uniqueName']} errorMessages={['Color name is required', 'That name has already been used']} />
                <button type={'submit'} disabled={isDisabled} style={{backgroundColor: pickedColor.hex}}>Add Color</button>
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
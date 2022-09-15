import React, {ChangeEvent, useEffect, useState} from 'react';
import './PopUpForm.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {connect} from "react-redux";
import {savePalette} from "../../state/actions/paletteActions";
import {useNavigate} from "react-router";
import {clearColors} from "../../state/actions/colorsActions";
import data from '@emoji-mart/data'
// @ts-ignore
import Picker from '@emoji-mart/react';


interface PopUpFormStateProps {
    colors: Model.Color[]
}

interface PopUpFormDispatchProps {
    savePalette: (palette: Model.StarterPalette)=> void;
    clearColors: ()=> void;
}

interface PopUpFormCustomProps {
    isPopUpOpen: boolean;
    handlePopUpClose: ()=> void;
    popUpStage: 'form' | 'emoji';
    setPopUpStage: (popUpStage: 'form' | 'emoji') => void;
}

type PopUpFormProps = PopUpFormStateProps & PopUpFormDispatchProps & PopUpFormCustomProps;

const PopUpForm : React.FC<PopUpFormProps> = (props: PopUpFormProps) => {
    const navigate = useNavigate();
    const [paletteName, setPaletteName] = useState<string>('');
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    useEffect(()=>{
        if(paletteName.length >= 1){
            setIsDisabled(false);
            return
        }
        setIsDisabled(true);
    }, [paletteName]);

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setPaletteName(e.target.value)
    }

    function handleSubmit(emoji: any){
        const newPalette : Model.StarterPalette = {
            paletteName: paletteName,
            emoji: emoji.native,
            id: paletteName.toLowerCase().replace(/ /g, "-"),
            colors: props.colors
        }
        props.savePalette(newPalette);
        props.clearColors();
        navigate('/');
    }

    function renderNameForm() : React.ReactNode{
        return (
            <Dialog open={props.isPopUpOpen} onClose={props.handlePopUpClose}>
                <DialogTitle>Almost Done!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To continue saving your new palette, please provide a name.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Enter a Palette Name"
                        type="text"
                        fullWidth
                        variant="filled"
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handlePopUpClose}>Cancel</Button>
                    <Button disabled={isDisabled} onClick={()=>props.setPopUpStage('emoji')}>Next</Button>
                </DialogActions>
            </Dialog>
        )
    }

    function renderEmojiForm(): React.ReactNode{
        return (
            <Dialog open={props.popUpStage === 'emoji'} onClose={props.handlePopUpClose}>
                <Picker title={'Pick an emoji for your new palette'} data={data} onEmojiSelect={handleSubmit} />
            </Dialog>
        )
    }

    return (
        <div className={'popUpForm'}>
            <Dialog open={props.isPopUpOpen} onClose={props.handlePopUpClose}>
                {props.popUpStage === 'emoji'? renderEmojiForm() : renderNameForm()}
            </Dialog>
        </div>
    );
}

const MapStateToProps = (state: Model.StoreState) : Model.ColorsState => {
    return ({
        colors: state.colorsState.colors
    })
}

const MapDispatchToProps = {savePalette, clearColors}

export default connect(MapStateToProps, MapDispatchToProps)(PopUpForm);
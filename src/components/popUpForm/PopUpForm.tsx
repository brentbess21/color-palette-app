import React, {ChangeEvent, useEffect, useState} from 'react';
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

interface PopUpFormStateProps {
    colors: Model.Color[]
}

interface PopUpFormDispatchProps {
    savePalette: (palette: Model.StarterPalette)=> void;
}

interface PopUpFormCustomProps {
    isPopUpOpen: boolean;
    handlePopUpClose: ()=> void;
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

    function handleSubmit(){
        const newPalette : Model.StarterPalette = {
            paletteName: paletteName,
            emoji: 'put emoji here',
            id: paletteName.toLowerCase().replace(/ /g, "-"),
            colors: props.colors
        }
        props.savePalette(newPalette);
        navigate('/');
    }

    return (
        <div className={'popUpForm'}>
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
                    <Button disabled={isDisabled} onClick={handleSubmit}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const MapStateToProps = (state: Model.StoreState) : Model.ColorsState => {
    return ({
        colors: state.colorsState.colors
    })
}

const MapDispatchToProps = {savePalette}

export default connect(MapStateToProps, MapDispatchToProps)(PopUpForm);
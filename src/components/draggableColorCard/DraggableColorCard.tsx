import React from 'react';
import './DraggableColorCard.scss';
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {connect} from "react-redux";
import {deleteColor} from "../../state/actions/colorsActions";

interface DraggableColorCardStateProps {

}

interface DraggableColorCardDispatchProps {
    deleteColor: (color: Model.Color) => void;
}

interface DraggableColorCardCustomProps {
    color: Model.Color
}

type DraggableColorCardProps = DraggableColorCardStateProps & DraggableColorCardDispatchProps & DraggableColorCardCustomProps;

const DraggableColorCard : React.FC<DraggableColorCardProps> = (props: DraggableColorCardProps) : React.ReactElement => {

    function handleDelete() {
        props.deleteColor(props.color)
    }

    return (
        <div className={'draggableColorCard'} style={{backgroundColor: props.color.color}}>
            <div className={'cardContent'}>
                <span>{props.color.name}</span>
                <IconButton>
                    <DeleteForeverIcon onClick={handleDelete} className={'deleteIcon'} />
                </IconButton>
            </div>
        </div>
    )
}

const MapStateToProps = (state: Model.StoreState) : Model.ColorsState => {
    return ({
        colors: state.colorsState.colors
    })
}

const MapDispatchToProps = {deleteColor}

export default connect(MapStateToProps, MapDispatchToProps)(DraggableColorCard);
import React from 'react';
import './DraggableColorCard.scss';

interface DraggableColorCardProps {
    color: Model.Color
}

const DraggableColorCard : React.FC<DraggableColorCardProps> = (props: DraggableColorCardProps) : React.ReactElement => {
    return (
        <div className={'draggableColorCard'} style={{backgroundColor: props.color.color}}>
            <span>{props.color.name}</span>
        </div>
    )
}

export default DraggableColorCard;
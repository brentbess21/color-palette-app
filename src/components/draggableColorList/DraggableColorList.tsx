import React from 'react';
import './DraggableColorList.scss';
import DraggableColorCard from "../draggableColorCard/DraggableColorCard";
import { ReactSortable } from "react-sortablejs";

interface DraggableColorListCustomProps {
    colors: Model.Color[];
    setColorOrder: (colors: Model.Color[]) => void;
}

type DraggableColorListProps = DraggableColorListCustomProps

const DraggableColorList: React.FC<DraggableColorListProps> = (props: DraggableColorListProps) :React.ReactElement => {

    function renderDraggableColorList(){

    }
    return (
        <ReactSortable list={props.colors} setList={props.setColorOrder} className={'draggableColorList'}>
            {props.colors.map(color=> {
                return <DraggableColorCard color={color} key={color.name} />
            })}
        </ReactSortable>
    )
}

export default DraggableColorList;
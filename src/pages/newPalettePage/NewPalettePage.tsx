import React from 'react';
import './NewPalettePage.scss';
import SlideOutDrawer from "../../components/slideOutDrawer/SlideOutDrawer";
import ColorPicker from "../../components/colorPicker/ColorPicker";
import {connect} from "react-redux";
import DraggableColorList from "../../components/draggableColorList/DraggableColorList";
import { SortEnd, SortEvent } from "react-sortable-hoc";
import { arrayMoveImmutable } from 'array-move'
import {setColorOrder} from "../../state/actions/colorsActions";

interface NewPalettePageStateProps {
    colors: Model.Color[];
}

interface NewPalettePageDispatchProps {
    setColorOrder: (colors: Model.Color[])=> void
}

interface NewPalettePageCustomProps {

}

type NewPalettePageProps = NewPalettePageStateProps & NewPalettePageDispatchProps & NewPalettePageCustomProps;

const NewPalettePage : React.FC<NewPalettePageProps> = (props: NewPalettePageProps) : React.ReactElement => {

    function renderDraggablePalette() : React.ReactElement {
        return (
            <div className={'palette'}>
                <DraggableColorList colors={props.colors} setColorOrder={props.setColorOrder} />
            </div>
        )
    }

    return (
        <div className={'newPalettePage'}>
            <h1>New Palette</h1>
            <SlideOutDrawer colorPickerComponent={<ColorPicker />} renderDraggablePalette={renderDraggablePalette} />
        </div>
    )
}

const MapStateToProps = (state: Model.StoreState) : Model.ColorsState => {
    return({
        colors: state.colorsState.colors
    })
}

const MapDispatchToProps = {setColorOrder}

export default connect(MapStateToProps, MapDispatchToProps)(NewPalettePage);
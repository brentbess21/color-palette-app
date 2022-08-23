import React from 'react';
import './NewPalettePage.scss';
import SlideOutDrawer from "../../components/slideOutDrawer/SlideOutDrawer";
import ColorPicker from "../../components/colorPicker/ColorPicker";
import {connect} from "react-redux";
import DraggableColorCard from "../../components/draggableColorCard/DraggableColorCard";

interface NewPalettePageStateProps {
    colors: Model.Color[];
}

interface NewPalettePageDispatchProps {

}

interface NewPalettePageCustomProps {

}

type NewPalettePageProps = NewPalettePageStateProps & NewPalettePageDispatchProps & NewPalettePageCustomProps;

const NewPalettePage : React.FC<NewPalettePageProps> = (props: NewPalettePageProps) : React.ReactElement => {

    function renderDraggablePalette() : React.ReactElement {
        return (
            <div className={'palette'}>
                {props.colors.map(color=> {
                    return <DraggableColorCard color={color} key={color.name} />
                })}
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

export default connect(MapStateToProps)(NewPalettePage);
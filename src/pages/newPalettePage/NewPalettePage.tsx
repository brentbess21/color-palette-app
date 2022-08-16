import React from 'react';
import './NewPalettePage.scss';
import SlideOutDrawer from "../../components/slideOutDrawer/SlideOutDrawer";
import ColorPicker from "../../components/colorPicker/ColorPicker";

const NewPalettePage : React.FC = () : React.ReactElement => {
    return (
        <div className={'newPalettePage'}>
            <h1>New Palette</h1>
            <SlideOutDrawer colorPickerComponent={<ColorPicker />} />
        </div>
    )
}

export default NewPalettePage;
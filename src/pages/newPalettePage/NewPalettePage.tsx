import React from 'react';
import './NewPalettePage.scss';
import SlideOutDrawer from "../../components/slideOutDrawer/SlideOutDrawer";

const NewPalettePage : React.FC = () : React.ReactElement => {
    return (
        <div className={'newPalettePage'}>
            <h1>New Palette</h1>
            <SlideOutDrawer />
        </div>
    )
}

export default NewPalettePage;
import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {useNavigate} from "react-router";
import NewPaletteHeader from "../newPaletteHeader/NewPaletteHeader";

export const drawerWidth = 320;

interface SlideOutDrawerProps {
    colorPickerComponent: React.ReactElement;
    renderDraggablePalette: ()=> React.ReactElement;
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    height: '85vh',
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const SlideOutDrawer : React.FC<SlideOutDrawerProps> = (props: SlideOutDrawerProps) : React.ReactElement => {
    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);
    const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);

    function handleDrawerOpen(){
        setIsDrawerOpen(true);
    };

    function handleDrawerClose(){
        setIsDrawerOpen(false);
    };

    function handlePopUpOpen() {
        setIsPopUpOpen(true);
    }

    function handlePopUpClose() {
        setIsPopUpOpen(false);
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <NewPaletteHeader
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                isDrawerOpen={isDrawerOpen}
                handlePopUpOpen={handlePopUpOpen}
                handlePopUpClose={handlePopUpClose}
                isPopUpOpen={isPopUpOpen}
            />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={isDrawerOpen}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {props.colorPickerComponent}
            </Drawer>
            <Main open={isDrawerOpen}>
                <DrawerHeader />
                {props.renderDraggablePalette()}
            </Main>
        </Box>
    );
}

export default SlideOutDrawer;

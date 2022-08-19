import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate} from "react-router";
import {Button} from "@mui/material";
import PopUpForm from "../popUpForm/PopUpForm";

const drawerWidth = 320;

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

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
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
    const [open, setOpen] = useState<boolean>(true);
    const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);

    function handleDrawerOpen(){
        setOpen(true);
    };

    function handleDrawerClose(){
        setOpen(false);
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
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography onClick={()=>navigate('/')} variant="h6" noWrap component="div">
                            Create New Palette
                        </Typography>
                    </Box>
                    <Box>
                        <PopUpForm isPopUpOpen={isPopUpOpen} handlePopUpClose={handlePopUpClose} />
                        <Button variant={'contained'} color={'secondary'} onClick={handlePopUpOpen}>Save Palette</Button>
                        <IconButton
                            color={'inherit'}
                            aria-label={'home button'}
                            onClick={()=>navigate('/')}
                            sx={{marginLeft: 4}}
                        >
                            <HomeIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
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
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {props.colorPickerComponent}
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {props.renderDraggablePalette()}
            </Main>
        </Box>
    );
}

export default SlideOutDrawer;

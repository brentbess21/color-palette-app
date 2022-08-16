import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
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
import {ChromePicker, Color, ColorResult} from 'react-color';

const drawerWidth = 320;

interface SlideOutDrawerProps {
    colorPickerComponent: React.ReactElement;
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
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
    const theme = useTheme();
    const [open, setOpen] = useState<boolean>(true);
    const [color, setColor] = useState<any>('#0000FF');
    const [colors] = useState<any>([]);

    function handleDrawerOpen(){
        setOpen(true);
    };

    function handleDrawerClose(){
        setOpen(false);
    };

    function addNewColor() {
        colors.push(color)
        console.log(colors)
    }

    function renderColorList() {
        return (
            <ul>
                {colors.map((addedColor: ColorResult) =>{
                    return <li style={{backgroundColor: addedColor.hex}}>{addedColor.hex}</li>
                })}
            </ul>
        )
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
                        <Typography variant="h6" noWrap component="div">
                            Create New Palette
                        </Typography>
                    </Box>
                    <IconButton
                        color={'inherit'}
                        aria-label={'home button'}
                        onClick={()=>navigate('/')}
                    >
                        <HomeIcon />
                    </IconButton>
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

                {/*<Typography variant={'h3'}>Design Your Palette</Typography>*/}
                {/*<Box sx={{display: 'flex'}}>*/}
                {/*    <Button variant={'contained'} color={'secondary'}>Clear Palette</Button>*/}
                {/*    <Button variant={'contained'} color={'primary'}>Random Color</Button>*/}
                {/*</Box>*/}
                {/*<ChromePicker color={color} onChange={(color)=>setColor(color)}/>*/}
                {/*<Button onClick={addNewColor} variant={'contained'} color={'primary'} style={{backgroundColor: color.hex}}>Add Color</Button>*/}
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {renderColorList()}
            </Main>
        </Box>
    );
}

export default SlideOutDrawer;

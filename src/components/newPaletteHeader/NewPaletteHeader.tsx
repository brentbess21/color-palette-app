import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import PopUpForm from "../popUpForm/PopUpForm";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {useNavigate} from "react-router";
import CssBaseline from "@mui/material/CssBaseline";
import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { drawerWidth } from "../slideOutDrawer/SlideOutDrawer";

interface NewPaletteHeaderProps {
    handleDrawerOpen : ()=> void;
    handleDrawerClose: ()=> void;
    isDrawerOpen: boolean;
    handlePopUpOpen: ()=> void;
    handlePopUpClose: ()=> void;
    isPopUpOpen: boolean;
    popUpStage: 'form' | 'emoji';
    setPopUpStage: (popUpStage:'form' | 'emoji')=> void;
}


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

const NewPaletteHeader : React.FC<NewPaletteHeaderProps> = (props: NewPaletteHeaderProps) : React.ReactElement => {
    let navigate = useNavigate();
    return (
        <Box>
            <CssBaseline />
            <AppBar position="fixed" open={props.isDrawerOpen}>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={props.handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(props.isDrawerOpen && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography onClick={()=>navigate('/')} variant="h6" noWrap component="div">
                            Create New Palette
                        </Typography>
                    </Box>
                    <Box>
                        <PopUpForm isPopUpOpen={props.isPopUpOpen} handlePopUpClose={props.handlePopUpClose} popUpStage={props.popUpStage} setPopUpStage={props.setPopUpStage} />
                        <Button variant={'contained'} color={'secondary'} onClick={props.handlePopUpOpen}>Save Palette</Button>
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
        </Box>
    )
}

export default NewPaletteHeader;
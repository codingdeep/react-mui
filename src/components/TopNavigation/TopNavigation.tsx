import React from 'react';
import './TopNavigation.css'
import {AppBar, Box, Button, Grid, Stack, Toolbar, Typography} from "@mui/material";
import {appRoutes} from "../../appRoutes";
import {useRouterActions} from 'react-resource-router';
import LoginModalButton from '../Login/LoginModalButton/LoginModalButton';


interface Props {

}


const TopNavigation: React.FC<Props> = () => {
    const {push} = useRouterActions();

    function renderLogo() {
        return (
            <Grid item>
                <Typography>LOGO</Typography>
            </Grid>
        )
    }

    function renderMainMenu() {
        return (
            <Grid item>
                <Stack direction="row" spacing={2}>
                    {appRoutes.filter(route => route.name !== 'login' && route.name !== 'register').map((route) => {
                        const {name, path} = route;
                        return (
                            <Button onClick={() => push(path)} key={path}>{name}</Button>
                        )
                    })}
                </Stack>
            </Grid>
        )
    }


    function renderAuthMenu() {
        return (
            <Grid item>
                <Stack direction="row" spacing={2}>
                    {/*<Button onClick={() => push('/login')} variant="contained">Login</Button>*/}
                    <LoginModalButton/> 
                    <Button onClick={() => push('/register')} variant="outlined">Register</Button>
                </Stack>
            </Grid>
        )
    }

    return (
        <Box flexGrow={1}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        {renderLogo()}
                        {renderMainMenu()}
                        {renderAuthMenu()}
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default TopNavigation;

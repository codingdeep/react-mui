import React, {useState} from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import PageContainer from '../components/PageContainer/PageContainer';
import {Grid, Paper, Box, Typography, TextField, Button} from '@mui/material'

type LoginDataType = {
    username: string;
    password: string;
}

const loginGrid = {
    minHeight: '100vh'
}
const LoginPage: React.FC = () => {
    const [loginData, setLoginData] = useState<LoginDataType>({username: '', password: ''});

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setLoginData((prev: LoginDataType) => ({...prev, [name]: value}))
    }

    const handleLoginSubmission = (event: React.FormEvent) => {
        event.preventDefault();
        alert(JSON.stringify(loginData))
    }

    return (
        <PageContainer>
            <PageHeader>Login Page</PageHeader>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </Box>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={loginGrid}
            >
                <Grid item>
                    <TextField
                        required
                        fullWidth
                        label="Email"
                        name="username"
                        value={loginData.username}
                        onChange={changeHandler}
                    />
                </Grid>
                {/*<Grid item>*/}
                {/*    <Paper sx={{padding: '1.2em', borderRadius: '0.5em'}}>*/}
                {/*        <Typography variant="h4">Login In</Typography>*/}
                {/*        <Box component="form" onSubmit={handleLoginSubmission}>*/}
                {/*            <TextField*/}
                {/*                onChange={changeHandler}*/}
                {/*                required*/}
                {/*                fullWidth*/}
                {/*                label="Email"*/}
                {/*                name="username"*/}
                {/*                inputProps={{"data-testid": "username"}}*/}
                {/*                value={loginData.username}*/}
                {/*            />*/}
                {/*            <TextField*/}
                {/*                required*/}
                {/*                fullWidth*/}
                {/*                label="Password"*/}
                {/*                name="password"*/}
                {/*                onChange={changeHandler}*/}
                {/*                sx={{mt: 3}}*/}
                {/*                inputProps={{"data-testid": "password"}}*/}
                {/*                value={loginData.password}*/}
                {/*            />*/}
                {/*            <TextField*/}
                {/*                required*/}
                {/*                fullWidth*/}
                {/*                label="Bio"*/}
                {/*                name="bio"*/}
                {/*                type="textarea"*/}
                {/*                sx={{mt: 3}}*/}
                {/*            />*/}
                {/*            <Button disabled={loginData.username === '' || loginData.password === ''}*/}
                {/*                    variant="contained" fullWidth type="submit" sx={{mt: 3}}>Submit</Button>*/}
                {/*        </Box>*/}
                {/*    </Paper>*/}
                {/*</Grid>*/}

            </Grid>
        </PageContainer>
    )
}
export default LoginPage;

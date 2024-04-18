import React from 'react';
import PageContainer from "../components/PageContainer/PageContainer";
import PageHeader from "../components/PageHeader/PageHeader";
import {Box, Grid, Paper, Typography} from "@mui/material";
import {useTitle} from "react-use";
import {Client} from "../utils/clountry/Client";

const loginGrid = {
    minHeight: '100vh'
}

const client = new Client();
const nigeria = client.buildCountry();

const HomePage: React.FC = () => {
    useTitle('My Home')
    return (
        <PageContainer>
            <PageHeader>Home Page</PageHeader>
            <PageHeader>{nigeria.getName()}</PageHeader>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={loginGrid}
            >
                <Grid item>
                    <Paper sx={{padding: '1.2em', borderRadius: '0.5em'}}>
                        <Typography variant="h4">Login In</Typography>
                        <Box component="form">

                        </Box>
                    </Paper>
                </Grid>

            </Grid>
        </PageContainer>
    )
}
export default HomePage;
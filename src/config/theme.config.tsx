import React from 'react';
import {Box, ThemeProvider, CssBaseline} from '@mui/material'
import theme from "../themes/theme";

type ThemeProps = {
    children: React.ReactNode;
}

export const ThemeConfig: React.FC<ThemeProps> = (props) => {
    const {children} = props;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box>{children}</Box>
        </ThemeProvider>
    )
}
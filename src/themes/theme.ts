import {createTheme, ThemeOptions} from '@mui/material/styles';
import {orange} from "@mui/material/colors";

export enum ThemePalette {
    BG = '#fff',
    LIME = '#0d6efd',
    FONT_GLOBAL = "'JetBrains Mono', monospace",
    BLUE = ''
}

export const palette: ThemeOptions['palette'] = {
    mode: "light",
    background: {
        default: ThemePalette.BG
    },
    primary: {
        main: ThemePalette.LIME,
        light: 'skyblue'
    },
    secondary: {
        main: '#999999'
    },
    otherColor: {
        main: '#999999'
    },
    status: {
        danger: orange[500]
    }
}

const theme = createTheme({
    palette: palette,
    typography: {
        fontFamily: ThemePalette.FONT_GLOBAL,
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: 'capitalize',
                    boxShadow: 'none',
                    borderRadius: "0em"
                }
            }
        }
    }
});

export type Theme = typeof theme;
export default theme;

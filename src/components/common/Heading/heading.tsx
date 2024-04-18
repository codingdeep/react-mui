import {css, jsx} from '@emotion/react';
import type { HeadingProps } from './types';

const levelMap = {
    h900: 'h1',
    h800: 'h1',
    h700: 'h2',
    h600: 'h3',
    h500: 'h4',
    h400: 'h5',
    h300: 'h6',
    h200: 'div',
    h100: 'div'
}

const headingResetStyles = css({
    color: '#172B4D',
    marginBlock: '0px'
});

const  
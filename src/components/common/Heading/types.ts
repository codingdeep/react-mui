import {ReactNode} from 'react';


export type HeadingProps = {
    testId?: string;
    children: ReactNode;
    level: 'h900' | 'h800' | 'h700' | 'h600' | 'h500' | 'h400' | 'h300' | 'h200' | 'h100',
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span',
    color?: 'inverse' | 'default'
}
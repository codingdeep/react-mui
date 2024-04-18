import React, {ComponentProps} from 'react';
import {Dialog} from "@mui/material";



export function CustomModal(p: ComponentProps<typeof Dialog> & {
    onRequestClose: (result?: unknown) => void;
    component: React.ComponentType<{onRequestClose: (result?: unknown) => void}>;
    componentProps: unknown
}){
    const {component: Component, componentProps, ...rest} = p;
    return (
        <Dialog>
            {!Component ? <></> : <Component/>}
        </Dialog>
    )
}
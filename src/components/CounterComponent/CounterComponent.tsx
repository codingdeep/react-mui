import React from 'react';
import {Box} from "@mui/material";

interface Props {
    incrementHandler: () => void;
    decrementHandler: () => void;
}

const CounterComponent: React.FC<Props> = ({incrementHandler, decrementHandler}) => {
    return (
        <Box>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </Box>
    )
}
export default CounterComponent;
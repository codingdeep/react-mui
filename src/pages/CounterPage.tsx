import React, {useState} from 'react';
import {Box} from '@mui/material';
import PageContainer from "../components/PageContainer/PageContainer";
import PageHeader from "../components/PageHeader/PageHeader";
import CounterComponent from "../components/CounterComponent/CounterComponent";

const CounterPage: React.FC = () => {
    const [counter, setCounter] = useState<number>(0);
    return (
        <div>
            <PageContainer>
                <PageHeader>Counter Page</PageHeader>
                <Box>
                    <h1>{counter}</h1>
                    <CounterComponent incrementHandler={() => setCounter(prevState => prevState + 1)}
                                      decrementHandler={() => setCounter(prev => prev - 1)}/>
                </Box>
            </PageContainer>
        </div>
    )
}
export default CounterPage;
import React from 'react';
import {Box} from '@mui/material'
import './PageContainer.css'

interface Props {
    children: React.ReactNode;
    renderRightPanel?: React.ReactNode
}

const PageContainer: React.FC<Props> = ({children, renderRightPanel}) => {
    return (
        <Box className="container-style">
            <Box className="main-content-style">{children}</Box>
            {renderRightPanel && <div>{renderRightPanel}</div>}
        </Box>
    )
}
export default PageContainer;
/** @jsx jsx */
import React, {useState} from 'react';
import {jsx} from '@emotion/react';
import {Button, Box, TextField, OutlinedInput} from '@mui/material';
import {Settings, Add} from "@mui/icons-material";
import PageContainer from "../components/PageContainer/PageContainer";
import PageHeader from "../components/PageHeader/PageHeader";
import Buttons from "../components/common/InlineEdit/internal/buttons";
import InlineEdit from "../components/common/InlineEdit/inline-edit";
//import InlineEdit from "../components/common/InlineEdit/inline-edit";

const DemoPage: React.FC = () => {
    const [editValue, setEditValue] = useState('');
    return (
        <div>
            <PageContainer>
                <PageHeader>Demo Page</PageHeader>
                {/*<Box>*/}
                {/*    <Button variant="text">Button</Button>*/}
                {/*    <Button variant="contained" color="otherColor" startIcon={<Settings/>}>Hola Mundo</Button>*/}
                {/*    <Button variant="outlined" color="success" size="small" endIcon={<Add/>}>Como Estas Hermano</Button>*/}
                {/*    <Button variant="contained" color="primary" size="small"*/}
                {/*            endIcon={<Add/>}>Estoy Bien</Button>*/}
                {/*</Box>*/}


                <Box>
                    <PageHeader>Inline Edit Test</PageHeader>

                    <InlineEdit
                        defaultValue={editValue}
                        label="amount"
                        editView={() => (
                            <OutlinedInput
                                fullWidth
                                size="small"
                                autoFocus
                                id="outlined-adornment-weight"
                                aria-describedby="outlined-weight-helper-text"
                            />
                        )}
                        readView={() => (
                            <Box testId="read-view">
                                {editValue || 'Enter amount'}
                            </Box>)
                        }
                        onConfirm={(value) => setEditValue(value)}
                        additionalActionsHandler={}
                    />
                </Box>

            </PageContainer>
        </div>
    )
}
export default DemoPage;
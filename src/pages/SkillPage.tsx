import React from 'react';
import {Box} from '@mui/material';
import PageContainer from "../components/PageContainer/PageContainer";
import PageHeader from "../components/PageHeader/PageHeader";
import SkillsMock from "../mocks/SkillsMock";
import SkillsComponent from "../components/SkillsComponent/SkillsComponent";

const SkillPage: React.FC = () => {
    return (
        <div>
            <PageContainer>
                <PageHeader>Skill Page</PageHeader>
                <Box>
                    <SkillsComponent skills={SkillsMock}/>
                </Box>
            </PageContainer>
        </div>
    )
}
export default SkillPage;
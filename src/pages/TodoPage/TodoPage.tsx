import React from 'react';
import Todo from "../../components/Todo/Todo";
import PageContainer from "../../components/PageContainer/PageContainer";
import PageHeader from "../../components/PageHeader/PageHeader";

const TodoPage = () => {
    return(
        <div>
            <PageContainer>
                <PageHeader>Page Header</PageHeader>
                <Todo/>
            </PageContainer>
        </div>
    )
}
export default TodoPage;
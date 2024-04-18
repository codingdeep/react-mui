import React, { useMemo } from 'react';
import OpenModalButton, {ButtonVariant} from "../../common/modal/OpenModalButton";
import { FormSpec } from '../../common/InputEditForm/InputEditForm.types';
import InputEditForm, { FormBuilder } from '../../common/InputEditForm/InputEditForm';

const LoginModalButton: React.FC = () => {

    const formSpec: FormSpec<FormData> = useMemo(
        ()=> 
        new FormBuilder<FormData>()
            .addHeader('Please Login Here')
            .build(),

            []
    );

    const login = (input: any) => {
        console.log(input)
    }

    return(
        <OpenModalButton
                        buttonVariant={ButtonVariant.TEXT}
                        modalTitle="Login HereA"
                        modalBody={
                            <InputEditForm<FormData> formSpec={formSpec} onSubmit={login}/>
                        }
                        useFooter={false}
                        secondaryActionTitle="Cancel"
                        primaryActionTitle="Save"
                    >Login</OpenModalButton>
    )
}
export default LoginModalButton;
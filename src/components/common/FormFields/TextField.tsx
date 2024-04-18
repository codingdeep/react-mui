import React, {ChangeEventHandler} from 'react';
import {TextField as MuiTextField} from '@mui/material';

export interface Props extends Omit<React.ComponentProps<typeof MuiTextField>, 'label'> {
    /*
    * Label to display text to the input field
    * */
    label?: string;
    /*
    * name of the field
    * */
    name: string;
    /*
    * type of the input field expects
    * */
    type: 'number' | 'text' | 'password';
    /*
    * the input value
    * */
    value?: string | number;
    /*
    * placeholder text to display placeholder
    * */
    placeholder?: string;
    /*
    * callback function for when the input value is changes
    * */
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    /*
    * if the field needed to be readonly
    * */
    isReadOnly?: boolean;
    /*
    * If fields need to be required
    * */
    isRequired?: boolean;
    /*
    * use helperText if need to show any message to help user
    * */
    helperText?: React.ReactNode;

    defaultValue?: string;
    errors: never
}

/*
* The component represents the text field inside form component
*
* @author Rubel Ahmmed
* */

const TextField: React.FC<Props> = (props) => {
    const {
        label = '',
        name,
        type,
        value,
        onChange,
        isReadOnly = false,
        isRequired = false,
        helperText,
        placeholder = '',
        defaultValue = '',
        ...rest
    } = props;
    return (
        <TextField
            id="filled-error"
            label={label}
            defaultValue={defaultValue}
            value={value ?? ''}
            variant="filled"
            isReadOnly={isReadOnly}
            placeholder={placeholder}
            helperText={helperText}
            isRequired={isRequired}
            name={name}
            type={type}
            onChange={onChange}
            {...rest}
        />
    )
}
export default TextField;
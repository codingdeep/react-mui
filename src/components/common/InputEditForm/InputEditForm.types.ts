import {CSSProperties, ReactNode} from 'react';

import {Props as TextFieldProps} from '../FormFields/TextField';
import { ButtonProps } from 'reactstrap';
import { ButtonVariant } from '../modal/OpenModalButton';

export enum FieldType {
    TEXTFIELD = 'textField'
}

export type FormFieldProps =
    | TextFieldProps

export type FieldProps = FormFieldProps & {
    fieldType?: FieldType;
    defaulValue?: any;
}

export type FormResetFunction<T> = (initialValues?: T) => void;

export type ActionButtonProps<T> = Omit<ButtonProps, 'onClick'> & {
    appearance: ButtonVariant;
    btnColor?: any;
    isLoading?: boolean;
    type?: 'submit' | 'button' | 'reset';
    onClick?: (formState: T, reset: FormResetFunction<T>, stateValues: unknown) => void;
}
export enum FormDirection {
    ROW = 'row',
    COLUMN = 'column'
}
export interface FieldSetProps {
    name: string;
    showAsAccordion?: boolean;
    legend?: ReactNode;
    description?: ReactNode;
    fieldsLabel?: ReactNode;
    fieldsStyle?: CSSProperties;
    fieldDirection?: FormDirection
}

export interface FieldSetSpec extends FieldSetProps {
    fields: FieldProps[];
    nestedFieldSets?: FieldSetSpec[]
}

export interface FormSpec<T>{
    header?: ReactNode;
    description?: ReactNode;
    fields: FieldProps[];
    footer?: ActionButtonProps<T>[];
    fieldSets?: FieldSetSpec[]
}
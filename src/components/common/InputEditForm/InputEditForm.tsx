import React, {ReactNode} from 'react';
import {ActionButtonProps, FieldSetSpec, FieldType, FormSpec, FieldSetProps} from "./InputEditForm.types";
import TextField, {Props as TextFieldProps} from "../FormFields/TextField";
import {Form} from "reactstrap";
import Flex from '../../../atoms/Flex';
//import Heading from '../Heading';

const fieldTypeToComponentMap: Record<FieldType, React.FC<any>> = {
    [FieldType.TEXTFIELD]: TextField
}

export interface FieldFormSetProps<T> extends FieldSetProps {
    fieldBuilder: (formBuilder: FormBuilder<T>) => FormBuilder<T>
}

export class FormBuilder<T> {
    private formSpec: FormSpec<T> = {fields: []};
    private fieldSets: FieldSetSpec[] = [];

    addFieldSet({
                    parentName,
                    name,
                    legend,
                    description,
                    showAsAccordion,
                    fieldBuilder,
                    fieldsLabel,
                    fieldsStyle,
                    fieldDirection
                }: FieldFormSetProps<T> & { parentName?: string }): FormBuilder<T> {
        fieldBuilder(this);
        const newFieldSet = {
            name,
            description,
            legend,
            showAsAccordion,
            fieldsLabel,
            fieldsStyle,
            fieldDirection,
            fields: [...this.formSpec.fields]
        }
        this.formSpec.fields = [];
        if (parentName) {
            const parentFieldSet = this.fieldSets.find(fieldSet => fieldSet.name === parentName);
            if (parentFieldSet) {
                if (!parentFieldSet.nestedFieldSets) {
                    parentFieldSet.nestedFieldSets = []
                }
                parentFieldSet.nestedFieldSets.push(newFieldSet)
            }
        } else {
            this.fieldSets.push(newFieldSet)
        }
        return this;
    }

    addHeader(header: ReactNode): FormBuilder<T> {
        this.formSpec.header = header;
        return this;
    }

    addDescription(description: ReactNode): FormBuilder<T> {
        this.formSpec.description = description;
        return this;
    }

    addTextField(fieldProps: TextFieldProps): FormBuilder<T> {
        this.formSpec.fields.push({
            ...fieldProps,
            fieldType: FieldType.TEXTFIELD
        })
        return this;
    }

    addSecondaryAction({
                           name = 'Cancel',
                           onClick,
                           isVisible = true,
                           ...remainingAtionProps
                       }: ActionButtonProps<T>): FormBuilder<T> {
        if (!this.formSpec.footer) {
            this.formSpec.footer = []
        }
        if (isVisible) {
            this.formSpec.footer.push({
                ...remainingAtionProps,
                name,
                onClick: (formState, reset, stateValues: unknown) => onClick ? onClick(formState, reset, stateValues) : null
            })
        }
        return this;
    }

    build(): FormSpec<T> {
        return {...this.formSpec, fieldSets: this.fieldSets}
    }
}

interface Props<T> {
    formSpec: FormSpec<T>,
    //onSubmit: (data: T, name?: any) => void;
    onSubmit: any;
    footerText?: ReactNode
}

const InputEditForm = <T extends NonNullable<unknown | undefined>>({
                                                                       formSpec,
                                                                       onSubmit,
                                                                       footerText
                                                                   }: Props<T>) => {
    const {header, fields, footer, fieldSets, description} = formSpec;
    return (
        <Form onSubmit={onSubmit}>
            {/*{(header || description) && (*/}

            {/*    <Heading level="h100">Hello</Heading>*/}

            {/*)}*/}
            {footer && (
                <Flex
                    alignitems="center"
                    justifyContent="space-between"
                >
                    <Flex>
                        {/*{footerText && (*/}
                        {/*    <Heading as="div" level="h100">{footerText}</Heading>*/}
                        {/*)}*/}
                    </Flex>
                </Flex>
            )}
        </Form>
    )
}
export default InputEditForm;
/** @jsx jsx */
import React, {useCallback, useRef, useState} from 'react';
import Buttons from "./internal/buttons";
import {Form} from "reactstrap";
import useButtonFocusHook from "./internal/hooks/use-button-focus-hook";
import ReadView from "./internal/read-view";
import {css, jsx} from "@emotion/react";

const fieldStyle = css({
    position: 'relative',
    width: '100%'
})

const InnerInlineEdit = (props) => {
    const {
        startWithEditViewOpen = false,
        keepEditViewOpenOnBlur = false,
        hideActionButtons = false,
        isRequired = false,
        readViewFitContainerWidth = false,
        editButtonLabel = "Edit",
        confirmButtonLabel = 'Cancel',
        defaultValue,
        isEditing,
        label,
        validate,
        readView,
        editView,
        onConfirm,
        onCancel,
        onEdit
    } = props;
    const [isEditingState, setIsEditingState] = useState(startWithEditViewOpen);
    const formRef = useRef(null);
    const {
        editButtonRef,
        shouldBeEditing,
        doNotFocusOnEditing,
        editViewRef
    } = useButtonFocusHook(isEditing, isEditingState)

    const isControlled = typeof isEditing === 'undefined'

    const onSubmit = (event) => {
        event.preventDefault();
        onConfirm(event?.target?.elements[0].value);
        setIsEditingState(false)
    }

    const onEditRequested = useCallback(() => {
        if (isControlled) {
            setIsEditingState(true);
        }
        if (shouldBeEditing && editViewRef.current) {
            editViewRef.current.focus();
        }
    }, [isControlled, shouldBeEditing, editViewRef, onEdit])

    const onCancelClick = (event) => {
        event.preventDefault();
        formRef.current.reset();
        if (isControlled) {
            setIsEditingState(false)
        }
    }

    const renderReadView = () => {
        return (
            <ReadView
                onEditRequested={onEditRequested}
                readView={readView}
                posReadViewClick={doNotFocusOnEditing}
                editButtonRef={editButtonRef}
                readViewFitContainerWidth={readViewFitContainerWidth}
            />
        )
    }

    return (
        <Form innerRef={formRef} onSubmit={onSubmit} name="withdrawlForm">
            {shouldBeEditing ?
                (
                    <div css={fieldStyle}>
                        {editView(editViewRef)}
                        {!hideActionButtons &&
                            <Buttons
                                onCancelClick={(e) => {
                                    onCancelClick(e)
                                }}
                            />
                        }
                    </div>
                ) : renderReadView()}

        </Form>
    )
}

const InlineEdit = (props) => {
    return (
        <InnerInlineEdit {...props} />
    )
}

export default InlineEdit;
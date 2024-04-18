import {useRef, useEffect} from 'react';

const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value])
}

const useButtonFocusHook = (isEditing, isEditingState) => {
    const editButtonRef = useRef(null);
    const editViewRef = useRef();
    const preventFocusOnEditButtonRef = useRef(false);

    const isControlled = typeof isEditing === 'undefined';
    const shouldBeEditing = isControlled ? isEditingState : isEditing;
    const prevIsEditing = usePrevious(shouldBeEditing);

    useEffect(() => {
        if (prevIsEditing && !shouldBeEditing) {
            if (preventFocusOnEditButtonRef && preventFocusOnEditButtonRef.current) {
                preventFocusOnEditButtonRef.current = false;
            } else if (editButtonRef && editButtonRef.current) {
                editButtonRef.current.focus();
            }
        }
    }, [prevIsEditing, shouldBeEditing]);

    const doNotFocusOnEditing = () => preventFocusOnEditButtonRef.current = true;

    return {
        editButtonRef,
        editViewRef,
        shouldBeEditing,
        doNotFocusOnEditing
    }

}

export default useButtonFocusHook;


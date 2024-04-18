import React, {ReactNode, useCallback, useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {Button, ButtonProps, Stack} from "@mui/material";

export enum ButtonVariant {
    TEXT = 'text',
    OUTLINED = 'outlined',
    CONTAINED = 'contained',
}

interface Props extends ButtonProps {
    children: React.ReactNode;
    modalTitle?: ReactNode;
    buttonVariant: ButtonVariant;
    onClose?: () => void;
    onOpen?: () => void;
    useFooter: boolean;
    modalBody: ReactNode;
    secondaryActionTitle: string;
    primaryActionTitle: string;
    onSecondaryAction?: () => void;
    onPrimaryAction?: () => void;
    secondaryActionDisabled?: boolean;
    primaryActionDisabled?: boolean;
    modalSize?: string;
}

const OpenModalButton: React.FC<Props> = ({
                                              children,
                                              modalTitle,
                                              buttonVariant,
                                              onClose,
                                              onOpen,
                                              useFooter,
                                              modalBody,
                                              onSecondaryAction,
                                              onPrimaryAction,
                                              secondaryActionDisabled,
                                              primaryActionDisabled,
                                              secondaryActionTitle,
                                              primaryActionTitle,
                                              modalSize = 'md'
                                          }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = useCallback(() => {
        setIsModalOpen(true);
        onOpen?.();
    }, [onOpen])
    const modalCloseHandler = useCallback(() => {
        setIsModalOpen(false);
        onClose?.();
    }, [onClose]);

    const handleSecondaryAction = useCallback(() => {
        onSecondaryAction?.();
        setIsModalOpen(false);
        onClose?.();
    }, [onPrimaryAction, onClose]);

    const handlePrimaryAction = useCallback(() => {
        onPrimaryAction?.();
        setIsModalOpen(false);
        onClose?.();
    }, [onPrimaryAction, onClose])


    return (
        <>
            <Button onClick={handleModalOpen} variant={buttonVariant}>{children}</Button>
            <Modal
                autoFocus
                size={modalSize ?? ''}
                isOpen={isModalOpen}
                onClosed={modalCloseHandler}
            >
                <ModalHeader>{modalTitle}</ModalHeader>
                <ModalBody>
                    {React.isValidElement(modalBody) && !useFooter
                        ? React.cloneElement(modalBody, {modalCloseHandler} as Partial<unknown> & { modalCloseHandler: () => void })
                        : modalBody
                    }
                </ModalBody>
                {useFooter &&
                    <ModalFooter>
                        <Stack direction="row" gap="1em">
                            <Button
                                autoFocus
                                variant={ButtonVariant.CONTAINED}
                                color="secondary"
                                onClick={handleSecondaryAction}
                                disabled={secondaryActionDisabled}
                            >{secondaryActionTitle}</Button>

                            <Button
                                autoFocus
                                variant={ButtonVariant.CONTAINED}
                                color="primary"
                                onClick={handlePrimaryAction}
                                disabled={primaryActionDisabled}
                            >{primaryActionTitle}</Button>
                        </Stack>
                    </ModalFooter>
                }
            </Modal>
        </>
    )
}
export default OpenModalButton;
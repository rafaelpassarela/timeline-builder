import React, { Component, ReactNode } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';
import { ButtonVariant } from 'react-bootstrap/types';

interface IDialogBoxState {
    show: boolean
}

interface IDialogBoxProps extends IDialogBoxState {
    title: string,
    large?: boolean,
    buttonOkCaption: string,
    buttonOkVariant?: ButtonVariant,
    buttonCancelCaption: string,
    buttonCancelVariant?: ButtonVariant,
    children: ReactNode,
    onCancelCallback: () => void,
    onOkCallback: () => void
}

class DialogBox extends Component<IDialogBoxProps, IDialogBoxState> {

    constructor(props: IDialogBoxProps) {
        super(props);

        this.state = {
            show: this.props.show

        }
    }

    render() {
        const modalSize     = (this.props.large ? 'lg' : undefined);
        const okVariant     = (this.props.buttonOkVariant     ? this.props.buttonOkVariant     : 'success');
        const cancelVariant = (this.props.buttonCancelVariant ? this.props.buttonCancelVariant : 'secondary');
        return (
            <Modal
                autoFocus={true}
                backdrop="static"
                keyboard={true}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                size={modalSize}
                show={this.state.show}
                onHide={this.props.onCancelCallback}
            >
                <ModalHeader closeButton>
                    <b>{this.props.title}</b>
                </ModalHeader>

                <ModalBody>
                    {this.props.children}
                </ModalBody>

                <ModalFooter>
                    <Button variant={cancelVariant} onClick={this.props.onCancelCallback}>
                        {this.props.buttonCancelCaption}
                    </Button>
                    <Button variant={okVariant} onClick={this.props.onOkCallback}>
                        {this.props.buttonOkCaption}
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }

}

export default DialogBox;




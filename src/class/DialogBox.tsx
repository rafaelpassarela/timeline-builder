import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';

interface IDialogBoxState {
    show: boolean
}

interface IDialogBoxProps extends IDialogBoxState {
    title: string,
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

/*
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>

*/


    render() {
        return (
            <Modal
                autoFocus={true}
                backdrop="static"
                keyboard={true}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.show}
                onHide={this.props.onCancelCallback}
            >
                <ModalHeader closeButton>
                    <b>{this.props.title}</b>
                </ModalHeader>

                <ModalBody>
                    Aqui deve carregar os elementos filhos
                </ModalBody>

                <ModalFooter>
                    <Button variant="secondary" onClick={this.props.onCancelCallback}>
                        Close
                    </Button>
                    <Button variant="success" onClick={this.props.onOkCallback}>
                        Understood
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }

}

export default DialogBox;




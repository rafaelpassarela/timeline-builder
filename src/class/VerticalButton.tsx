import React, { Component } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { EditButtonType } from './EditButtonType';
import DialogBox from './DialogBox';
import IEventModelStorageInterface from './EventModelStorageInterface';

interface IVerticalButtonProps {
    btnType: EditButtonType;
    disabled: boolean;
    event: IEventModelStorageInterface,
    callback: (action: EditButtonType) => void;
}

interface IVerticalButtonState {
    waitConfirmation: boolean
}

class VerticalButton extends Component<IVerticalButtonProps, IVerticalButtonState> {

    constructor(props: IVerticalButtonProps) {
        super(props);

        this.state = {
            waitConfirmation: false
        }

        this.clickHandler = this.clickHandler.bind(this);
        this.cancelDialogHandler = this.cancelDialogHandler.bind(this);
        this.deleteDialogHandler = this.deleteDialogHandler.bind(this);
    }

    getButton(type: EditButtonType) {
        switch (type) {
            case 'up': return <AiFillCaretUp />;
            case 'down': return <AiFillCaretDown />;
            case 'delete': return <FaTrashAlt />;
            case 'insert': return <FaPlus />;
            case 'edit': return <FaEdit />;
            default:
                return null;
        }
    }

    clickHandler() {
        switch (this.props.btnType) {
            case 'up':
            case 'down':
                this.props.callback(this.props.btnType);
                break;

            case 'delete':
            case 'insert':
            case 'edit':
                this.setState({
                    waitConfirmation: true
                });
                break;

            default:
                break;
        }
    }

    cancelDialogHandler() {
        this.setState({
            waitConfirmation: false
        });
    }

    deleteDialogHandler() {
        this.cancelDialogHandler();
        this.props.callback('delete');
    }

    getDeleteScreen() {
        let eventTitle = (this.props.event.title);
        if (eventTitle.trim() === '') {
            eventTitle = 'No Title';
        }
        return (
            <DialogBox
                title='Remove Event?'
                buttonCancelCaption='Cancel'
                buttonOkCaption='Yes, Remove!'
                buttonOkVariant='danger'
                show={true}
                onCancelCallback={this.cancelDialogHandler}
                onOkCallback={this.deleteDialogHandler}
            >
                Do you really want to remove the <b>"{eventTitle}"</b> event?
            </DialogBox>
        );
    }

    getEditcreen(isNew: boolean) {
        return (
            <DialogBox
                title='Edit/Insert'
                buttonCancelCaption='Cancel'
                buttonOkCaption='Save'
                show={true}
                onCancelCallback={this.cancelDialogHandler}
                onOkCallback={this.cancelDialogHandler}
            >
                IsNew = {isNew ? 'SIM' : 'NOPE'}
            </DialogBox>
        );
    }

    getContextScreen(type: EditButtonType) {
        let screen = null;
        if (this.state.waitConfirmation === true) {
            if (type === 'delete') {
                screen = this.getDeleteScreen();
            } else {
                screen = this.getEditcreen(type === 'insert');
            }
        }

        return screen;
    }

    getButtonVariant(type: EditButtonType) {
        const typeStr = type as string;
        if (typeStr === "up" || typeStr === "down") {
            return "secondary";
        }

        if (typeStr === "delete") {
            return "danger";
        }

        return "warning";
    }

    render() {
        const { btnType } = this.props;
        const variant = this.getButtonVariant(btnType);
        const contextScreen = this.getContextScreen(btnType);
        return (
            <div className='spacer-bottom'>
                <Button variant={variant} size="sm" disabled={this.props.disabled} onClick={this.clickHandler}>
                    {this.getButton(btnType)}
                </Button>
                {contextScreen}
            </div>
        );
    }

}

export default VerticalButton;
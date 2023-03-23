import React, { Component } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa';
import { EditButtonType } from './EditButtonType';
import DialogBox from './DialogBox';
import { IEventModelStorageScreenInterface } from './EventModelStorageInterface';
import { Button, Col, Form, FormControl, FormGroup, FormLabel, FormText, Row } from 'react-bootstrap';

interface IVerticalButtonProps {
    btnType: EditButtonType;
    disabled: boolean;
    event?: IEventModelStorageScreenInterface,
    callback: (action: EditButtonType, object: IEventModelStorageScreenInterface | null) => void;
}

interface IVerticalButtonState {
    waitConfirmation: boolean
}

class VerticalButton extends Component<IVerticalButtonProps, IVerticalButtonState> {

    private editData: IEventModelStorageScreenInterface;

    constructor(props: IVerticalButtonProps) {
        super(props);

        this.state = {
            waitConfirmation: false
        }

        this.editData = {
            ...this.props.event!,
            isNew: false
        };

        this.clickHandler = this.clickHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getEditScreen = this.getEditScreen.bind(this);
        this.editDialogHandler = this.editDialogHandler.bind(this);
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
                this.props.callback(this.props.btnType, null);
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
        this.props.callback('delete', null);
    }

    editDialogHandler() {
        const action = (this.editData.isNew ? 'insert' : 'edit');
        this.cancelDialogHandler();

        this.props.callback(action, this.editData);
    }

    getDeleteScreen() {
        let eventTitle = (this.props.event!.title);
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

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        this.editData = {
            ...this.editData,
            [e.target.id] : e.target.value
        }
    }

    getEditScreen(newEvent: boolean) {
        this.editData = (newEvent ? {
            isNew: true,
            align: 'auto',
            date: '',
            index: this.props.event!.index,
            title: '',
            img: '',
            subtitle: ''
        } :
            this.props.event!
        );
        return (
            <DialogBox
                title={newEvent ? 'Create New Event' : 'Edit Event'}
                buttonCancelCaption='Cancel'
                buttonOkCaption='Save'
                show={true}
                large={true}
                onCancelCallback={this.cancelDialogHandler}
                onOkCallback={this.editDialogHandler}
            >
                <Form>
                    <FormGroup controlId='title'>
                        <FormLabel>Title</FormLabel>
                        <FormControl placeholder='My New Event Title' defaultValue={this.editData.title} onChange={this.handleChange} autoFocus/>
                        <FormText>The event title is the highlighted sentence displayed in the timeline tree</FormText>
                    </FormGroup>

                    <FormGroup controlId="subtitle">
                        <FormLabel>Description</FormLabel>
                        <FormControl as="textarea" rows={10} placeholder="Once upon a time..." defaultValue={this.editData.subtitle} onChange={this.handleChange}/>
                        <FormText>Tell us a little more about this event, as if you were telling us a story</FormText>
                    </FormGroup>

                    <FormGroup controlId='img' style={{marginTop: "10px"}}>
                        <FormLabel>Imagem URL or Image Data</FormLabel>
                        <FormControl placeholder='https://myimage.com/test.png or data:image/....' defaultValue={this.editData.img} onChange={this.handleChange}/>
                        <FormText>This field is not mandatory</FormText>
                    </FormGroup>

                    <FormGroup controlId="date" as={Row} style={{marginTop: "10px"}}>
                        <FormLabel column sm="2">Date</FormLabel>
                        <Col sm="10">
                            <FormControl placeholder="dd/mm/yyyy" maxLength={10} defaultValue={this.editData.date} onChange={this.handleChange}/>
                        </Col><br/>
                    </FormGroup>
                </Form>
            </DialogBox>
        );
    }

    getContextScreen(type: EditButtonType) {
        let screen = null;
        if (this.state.waitConfirmation === true) {
            if (type === 'delete') {
                screen = this.getDeleteScreen();
            } else {
                screen = this.getEditScreen(type === 'insert');
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
import React, { Component } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EventDetail from './EventDetailComponent';
import EventModelInterface from '../class/EventModelInterface';
import EventModelStorageInterface from '../class/EventModelStorageInterface';
import { Align } from '../class/Align';

class Event extends Component<EventModelInterface, EventModelStorageInterface> {

    constructor(props: EventModelInterface) {
        super(props);

        this.state = {
            align: this.props.align,
            date: this.props.date,
            title: this.props.title,
            subtitle: this.props.subtitle,
            img: this.props.img,
            index: this.props.index,
        };
    }

    getEditControls(extraClass: boolean) {
        const className = 'event-edit-control-group-bg' + (extraClass ? ' event-edit-control-group-bg-right' : '');
        return (
            <div className={className}>
                <div className="event-edit-control-group">
                    <Button variant="secondary" size="sm">
                        <AiFillCaretDown />
                    </Button> {' '}
                    <Button variant="secondary" size="sm">
                        <AiFillCaretUp />
                    </Button> {' '}
                    <Button variant="danger" size="sm">
                        <FaTrashAlt />
                    </Button> {' '}
                    <Button variant="warning" size="sm">
                        <FaPlus />
                    </Button> {' '}
                    <Button variant="warning" size="sm">
                        <FaEdit />
                    </Button> {' '}
                </div>
            </div>
        );
    }

    doRenderCol(align: Align, editable: boolean) {
        let itemId: string = "item-left";
        let itemClass: string = "quarter-circle-top-left";
        let itemImg: string = "eventIcon-left";
        let extra: boolean = false;

        if (align === 'right') {
            itemId = "item-right";
            itemClass = "quarter-circle-top-right";
            itemImg = "eventIcon-right";
            extra = true;
        }

        const dummy   = <Col></Col>;// <Col>{JSON.stringify(this.state, null, 2) }</Col>;
        const content = (
            <Col id={itemId} className={itemClass}>
                {editable ? this.getEditControls(extra) : null}
                <EventDetail
                    date={this.props.date}
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                    img={this.props.img}
                    imgClass={itemImg}
                />
            </Col>
        );

        let left  = (align === 'left'  ? content : dummy);
        let right = (align === 'right' ? content : dummy);

        return (
            <Row>
                {left}
                {right}
            </Row>
        );
    }

    render() {
        const { align, editable } = this.props;

        return this.doRenderCol(align, editable);
    }

}

export default Event;
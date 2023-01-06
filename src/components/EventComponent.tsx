import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EventDetail from './EventDetailComponent';
import EventModelInterface from '../class/EventModelInterface';
import EventModelStorageInterface from '../class/EventModelStorageInterface';
import { Align } from '../class/Align';
import VerticalButton from '../class/VerticalButton';
import { EditButtonType } from '../class/EditButtonType';

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

        this.verticalButtonHandler = this.verticalButtonHandler.bind(this);
    }

    verticalButtonHandler(action: EditButtonType) {
        switch (action) {
            case "up":
            case "down":
                const idx = this.state.index;
                const newIdx = (action === 'down' ? idx + 1 : idx - 1);

                this.props.callbacUpDown(idx, newIdx);
                break;

            default:
                alert("not implemented " + action);
                break;
        }
    }

    getEditControls(editable: boolean, extraClass: string, index: number, total: number) {
        if (editable) {
            const className = 'event-edit-control-group-bg event-edit-control-group-bg-' + extraClass;
            return (
                <div className={className}>
                    <div className="event-edit-control-group">
                        <VerticalButton btnType="up" disabled={index === 0} callback={this.verticalButtonHandler} />
                        <VerticalButton btnType="down" disabled={index === total} callback={this.verticalButtonHandler} />
                        <VerticalButton btnType="delete" disabled={false} callback={this.verticalButtonHandler} />
                        <VerticalButton btnType="insert" disabled={false} callback={this.verticalButtonHandler} />
                        <VerticalButton btnType="edit"  disabled={false} callback={this.verticalButtonHandler} />
                    </div>
                </div>
            );
        }

        return null;

    }

    doRenderCol(align: Align, editable: boolean, index : number, total : number) {
        let itemId: string = "item-left";
        let itemClass: string = "quarter-circle-top-left";
        let itemImg: string = "eventIcon-left";
        let extra: string = "right";

        if (align === 'right') {
            itemId = "item-right";
            itemClass = "quarter-circle-top-right";
            itemImg = "eventIcon-right";
            extra = "left";
        }

        // const dummy   = <Col></Col>;// <Col>{JSON.stringify(this.state, null, 2) }</Col>;
        const colClass = (editable && extra === "left" ? "col-edit-left" : "");
        const dummy = (
            <Col className={colClass}>
                {this.getEditControls(editable, extra, index, total)}
            </Col>
        );
        const content = (
            <Col id={itemId} className={itemClass}>
                <EventDetail
                    date={this.props.date}
                    title={this.props.index + '=' + this.props.title}
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
        const { align, editable, index, total } = this.props;

        return this.doRenderCol(align, editable, index, total);
    }

}

export default Event;
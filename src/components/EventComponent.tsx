import React, { Component } from 'react';
import EventDetail from './EventDetailComponent';
import EventModelInterface from '../class/EventModelInterface';
import EventModelStorageInterface from '../class/EventModelStorageInterface';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

    renderLeft() {
        return (
            <Row>
                <Col id="item-left" className="quarter-circle-top-left">
                    <EventDetail
                        date={this.props.date}
                        title={this.props.title}
                        subtitle={this.props.subtitle}
                        img={this.props.img}
                        imgClass="eventIcon-left"
                    />
                </Col>
                <Col>{JSON.stringify(this.state, null, 2) }</Col>
            </Row>
        );
    }

    renderRight() {
        return (
            <Row>
                <Col>{JSON.stringify(this.state, null, 2) }</Col>
                <Col id="item-right" className="quarter-circle-top-right">
                    <EventDetail
                        date={this.props.date}
                        title={this.props.title}
                        subtitle={this.props.subtitle}
                        img={this.props.img}
                        imgClass="eventIcon-right"
                    />
                </Col>
            </Row>
        );
    }


    render() {
        const { align } = this.props;

        if (align === 'left') {
            return this.renderLeft();
        }

        return this.renderRight();
    }

}

export default Event;
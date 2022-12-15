import React, { Component } from 'react';
import EventDetail from './EventDetailComponent';
import EventModelInterface from '../class/EventModelInterface';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Event extends Component<EventModelInterface> {
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
            <Col></Col>
        </Row>
    );
  }

  renderRight() {
    return (
        <Row>
            <Col></Col>
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
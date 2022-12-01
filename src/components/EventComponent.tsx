import React, { Component } from 'react';
import EventDetail from './EventDetailComponent';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface EventProps {
  align: "left" | "right";
  date: string;
  title: string;
  subtitle?: string;
  img?: string;
}

class Event extends Component<EventProps> {
  renderLeft() {
    return (
        <Row>
            <Col id="item-left">
                <EventDetail
                    date={this.props.date}
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                    img={this.props.img}
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
            <Col id="item-right">
                <EventDetail
                    date={this.props.date}
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                    img={this.props.img}
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
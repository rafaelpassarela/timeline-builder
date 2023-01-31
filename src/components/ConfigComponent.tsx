import React, { Component } from 'react';
import { BsCaretLeftFill } from "react-icons/bs";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';


interface IConfigComponentProp {
    enabled: boolean;
}

interface IConfigComponentState {
    expanded: boolean;
}

class ConfigComponent extends Component<IConfigComponentProp, IConfigComponentState> {

    constructor(props: IConfigComponentProp) {
        super(props);

        this.state = {
            expanded: false
        }

        this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    handleColorChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();

        const propName = '--' + e.target.id;
        const value = e.target.value;

        document.documentElement.style.setProperty(propName, value);
    }

    getColorComponent(id: string, caption: string, value: string) {
        return (
            <FormGroup controlId={id}>
                <FormLabel>{caption}</FormLabel>
                <FormControl defaultValue={value} type="color" onChange={this.handleColorChange}/>
            </FormGroup>
        )
    }

    getConfigControl() {
        if (this.props.enabled) {
            const expandButton = (this.state.expanded) ? null : (
                <div className='expand-config' onClick={this.handleShow}>
                    <BsCaretLeftFill />Show Config
                </div>
            );
            return (
                <div>
                    {expandButton}
                    <Offcanvas show={this.state.expanded} onHide={this.handleShow} scroll={true} backdrop={true} placement={'end'}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Color Config</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div >
                                <Form>
                                    <Row>
                                        <Col sm="4">
                                            {this.getColorComponent('background-color', 'Background', '#62656a')}
                                        </Col>
                                        <Col sm="4">
                                            {this.getColorComponent('font-color', 'Font', '#f5f5f5')}
                                        </Col>
                                        <Col sm="4">
                                            {this.getColorComponent('line-color', 'Line', '#ffffff')}
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col sm="4">
                                            {this.getColorComponent('image-border', 'Image Border', '#f5f5f5')}
                                        </Col>
                                        <Col sm="4">
                                            {this.getColorComponent('image-background', 'Image Bkg.', '#f0f8ff')}
                                        </Col>
                                        <Col sm="4">
                                            {this.getColorComponent('card-color', 'Card', '#252526')}
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col sm="4">
                                            {this.getColorComponent('tl-title-color', 'Title', '#ffffff')}
                                        </Col>
                                        <Col sm="4">
                                            {this.getColorComponent('tl-subtitle-color', 'Subtitle', '#ffffff')}
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            );
        }

        return null;
    }

    render () {
        return this.getConfigControl();
    }

}

export default ConfigComponent;
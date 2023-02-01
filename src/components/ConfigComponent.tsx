import React, { Component } from 'react';
import { BsCaretLeftFill } from "react-icons/bs";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import { ConfigHandlerChange, ITimeLineConfigStorage } from '../class/TimelineStorageInterface';

interface IConfigComponentProp {
    enabled: boolean;
    config: ITimeLineConfigStorage;
    callback: ConfigHandlerChange;
}

interface IConfigComponentState {
    expanded: boolean;
}

class ConfigComponent extends Component<IConfigComponentProp, IConfigComponentState> {

    private localConfig: ITimeLineConfigStorage;

    constructor(props: IConfigComponentProp) {
        super(props);

        this.state = {
            expanded: false
        }

        this.localConfig = this.props.config;

        this.handleShow = this.handleShow.bind(this);
        this.handleCallback = this.handleCallback.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleShow() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    handleCallback(name: string, value: string) {
        this.props.callback(name, value);
    }

    handleColorChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();

        const propName = '--' + e.target.id;
        const value = e.target.value;
        const config = e.target.alt;

        document.documentElement.style.setProperty(propName, value);

        this.handleCallback(config, value);
    }

    getColorComponent(id: string, caption: string, value: string, configName: string) {
        return (
            <FormGroup controlId={id}>
                <FormLabel>{caption}</FormLabel>
                <FormControl alt={configName} defaultValue={value} type="color" onChange={this.handleColorChange}/>
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
                                            {this.getColorComponent('background-color', 'Background', this.localConfig.background, 'background')}
                                        </Col>
                                        <Col sm="4">
                                            {this.getColorComponent('font-color', 'Font', this.localConfig.font, 'font')}
                                        </Col>
                                        <Col sm="4">
                                            {this.getColorComponent('line-color', 'Line', this.localConfig.line, 'line')}
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col sm="4">
                                            {this.getColorComponent('image-border', 'Image Border', this.localConfig.imageBorder, 'imageBorder')}
                                        </Col>
                                        <Col sm="4">
                                            {this.getColorComponent('image-background', 'Image Bkg.', this.localConfig.imageBackground, 'imageBackground')}
                                        </Col>
                                        <Col sm="4">
                                            {this.getColorComponent('card-color', 'Card', this.localConfig.card, 'card')}
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col sm="4">
                                            {this.getColorComponent('tl-title-color', 'Title', this.localConfig.title, 'title')}
                                        </Col>
                                        <Col sm="4">
                                            {this.getColorComponent('tl-subtitle-color', 'Subtitle', this.localConfig.subtitle, 'subtitle')}
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
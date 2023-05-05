import React, { Component } from "react";
import { Button, Col, Row, Container } from 'react-bootstrap';
import './HomePage.css';

class Home extends Component {

    render() {
        return (
            <Container className="container">
                <Row className="header">
                    <Col sm="12">
                        <div className="header">
                            <img src="/favicon.png"></img>
                            <h1>Welcome to Timeline Builder</h1>
                        </div>
                    </Col>
                </Row>

                <Row className="main" style={{ backgroundImage: "url(/img/background.png)" }}>
                    <div className="content">
                        <h2>
                            Create customized and dynamic timelines
                        </h2>
                        <p className="font-border">
                            With Timeline Builder, you can create timelines for any purpose,
                            from historical events to personal and business projects.
                        </p>
                        <p className="font-border">
                            You can add photos, links, and other resources to your timeline,
                            and it allows you to customize colors, making your timeline even
                            more attractive.
                        </p>
                    </div>
                    <div className="buttons">
                        <Button variant="primary">Get Started For Free</Button><br/>
                        <div className="font-border">or</div>
                        <Button variant="link">Sign-in</Button>
                    </div>
                </Row>
                <Row className="footer">
                    <p>© 2023 Timeline Builder. All rights reserved.</p>
                </Row>
            </Container>
        );
    }

}

export default Home;

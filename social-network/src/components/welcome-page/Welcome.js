import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";


const Welcome = () => {
    return (
        <Container className={'mt-5'}>
            <Row>
                <Col xs={12} className={'d-flex align-items-center justify-content-center'}>
                    <h1>Welcome!</h1>
                </Col>

            </Row>
            <Row className={'text-center'}>
                <Button variant="outline-primary" size="lg">
                    Sign IN
                </Button>
            </Row>
            <Row className={'text-center mt-2'}>
                <Button variant="outline-info" size="lg">
                    Sign UP
                </Button>
            </Row>
        </Container>
    );
};

export default Welcome;
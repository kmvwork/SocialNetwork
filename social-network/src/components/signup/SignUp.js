import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const SignUp = () => {
    return (
        <Container className={'mt-5'}>
            <Form>
                <div className={'text-center'}>
                    <h2>SIGN UP</h2>
                </div>
                <Row className={'mt-2'}>
                    <Col xs={12} md={6} className={'mt-2'}>
                        <Form.Control placeholder="First name"/>
                    </Col>
                    <Col xs={12} md={6} className={'mt-2'}>
                        <Form.Control placeholder="Last name"/>
                    </Col>
                </Row>
                <Row className={'mt-2'}>
                    <Col>
                        <Form.Control type={'email'} placeholder="Email"/>
                    </Col>
                </Row>
                <Row className={'mt-2'}>
                    <Col xs={12} md={6} className={'mt-2'}>
                        <Form.Control type={'password'} placeholder="Password"/>
                    </Col>
                    <Col xs={12} md={6} className={'mt-2'}>
                        <Form.Control type={'password'} placeholder="Confirm Password"/>
                    </Col>
                </Row>
                <div className={'d-grid mt-4'}>
                    <Button variant="outline-info" size="lg">
                        Sign UP
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default SignUp;
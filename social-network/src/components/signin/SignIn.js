import React from 'react';
import {Form, Container, Button} from "react-bootstrap";

const SignIn = () => {
    return (
        <Container className={'mt-5'}>
            <Form>
                <div className={'text-center'}>
                    <h2>SIGN IN</h2>
                </div>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <div className={'d-grid mt-4'}>
                    <Button variant="outline-info" size="lg">
                        Sign IN
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default SignIn;
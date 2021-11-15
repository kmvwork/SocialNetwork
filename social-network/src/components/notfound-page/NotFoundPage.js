import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";


const NotFoundPage = () => {
    return (

        <>
            <Container className={'mt-5'}>
                <Row>
                    <Col className={'text-center'}>
                        <h2>404 Error Page</h2>
                    </Col>
                </Row>
                <Row className={'text-center'}>
                    <Col>
                        <p className={'text-danger fs-5'}>Page not found</p>
                    </Col>
                </Row>
                <div className={'d-grid mt-4'}>
                    <Button variant="outline-dark" size="lg">
                        Go Back to the Main Page
                    </Button>
                </div>
            </Container>
        </>
    );
};

export default NotFoundPage;
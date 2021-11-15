import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Formik} from 'formik'
import * as yup from 'yup'

const SignUp = () => {
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('The value must be a string').required('Required field to fill in'),
        secondName: yup.string().typeError('The value must be a string').required('Required field to fill in'),
        email: yup.string().email('Enter the correct email').required('Required field to fill in'),
        password: yup.string().typeError('The value must be a string').required('Required field to fill in').min(6, 'The minimum password length is 6 characters').max(15, 'The maximum password length is 15 characters').matches(/(?=.*[!@#$%^&*])/, 'The password must contain at least one special character: !@#$%^&*'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords do not match').required('Required field to fill in')
    })

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    secondName: '',
                    password: '',
                    confirmPassword: '',
                    email: '',
                    confirmEmail: ''
                }}
                onSubmit={(values, {resetForm}) => {

                }}
                validationSchema={validationsSchema}
                validateOnBlur
            >
                {({
                      values, errors, touched,
                      handleChange, handleBlur,
                      isValid, handleSubmit, dirty
                  }) => (
                    <Container className={'mt-5'}>
                        <Form onSubmit={handleSubmit}>
                            <div className={'text-center'}>
                                <h2>SIGN UP</h2>
                            </div>
                            <Row className={'mt-2'}>
                                <Col xs={12} md={6} className={'mt-2'}>
                                    <Form.Control placeholder="First name" name={'name'} onChange={handleChange}
                                                  value={values.name} onBlur={handleBlur}/>
                                </Col>
                                <Col xs={12} md={6} className={'mt-2'}>
                                    <Form.Control placeholder="Last name" name={'secondName'} onChange={handleChange}
                                                  value={values.secondName} onBlur={handleBlur}/>
                                </Col>
                            </Row>
                            <Row className={'mt-2'}>
                                <Col>
                                    <Form.Control type={'email'} placeholder="Email" name={'email'}
                                                  onChange={handleChange} onBlur={handleBlur}
                                                  value={values.email}/>
                                </Col>
                            </Row>
                            <Row className={'mt-2'}>
                                <Col xs={12} md={6} className={'mt-2'}>
                                    <Form.Control type={'password'} placeholder="Password" name={'password'}
                                                  onChange={handleChange} value={values.password} onBlur={handleBlur}/>
                                </Col>
                                <Col xs={12} md={6} className={'mt-2'}>
                                    <Form.Control type={'password'} placeholder="Confirm Password"
                                                  name={'confirmPassword'}
                                                  onChange={handleChange} value={values.confirmPassword} onBlur={handleBlur}/>
                                </Col>
                            </Row>
                            <div className={'d-grid mt-4'}>
                                <Button variant="outline-info" size="lg" type={'submit'}>
                                    Sign UP
                                </Button>
                            </div>
                        </Form>
                    </Container>
                )}
            </Formik>
        </div>
    );
}

export default SignUp;
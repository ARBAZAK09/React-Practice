import React from 'react';
import { Row,Col,Card,Form,Button } from 'react-bootstrap';
import "./Emicalculator.css";

export const Emicalculator = () => {
    return (
        <div className="abc">
                <Row>
                <Card className="calc">
                   
                        <Col>
                            <Form className="abc">
                                <Form.Group></Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Label><b>Enter loan Amount</b></Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Loan Amount"
                                            ></Form.Control>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Label><b>Principal</b></Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Principal"
                                            ></Form.Control>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Label><b>Enter Rate of interest</b></Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Rate of interest"
                                            ></Form.Control>
                                           
                                        </Col>
                                    </Row>
                                    <br></br>
                                <Button className="pqr">calculate</Button>
                                </Form>
                         </Col>          
                    </Card>
            </Row>
        </div>
    );
};

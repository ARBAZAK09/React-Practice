
import React from 'react';
import {Row,Col,Button} from "react-bootstrap";

export const Form1 = () => {
    return (
        <div>
           
        <Row>
            <Col xm="2"></Col>
            <Col xm="4">
                <Col>
                    <Row><label>First Name:</label></Row>
                    <Row><input type="text"></input></Row>
                </Col>

                <Col>
                    <Row><label>Last Name:</label></Row>
                    <Row><input type="text"></input></Row>
                </Col>

                <Col>
                    <Row><label>ADDRESS</label></Row>
                    <Row><input type="text"></input>House</Row>
                    <Row><input type="text"></input>Street</Row>
                    <Row><input type="text"></input>city</Row>
                    <Row><input type="text"></input>country</Row>
                    
            </Col>
            </Col>
            <Col xm="4">
                <Col>
        <Row>   <Button>Submit</Button> 
        <textarea>
        </textarea>
        </Row>
        </Col>
       
        </Col>
            <Col xm="2"> </Col> 
            </Row>
</div>
    );
};
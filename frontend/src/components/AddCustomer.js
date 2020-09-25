import React from 'react';
import '../addCustomer.css';

import { Row, Col, Container} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import axios from 'axios';
import Customer from '../models/Customer';

class AddCustomer extends React.Component{

    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.nric = React.createRef();
        this.dob = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
     }

    render(){
        return(
            <div>
                <h1>Onboard New Users</h1>
                <p>For new customers, kindly fill up the form accordingly</p>

                <Form>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="name" placeholder="Enter name" ref={this.name}/>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formDateOfBirth">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control type="date" name="dob" placeholder="Date of Birth" ref={this.dob}/>
                                </Form.Group>

                                <Form.Group controlId="formNric">
                                    <Form.Label>NRIC</Form.Label>
                                    <Form.Control placeholder="S90000000A" ref={this.nric}/>
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formProductType">
                                    <Form.Label>Product Type</Form.Label>
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="Investor" type={type} id={`inline-${type}-1`} value="137" />
                                        <Form.Check inline label="Investor" type={type} id={`inline-${type}-2`} value="070" />
                                        <Form.Check inline label="Loans" type={type} id={`inline-${type}-3`} value="291" />
                                        <Form.Check inline label="Savings" type={type} id={`inline-${type}-4`} value="969" />
                                        <Form.Check inline label="Credit Cards" type={type} id={`inline-${type}-5`} value="555" />
                                        </div>
                                    ))}
                                    </Form.Group>
                                </Form.Row>
                            </Col>

                            <Col>
                                <Form.Row>
                                    <Form.Group>
                                        <Form.File id="formImage" label="Customer Image" />
                                    </Form.Group>         
                                </Form.Row>
                            </Col>
                        </Row>
                       
                        <div>
                            <Button className="float-right mx-2" variant="primary" onClick={this.onSubmit}>Submit</Button>
                            <Button className="float-right mx-2" variant="info" onClick={this.onSaveAsDraft}>Save As Draft</Button>
                        </div>
                    </Container>
                </Form>
            </div>
        )
    }

    onSubmit() {
        console.log('Submit');

        var customerName = this.name.current.value;
        var customerAge = this.dob.current.value;
        var serverOfficerName = "John"
        var nric = this.nric.current.value;
        var registrationTime = new Date().toLocaleString();
        var branchCode= 7171;

        var productType = []
        var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

        for (var i = 0; i < checkboxes.length; i++) {
            productType.push(checkboxes[i].value)
        }


        // console.log(customerName);
        // console.log(customerAge);
        // console.log(this.calculateAge(customerAge));
        // console.log(serverOfficerName);
        // console.log(nric);
        // console.log(registrationTime);
        // console.log(branchCode);
        // console.log(productType);

        const newCustomer = {
            customerName: customerName,
            customerAge: customerAge,
            serverOfficerName: serverOfficerName,
            NRIC: nric,
            registrationTime: registrationTime, 
            branchCode: branchCode,
            productType: productType
          };

        console.log(newCustomer);

        axios.post(`http://localhost:3001/newCustomer`, { newCustomer })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

    }



    calculateAge(birthday) { // birthday is a date
        var myDate = new Date(birthday);
        var ageDifMs = Date.now() - myDate.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    onSaveAsDraft() {
        console.log('Saved');
    }

    onValidate() {

    }

}



export default AddCustomer;



import React, {Component} from 'react';
import { Row, Col, Container, Input, Button, Form, FormGroup } from 'reactstrap';
import './HomePage.scss';

const HomePage = props => (
    <div className="page">
        <div className="login-container">
            <h2> Weather Finder </h2>
            <Form>
                <FormGroup>
                    <Input className="font-size-13 form-control mb-2" placeholder="City" type="text" value={props.form.city} />
                    <Input className="font-size-13 form-control" placeholder="Country" type="text" value={props.form.country} />
                    <Button onClick={props.onSearch} className="font-size-13 btn btn-primary btn-lg button-publish border-0 ml-2"> SEARCH </Button>
                    <Button className="font-size-13 btn btn-primary btn-lg button-publish border-0 ml-2"> GO TO MY FAVORITES </Button>
                </FormGroup>
            </Form>
            
        </div>

    </div>
)


export default HomePage;
import React, {Component} from 'react';
import { Row, Col, Container, Input, Button, Form, FormGroup } from 'reactstrap';
import './ShowResult.scss';

const ShowResult = props =>
    (
        <div className="page">
            <div className="login-container">
                
                <h2> result: {props.result} </h2>
                
                
            </div>

        </div>
    )

export default ShowResult;
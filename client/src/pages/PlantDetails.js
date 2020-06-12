import React from "react";
import { Link } from "react-router-dom";

import { Col, Row, Container } from "../components/Grid"
import Jumbotron from "../components/Jumbotron";

function PlantDetails() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                   <Jumbotron>
                       <h1>
                           Plant Name Here
                       </h1>
                   </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-10 md-offset-1">
                   <article>
                       <h1>Description</h1>
                       <p>
                           Plant Description here
                       </p>
                   </article>
                </Col>
            </Row>
            <Row>
                <Col size="md-2">
                   <Link to="/plants">Back to Plants List</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default PlantDetails;
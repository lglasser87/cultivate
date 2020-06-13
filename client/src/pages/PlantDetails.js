import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Col, Row, Container } from "../components/Grid"
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API"

import "../components/CSS/PlantDetails.css";

function PlantDetails(props) {
    const [plant, setPlant] = useState({})

    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/plants/599dcb67f0f16317844583fc
    const {id} = useParams()
    useEffect(() => {
        API.getPlant(id)
            .then(res => setPlant(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                   <Jumbotron>
                       <h1 id="plant-name">
                           {plant.name}
                       </h1>
                   </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-10 md-offset-1">
                   <article>
                       <h1 id="plant-description">Description</h1>
                       <p>
                           {plant.description}
                       </p>
                       <br />
                       <h1 id="best-season">Best Season</h1>
                       <p>
                           {plant.season}
                       </p>
                       <br />
                       <h1 id="getting-started">Getting Started</h1>
                       <p>
                           {plant.gettingStarted}
                       </p>
                       <br />
                       <h1 id="maintenance">How to Maintain your Plant</h1>
                       <p>
                           {plant.howToMaintain}
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
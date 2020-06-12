import React from "react";
import { Link } from "react-router-dom";

import { Col, Row, Container } from "../components/Grid"
import Jumbotron from "../components/Jumbotron";

function BlogDetails() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                   <Jumbotron>
                       <h1>
                           Blog Title Here
                       </h1>
                   </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-10 md-offset-1">
                   <article>
                       <h1>Author</h1>
                       <p>
                           Blog Text
                       </p>
                   </article>
                </Col>
            </Row>
            <Row>
                <Col size="md-2">
                   <Link to="/blogs">Back to Blogs</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default BlogDetails;
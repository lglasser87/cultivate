import React from "react";
import { Link } from "react-router-dom";

import { Col, Row, Container } from "../components/Grid"
import Jumbotron from "../components/Jumbotron";

import "../components/CSS/BlogDetails.css";

function BlogDetails() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                   <Jumbotron>
                       <h1 id="blog-title">
                           Blog Title Here
                       </h1>
                   </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-8 md-offset-1">
                   <article>
                       <h1 id="blog-author">Author</h1>
                       <p id="blog-text">
                           Blog Text
                       </p>
                   </article>
                </Col>
            </Row>
            <Row>
                <Col size="md-2">
                   <Link to="/blogs" id="back-to-blogs">Back to Blogs</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default BlogDetails;
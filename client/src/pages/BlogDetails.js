import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Col, Row, Container } from "../components/Grid"
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API"

import "../components/CSS/BlogDetails.css";

function BlogDetails(props) {
    const[post, setPost] = useState([])

    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    const {id} = useParams()
    useEffect(() => {
        API.getPost(id)
            .then(res => setPost(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                   <Jumbotron fluid>
                       <h1 id="blog-title-and-author">
                           {post.title} by {post.author}
                       </h1>
                        <h2 id="blog-date">Date: {post.date}</h2>
                   </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-8 md-offset-1">
                   <article>
                       <h1 id="my-thoughts">My Thoughts Today</h1>
                       <p id="blog-text">
                           {post.body}
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
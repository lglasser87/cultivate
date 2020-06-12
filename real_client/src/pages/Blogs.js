import React from "react";
import { Link } from "react-router-dom";

import Jumbotron from "../components/Jumbotron"
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Blogs() {
    const blogs = [
        {
            id: "TB1",
            title: "Test1",
            author: "Test1",
            date: "Test1",
            text: "Test1"
        },
        {
            id: "TB2",
            title: "Test2",
            author: "Test2",
            date: "Test2",
            text: "Test2"
        },
        {
            id: "TB3",
            title: "Test3",
            author: "Test3",
            date: "Test3",
            text: "Test3"
        }
    ]

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>My Blogs</h1>
                    </Jumbotron>
                    <form>
                        <Input 
                            name="title"
                            placeholder="Title (required)"
                        />
                        <TextArea
                            name="blog"
                            placeholder="Write here! (required)"
                        />
                        <FormBtn>
                            Post
                        </FormBtn>
                    </form>
                </Col>
            </Row>
            <Row>
            <Col size="med-12">
                <h1>Latest Blog Posts</h1>
                <List>
                    {blogs.map(blog => (
                        <ListItem key={blog.id}>
                            <Link to="/blogdetails">
                                <strong>
                                    {blog.title} by {blog.author}
                                </strong>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Col>
            </Row>
        </Container>
    )
}

export default Blogs;

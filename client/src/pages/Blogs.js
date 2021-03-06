import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Jumbotron from "../components/Jumbotron"
import DeleteBtn from "../components/DeleteBtn"
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from "../utils/API";

import "../components/CSS/Blogs.css";

function Blogs() {
    const [posts, setPosts] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all posts and store them with setPosts
    useEffect(() => {
        loadPosts()
    }, [])

    // Loads all posts and sets them to posts
    function loadPosts() {
        API.getPosts()
            .then(res => 
                setPosts(res.data)
            )
            .catch(err => console.log(err))
    };

    // Deletes a post from the database with a given id, then reloads the posts from the db
    function deletePost(id) {
        API.deletePost(id)
        .then(res => loadPosts())
        .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    // When the form is submitted, use the API.savePost method to save the post data
    // Then reload posts from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.author) {
            API.savePost({
                title: formObject.title,
                author: formObject.author,
                body: formObject.body,
                date: Date.now()
            })
            .then(res => loadPosts())
            .catch(err => console.log(err));
        }
    }

    return (
        <Container fluid>
            <Jumbotron>
                <h1 id="my-blogs">My Blogs</h1>
            </Jumbotron>
            <Row>
                <Col size="md-4">
                    <h1 id="latest">Latest Blog Posts</h1>
                    {posts.length ? (
                    <List>
                        {posts.map(post => (
                            <ListItem key={post._id}>
                                <Link to={"/blogs/" + post._id} id="blog">
                                    <strong>
                                        {post.title} by {post.author} at {post.date}
                                    </strong>
                                </Link>
                                <DeleteBtn onClick={() => deletePost(post._id)} />
                            </ListItem>
                        ))}
                    </List>
                    ) : (
                        <h3 id="no-posts">No Posts to Display</h3>
                    )}
                </Col>
                <Col size="md-8">
                    <form>
                        <Input
                            onChange={handleInputChange} 
                            name="title"
                            placeholder="Title (required)"
                        />
                        <Input
                            onChange={handleInputChange} 
                            name="author"
                            placeholder="Author (required)"
                        />
                        <TextArea
                            onChange={handleInputChange}
                            name="body"
                            placeholder="Write here! (required)"
                        />
                        <FormBtn
                            disabled={!(formObject.author && formObject.title)}
                            onClick={handleFormSubmit}
                        >
                            Post                
                            <FontAwesomeIcon icon={['fas', 'blog']} style={{marginLeft:'2px', paddingLeft:'2px'}}/>
                        </FormBtn>  
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Blogs;

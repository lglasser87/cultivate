import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron"
import { List, ListItem } from "../components/List"

function Dashboard() {
    const weatherDat = [
        {
            id: "TW1",
            type: "Sunny",
            temperature: "72 F",
            date: "Monday"
        },
        {
            id: "TW2",
            type: "Sunny",
            temperature: "72 F",
            date: "Tuesday"
        },
        {
            id: "TW3",
            type: "Sunny",
            temperature: "72 F",
            date: "Wed"
        }
    ]

    const blogsDat = [
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

    useEffect(() => {
        loadWeather();
    }, []);

    function loadWeather() {
        API.getWeather()
            .then(res =>
                    console.log(res)
            )
            .catch(err => console.log(err));
    };

    return (
        <Container>
            <Row>
                <Jumbotron>
                    <h1>Sunday</h1>
                    <h1>Sunny</h1>
                    <h1>72 F</h1>
                </Jumbotron>
            </Row>
            <Col size="sm-6">
                <List>
                    {weatherDat.map(day => (
                        <ListItem key={day.id}>
                            <strong>
                                {day.date}
                                {day.type}
                                {day.temperature}
                            </strong>
                        </ListItem>
                    ))}
                </List>
            </Col>
            <Col size="sm-6">
                <h1>Latest Blog Posts</h1>
                <List>
                    {blogsDat.map(blog => (
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
        </Container>
    )
}

export default Dashboard;
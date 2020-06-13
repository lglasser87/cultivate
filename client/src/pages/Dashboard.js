import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { WeekContainer, DayCard } from "../components/Forecasts";
import { List, ListItem } from "../components/List";
// import moment from "moment";

import "../components/CSS/Dashboard.css";

function Dashboard() {
    const [dailyWeather, setDailyWeather] = useState([]);
    // let [responseObj, setResponseObj] = useState({});

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
            .then(res => {
                console.log(dailyWeather);
                setDailyWeather(res.data);
                
            }
            )
            .catch(err => console.log(err));
    };



    return (
        <Container fluid>
            <Row>
                <Jumbotron>
                    <h1 id="my-dash">My Dashboard</h1>
                </Jumbotron>
            </Row>
            <Row>
                <Col size="sm-6">
                    {dailyWeather.length ? (
                        <WeekContainer>
                            <h1 id="forecast">5-Day Forecast</h1>
                            {dailyWeather.map(day => (
                                <DayCard key={day._id}>
                                    <div className="col-sm-2">
                                        <div className="card">
                                            <h3 className="card-title" id="card-day">{day.name}</h3>
                                            <p className="text-muted" id="card-date">{day.date}</p>
                                            {/* <img alt="card-icon" id="card-icon"/> */}
                                            <i></i>
                                            <h2 id="card-temp">{day.temperature}</h2>
                                            <div className="card-body">
                                                <p className="card-text" id="card-description">{day.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </DayCard>
                            ))}
                        </WeekContainer>
                    ) : (
                        <h3 id="no-weather">No Weather To display</h3>
                    )}  
                </Col>
                <Col size="sm-6">
                    <h1 id="latest-blog-posts">Latest Blog Posts</h1>
                    <List>
                        {blogsDat.map(blog => (
                            <ListItem key={blog.id}>
                                <Link to="/blogdetails" id="blog-link">
                                    <strong>
                                        {blog.title} by {blog.author}
                                    </strong>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Col>
            </Row>
            {/* <Jumbotron>
                <h1>Weather Forecast</h1>
            </Jumbotron>
            <Col size="sm-12">
                {dailyWeather.length ? (
                    <WeekContainer>
                        {dailyWeather.map(day => (
                            <DayCard key={day._id}>
                                <h2>{day.name}</h2>
                                <h3>{day.date}</h3>
                                <h3>{day.description}</h3>
                                <h3>{day.temperature}</h3>
                                <br />
                            </DayCard>
                        ))}
                    </WeekContainer>
                ): (
                    <h3>No Weather to Display</h3>
                )}
            </Col> */}
        </Container>
    )
}

export default Dashboard;
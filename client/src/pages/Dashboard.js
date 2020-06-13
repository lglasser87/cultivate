import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from "../components/List";
import { WeekContainer, DayCard } from "../components/Forecasts";
// import moment from "moment";

import "../components/CSS/Dashboard.css";

function Dashboard() {
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

    const [dailyWeather, setDailyWeather] = useState([])

    useEffect(() => {
        loadWeather();
    }, []);

    function loadWeather() {
        API.getWeather()
            .then(res => {
                // const dailyData = res.data.list.dt_txt.filter(date => {
                //     date.includes("18:00:00")
                // }); 
                console.log(dailyWeather)
                setDailyWeather(res.data);
            }
            )
            .catch(err => console.log(err));
    };

    return (
        <Container>
            <Row>
                <Jumbotron fluid>
                    <h1 id="my-dash">My Dashboard</h1>
                </Jumbotron>
            </Row>
            <Row>
                <Col size="sm-6">
                    {dailyWeather.length ? (
                        <WeekContainer>
                            <h id="forecast">5-Day Forecast</h>
                            {dailyWeather.map(day => (
                                <DayCard>
                                    <div className="col-sm-2">
                                        <div className="card">
                                            <h3 className="card-title" id="card-day">Day</h3>
                                            <p className="text-muted" id="card-time">Time</p>
                                            {/* <img alt="card-icon" id="card-icon"/> */}
                                            <i></i>
                                            <h2 id="card-temp">Temp</h2>
                                            <div className="card-body">
                                                <p className="card-text" id="card-description">Weather Description</p>
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
        </Container>
    )
}

export default Dashboard;
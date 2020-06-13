import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from "../components/List";
import { WeekContainer, DayCard } from "../components/Forecasts";
import moment from "moment";

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
                <Jumbotron>
                    <h1>Sunday</h1>
                    <h1>Sunny</h1>
                    <h1>72 F</h1>
                </Jumbotron>
            </Row>
            <Col size="sm-6">
                {dailyWeather.length ? (
                    <WeekContainer>
                        {dailyWeather.map(day => (
                            <DayCard>
                                <div className="col-sm-2">
                                    <div className="card">
                                        <h3 className="card-title">Day</h3>
                                        <p className="text-muted">Time</p>
                                        <i></i>
                                        <h2>Temp</h2>
                                        <div className="card-body">
                                            <p className="card-text">Weather Description</p>
                                        </div>
                                    </div>
                                </div>
                            </DayCard>
                        ))}
                    </WeekContainer>
                ) : (
                    <h3>No Weather To display</h3>
                )}  
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
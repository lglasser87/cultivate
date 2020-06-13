import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { WeekContainer, DayCard } from "../components/Forecasts";
import moment from "moment";

function Dashboard() {
    const [dailyWeather, setDailyWeather] = useState([])
    let [responseObj, setResponseObj] = useState({})

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
            <Jumbotron>
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
            </Col>
        </Container>
    )
}

export default Dashboard;
import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "../components/Grid"
import Jumbotron from "../components/Jumbotron"
import { List, ListItem} from "../components/List";

function Plants() {
    const plants = [
        {
            id: "T1",
            name: "Test1",
            description: "Test1",
            season: "Test1",
            gettingStarted: "Test1",
            howToMaintain: "Test1",
            rotate: "Test1"
        },
        {
            id: "T2",
            name: "Test2",
            description: "Test2",
            season: "Test2",
            gettingStarted: "Test2",
            howToMaintain: "Test2",
            rotate: "Test2"
        }
    ]
    return (
        <Container fluid>
            <Jumbotron>
                <h1>Plants List</h1>
            </Jumbotron>
            <List>
            {plants.map(plant => (
                <ListItem key={plant.id}>
                    <Link to="/plantdetails">  
                    <strong>
                        {plant.name}
                    </strong>
                    </Link>
                </ListItem>
            ))}
            </List>
        </Container>
    )
}

export default Plants;
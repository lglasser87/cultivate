import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "../components/Grid"
import { List, ListItem} from "../components/List";
import Jumbotron from "../components/Jumbotron"
import DeleteBtn from "../components/DeleteBtn"
import API from "../utils/API"

import "../components/CSS/Plants.css";

function Plants() {
    // Setting our component's initial state
    const [plants, setPlants] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all plants and store them with setPlants
    useEffect(() => {
        loadPlants()
    }, [])

    // Loads all plants and sets them to plants
    function loadPlants() {
        API.getPlants()
            .then(res => {
                console.log(plants)
                setPlants(res.data)
            }
            )
            .catch(err => console.log(err));
    };

    function deletePlant(id) {
        API.deletePlant(id)
            .then(res => loadPlants())
            .catch(err => console.log(err));
    }
    
    return (
        <Container fluid>
            <Jumbotron>
                <h1 id="my-plants">My Plants</h1>
            </Jumbotron>
            <Row>
                <div>
                {plants.length ? (
                    <List>
                        {plants.map(plant => (
                            <ListItem key={plant._id}>
                                <Link to={"/plants/" + plant._id} class="plant">
                                    <strong>
                                        {plant.name}
                                    </strong>
                                </Link>
                                <DeleteBtn onClick={() => deletePlant(plant._id)} />
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} id="no-plants">
                        No Plants to Display
                    </div>
                )}
                </div>
            </Row>
        </Container>
    );
}


export default Plants;
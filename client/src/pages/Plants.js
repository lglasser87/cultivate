import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "../components/Grid"
import Jumbotron from "../components/Jumbotron"
import { List, ListItem} from "../components/List";
import DeleteBtn from "../components/DeleteBtn"
import API from "../utils/API"

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
                <h1>Plants List</h1>
            </Jumbotron>
            {plants.length ? (
                <List>
                    {plants.map(plant => (
                        <ListItem key={plant._id}>
                            <Link to={"/plantdetails" + plant._id}>
                                <strong>
                                    {plant.name}
                                </strong>
                            </Link>
                            <DeleteBtn onClick={() => deletePlant(plant._id)} />
                        </ListItem>
                    ))}
                </List>
            ) : (
                <h3>No Plants to Display</h3>
            )}
        </Container>
    );
}


export default Plants;
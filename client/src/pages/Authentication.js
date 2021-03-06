import React from "react";

import { Container, Row, Col } from "../components/Grid";
import { Input, FormBtn} from "../components/Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Jumbotron from "../components/Jumbotron";
// import { FormEl, Input, FormBtn} from "../components/Form"; if using Bootstrap form

import "../components/CSS/GoogleFonts.css";

const mystyle = {
    fontFamily: 'Pacifico',
    color: '#7da27e'
}

function Authentication() {
    return (
    <Container fluid>
        <Jumbotron>
            <h1 style={mystyle} id="signup">Log In</h1>
        </Jumbotron>
        <Row>
            <Col size="md-6">
                <form>
                    <Input
                        name="userName"
                        placeholder="User Name"
                    />
                    <Input
                        name="password"
                        placeholder="Password"
                    />
                    <FormBtn>
                        Login
                        <FontAwesomeIcon icon={['fas', 'sign-in-alt']} />
                    </FormBtn>
                </form>
            </Col>
        </Row>
    </Container>
    );
}

export default Authentication;
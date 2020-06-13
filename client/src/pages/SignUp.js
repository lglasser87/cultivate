import React from "react";

import { Container, Row, Col } from "../components/Grid";
import { Input, FormBtn} from "../components/Form";
import Jumbotron from "../components/Jumbotron";

import "../components/CSS/GoogleFonts.css";

const mystyle = {
    fontFamily: 'Pacifico',
    color: '#7da27e'
}

function SignUp() {
    return (
    <Container fluid>
        <Jumbotron>
            <h1 style={mystyle} id="signup">Sign Up</h1>
        </Jumbotron>
        <Row>
            <Col size="md-12">
                <form>    
                <Input
                    name="userName"
                    placeholder="User Name (required)"
                />
                <Input
                    name="password"
                    placeholder="Password (required)"
                />
                <Input
                    name="firstName"
                    placeholder="First Name (required)"
                />
                <Input
                    name="lastName"
                    placeholder="Last Name (required)"
                />
                <Input
                    name="email"
                    placeholder="email (required)"
                />
                <FormBtn>
                    Register
                </FormBtn>
                </form>
            </Col>
        </Row>
    </Container>
        )
}

export default SignUp;
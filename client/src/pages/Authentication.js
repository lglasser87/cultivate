import React from "react";

import { Container, Row, Col } from "../components/Grid"
import { Input, FormBtn} from "../components/Form";

function Authentication() {
    return (
    <Container fluid>
        <Row>
            <Col size="md-4">
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
                </FormBtn>
                </form>
            </Col>
        </Row>
    </Container>
    );
}

export default Authentication;
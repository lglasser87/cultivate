import React from "react";
import { Container, Row, Col } from "../components/Grid";
import { Form, Input, FormBtn} from "../components/Form";
// import { FormEl, Input, FormBtn} from "../components/Form"; if using Bootstrap form

function Authentication() {
    return (
    <Container fluid>
        <Row>
            <Col size="md-4">
                <Form>
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
                </Form>
            </Col>
        </Row>
    </Container>
    );
}

export default Authentication;
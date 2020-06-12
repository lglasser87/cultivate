import React from "react";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.css";

// This file exports the FormEl, Input, TextArea, and FormBtn components
export function Form(props) {
  return (
    <Grid className="center aligned">
      <div className="form-group" class="form">
        <form class="form" {...props}>
        </form>
      </div>
    </Grid>
  );
}

export function Input(props) {
  return (
    <div className="form-group" id="input">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group" id="text-area">
      <textarea className="form-control" rows="20" {...props}/>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success" id="form-btn">
      {props.children}
      <FontAwesomeIcon icon={['fas', 'sign-in-alt']} />
    </button>
  );
}
//=========================================================
//BOOTSTRAP FORM
//=========================================================

// import React, {Component} from "react";
// import { Form, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import "./NavLinks.css";

// class FormEl extends Component {
//   render() {
//     return (
//       <Form></Form>
//     )
//   }
// }

// class Input extends Component {
//   render() {
//     return (
//       <Form.Group controlId="formBasicEmail">
//       <Form.Label>Email address</Form.Label>
//       <Form.Control type="email" placeholder="Enter email" />
//     </Form.Group>
//     )
//   }
// }

// class TextArea extends Component {
//   render() {
//     return (
//       <Form.Group controlId="exampleForm.ControlTextarea1">
//       <Form.Label>Example textarea</Form.Label>
//       <Form.Control as="textarea" rows="3" />
//     </Form.Group>
//     )
//   }
// }
// class FormBtn extends Component {
//   render() {
//     return (
//       <Button variant="primary" type="submit">
//       Submit
//     </Button>
//     )
//   }
// }

//export default FormEl;
//export default Input;
//export default TextArea;
//export default FormBtn;

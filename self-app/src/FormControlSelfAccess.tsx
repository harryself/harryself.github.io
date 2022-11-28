
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PASSWORD_FOR_SELF = "selfalumni!"

function FormControlAccessSelf() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (event.target.formBasicEmail.value == PASSWORD_FOR_SELF) {
      console.log("yaay");
      setValidated(true);
    }
  };

  return (
    <Form validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Self Alumni Password</Form.Label>
        <Form.Control placeholder="Password" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid password
          </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormControlAccessSelf;
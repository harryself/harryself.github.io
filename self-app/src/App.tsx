import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import jayhawk from './images/jayhawk.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControlAccessSelf from "./FormControlSelfAccess";

function App() {
  return (
    <div className="HomePage">
      <div className="App">
        <Container>
          <Row>
            <Col>
              <h2>
                <img src={jayhawk} width="25" height="25" />
                 KU Self Alumni Program
            </h2>
            </Col>
          </Row>
        </Container>
      </div>

      <header className="App-header">
        <FormControlAccessSelf />
      </header>
    </div >
  );
}

export default App;

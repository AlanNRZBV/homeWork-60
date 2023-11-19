import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Messages from '../components/Messages/Messages.tsx';
import MessagesForm from '../components/MessagesForm/MessagesForm.tsx';

const App = () => (
  <Container>
    <Row className="flex-column vh-100 py-3">
      <Col className="border border-bottom-0 border-2 rounded-top-3 overflow-auto">
        <Messages />
      </Col>
      <Col className="border border-2 rounded-bottom-3 flex-grow-0 d-flex flex-column">
        <MessagesForm />
      </Col>
    </Row>
  </Container>
);

export default App;

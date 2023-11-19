import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Messages from '../components/Messages/Messages.tsx';
import MessagesForm from '../components/MessagesForm/MessagesForm.tsx';
import { IMessagesItem } from '../../../types';
import axios from 'axios';

const getMessagesUrl = 'http://146.185.154.90:8000/messages';

const App = () => {
  const [messages, setMessages] = useState<IMessagesItem[]>([]);
  useEffect(() => {
    axios
      .get(getMessagesUrl)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Row className="flex-column vh-100 py-3">
        <Col className="border border-bottom-0 border-2 rounded-top-3 overflow-auto">
          <Messages messages={messages} />
        </Col>
        <Col className="border border-2 rounded-bottom-3 flex-grow-0 d-flex flex-column">
          <MessagesForm url={getMessagesUrl} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;

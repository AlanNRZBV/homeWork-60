import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Messages from '../components/Messages/Messages.tsx';
import MessagesForm from '../components/MessagesForm/MessagesForm.tsx';
import { IMessagesItem } from '../../../types';
import axios from 'axios';

const getMessagesUrl = 'http://146.185.154.90:8000/messages';

const App = () => {
  const [messages, setMessages] = useState<IMessagesItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setIsLoading((prevState) => !prevState);
      axios
        .get(getMessagesUrl)
        .then((response) => {
          setMessages(response.data);
          setIsLoading((prevState) => !prevState);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 10000);
  }, []);

  return (
    <Container>
      <Row className="flex-column vh-100 py-3">
        <Col className="border border-bottom-0 border-2 rounded-top-3 overflow-auto position-relative">
          {isLoading ? (
            <Spinner
              animation="border"
              role="status"
              className="position-absolute top-50 start-50 translate-middle"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <Messages messages={messages} />
          )}
        </Col>
        <Col className="border border-2 rounded-bottom-3 flex-grow-0 d-flex flex-column">
          <MessagesForm url={getMessagesUrl} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;

import React, { FC, useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { SendFill } from 'react-bootstrap-icons';
import axios from 'axios';
import { IMessageForm } from '../../../../types';

const MessagesForm: FC<IMessageForm> = ({ url }) => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const data = {
      message: message,
      author: username,
    };
    if (data.message !== '' && data.author !== '') {
      axios
        .post(url, data, {
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
        })
        .then((response) => {
          console.log(response);
        });
    }
    return () => {
      setMessage('');
    };
  }, [toggle]);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setToggle((prevState) => !prevState);
  };

  return (
    <Form className="pt-3" onSubmit={submitHandler}>
      <InputGroup className="mb-3 d-flex">
        <Form.Control
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          placeholder="Username"
          value={username}
        />
        <Form.Control
          onChange={(event) => setMessage(event.target.value)}
          className="w-50"
          type="text"
          placeholder="Message"
          value={message}
        />
        <Button variant="outline-secondary" type="submit">
          <SendFill />
        </Button>
      </InputGroup>
    </Form>
  );
};

export default MessagesForm;

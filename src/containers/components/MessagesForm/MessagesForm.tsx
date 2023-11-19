import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { SendFill } from 'react-bootstrap-icons';

const MessagesForm = () => {

  const submitHandler = (e: React.FormEvent)=>{
    e.preventDefault()
  }

  return (
    <Form className="pt-3">
      <InputGroup className="mb-3 d-flex">
        <Form.Control type="text" placeholder="Username" />
        <Form.Control className="w-50" type="text" placeholder="Message" />
        <Button variant="outline-secondary" type="submit">
          <SendFill />
        </Button>
      </InputGroup>
    </Form>
  );
};

export default MessagesForm;

import React, { useState } from "react";
import { Card, Container, Form, Row, Col } from "react-bootstrap";
import useDebounce from "../hooks/useDebounce";

function EditorForm(props: { value: string; onChange: Function }) {
  return (
    <Card className="p-3" style={{height: '600px'}}>
      <Card.Title>Editor</Card.Title>
      <Card.Body>
        <Form.Control
          as="textarea"
          placeholder="## Title"
          value={props.value}
          onChange={(event) => props.onChange(event.target.value)}
          className="h-100"
        />
      </Card.Body>
    </Card>
  );
}

export default EditorForm;

import React, { useState } from "react";
import { Card, Container, Form, Row, Col } from "react-bootstrap";
import useDebounce from "../hooks/useDebounce";
import EditorForm from "./EditorForm";
import MarkdownParser from "./MarkdownParser";

export default function MarkdownEditor() {
  const [form, setForm] = useState('');
  useDebounce(() => console.log(form), [form], 200);

  return (
    <Container fluid="lg" className="text-primary p-3 h-100">
      <Row className="g-3 h-100 align-items-center">
        <Col md={6} xs={12}>
          <EditorForm value={form} onChange={setForm}/>
        </Col>
        <Col md={6} xs={12}>
          <MarkdownParser parsingvalue={form}/>
        </Col>
      </Row>
    </Container>
  );
}

import { useState } from "react";
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import { Card } from "react-bootstrap";
import parse from 'html-react-parser';

function MarkdownParser(props: { parsingvalue: string }) {
  const [parsed, setParsed] = useState('')

  unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(props.parsingvalue)
    .then(
      (file) => setParsed(String(file)),
      (error) => {
        // Handle your error here!
        throw error
      }
    )

  return (
    <Card className="p-3">
      <Card.Title>Markdown</Card.Title>
      <Card.Body>
        {parse(parsed)}
      </Card.Body>
    </Card>
  );
}

export default MarkdownParser;

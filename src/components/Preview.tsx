import React from "react";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkReact from "remark-react";
import "github-markdown-css/github-markdown.css";

interface Props {
  doc: string;
}

const Preview: React.FC<Props> = (props) => {
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkReact, React)
    .processSync(props.doc).result;
  return (
    <div className="preview w-1/2 overflow-auto p-2 prose prose-gruvbox">
      {md}
    </div>
  );
};

export default Preview;

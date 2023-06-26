import React from "react";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkReact from "remark-react";
import "github-markdown-css/github-markdown.css";
import { useEditMode, Modes } from "../store";

interface Props {
  doc: string;
}

const Preview: React.FC<Props> = (props) => {
  const mode = useEditMode((state) => state.mode);
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkReact, React)
    .processSync(props.doc).result;
  return (
    <div
      className={`w-1/2 overflow-auto p-2 prose prose-gruvbox flex-grow ${
        mode === Modes.Edit ? "hidden" : "block"
      }`}
    >
      {md}
    </div>
  );
};

export default Preview;

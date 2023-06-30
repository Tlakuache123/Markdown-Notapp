import React from "react";
import remarkGfm from "remark-gfm";
import { useEditMode, Modes } from "../store";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  gruvboxDark,
  gruvboxLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useDarkMode } from "../store";

interface Props {
  doc: string;
}

const Preview: React.FC<Props> = (props) => {
  const mode = useEditMode((state) => state.mode);
  const darkMode = useDarkMode((state) => state.darkMode);

  const { doc } = props;
  return (
    <div
      className={`w-1/2 overflow-auto p-2 prose prose-gruvbox dark:prose-invert flex-grow ${
        mode === Modes.Edit ? "hidden" : "block"
      }`}
    >
      <ReactMarkdown
        children={doc}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={darkMode === "light" ? gruvboxLight : gruvboxDark}
                PreTag="div"
                customStyle={{ backgroundColor: "transparent" }}
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default Preview;

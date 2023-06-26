import React, { useState, useCallback } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { invoke } from "@tauri-apps/api/tauri";

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>(
    "```\nconsole.log('hello world!')\n```"
  );
  const handleDocChange = useCallback((newDoc) => {
    setDoc(newDoc);
  }, []);

  const sendNote = () => {
    console.log("Nueva nota");
    invoke("add_note", { title, content });
  };

  return (
    <div className="h-screen">
      <div className="flex h-full">
        <Editor onChange={handleDocChange} initialDoc={doc} />
        <Preview doc={doc} />
      </div>
    </div>
  );
};

export default App;

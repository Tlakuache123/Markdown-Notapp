import React, { useState, useCallback } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Bar from "./components/Bar";
import { invoke } from "@tauri-apps/api/tauri";
import { useEditMode, Modes } from "./store";

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>("");
  const mode = useEditMode((state) => state.mode);
  const handleDocChange = useCallback((newDoc) => {
    setDoc(newDoc);
  }, []);

  const sendNote = () => {
    console.log("Nueva nota");
    invoke("add_note", { title, content });
  };

  return (
    <div className="flex flex-col h-full">
      <Bar />
      <div
        className={`flex grow ${mode === Modes.View ? "justify-center" : ""}`}
      >
        <Editor onChange={handleDocChange} initialDoc={doc} />
        <Preview doc={doc} />
      </div>
    </div>
  );
};

export default App;

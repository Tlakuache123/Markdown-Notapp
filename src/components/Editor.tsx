import React, { useCallback, useEffect } from "react";
import useCodeMirror from "./use-codemirror";
import { useEditMode, Modes } from "../store";

interface Props {
  initialDoc: string;
  onChange: (doc: string) => void;
}

const Editor: React.FC<Props> = (props) => {
  const mode = useEditMode((state) => state.mode);
  const { onChange, initialDoc } = props;
  const handleChange = useCallback(
    (state) => onChange(state.doc.toString()),
    [onChange]
  );
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    inititalDoc: initialDoc,
    onChange: handleChange,
  });

  useEffect(() => {
    if (editorView) {
    }
  }, [editorView]);

  return (
    <div
      className={`w-1/2 flex-grow ${mode === Modes.View ? "hidden" : "block"}`}
      ref={refContainer}
    ></div>
  );
};

export default Editor;

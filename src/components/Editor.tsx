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

  const modeStyle = () => {
    if (mode === Modes.Edit) {
      return "block w-full overflow-auto";
    } else if (mode === Modes.Split) {
      return "block w-1/2 overflow-auto";
    }
    return "hidden";
  };

  useEffect(() => {
    if (editorView) {
    }
  }, [editorView]);

  return <div className={modeStyle()} ref={refContainer}></div>;
};

export default Editor;

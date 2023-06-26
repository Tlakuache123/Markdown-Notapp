import React, { useCallback, useEffect } from "react";
import useCodeMirror from "./use-codemirror";

interface Props {
  initialDoc: string;
  onChange: (doc: string) => void;
}

const Editor: React.FC<Props> = (props) => {
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

  return <div className="w-1/2" ref={refContainer}></div>;
};

export default Editor;

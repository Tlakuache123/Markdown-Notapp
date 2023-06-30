import { useEffect, useState, useRef } from "react";
import { EditorState, Compartment } from "@codemirror/state";
import {
  EditorView,
  keymap,
  highlightActiveLine,
  lineNumbers,
  highlightActiveLineGutter,
} from "@codemirror/view";
import {
  defaultKeymap,
  historyKeymap,
  indentWithTab,
  history,
} from "@codemirror/commands";
import { indentOnInput } from "@codemirror/language";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { basicSetup } from "codemirror";
import { languages } from "@codemirror/language-data";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags } from "@lezer/highlight";
import { gruvboxLight } from "cm6-theme-gruvbox-light";
import { useDarkMode } from "../store";
import type React from "react";
import { gruvboxDark } from "cm6-theme-gruvbox-dark";

interface Props {
  inititalDoc: string;
  onChange?: (state: EditorState) => void;
}

const transparentTheme = EditorView.theme({
  "&": {
    backgroundColor: "transparent !important",
    height: "100%",
  },
});

const mySyntaxHighlighting = HighlightStyle.define([
  {
    tag: tags.heading1,
    fontSize: "1.6em",
    fontWeight: "bold",
  },
  {
    tag: tags.heading2,
    fontSize: "1.4em",
    fontWeight: "bold",
  },
  {
    tag: tags.heading3,
    fontSize: "1.2em",
    fontWeight: "bold",
  },
]);

const useCodeMirror = <T extends Element>(
  props: Props
): [React.MutableRefObject<T | null>, EditorView?] => {
  const setView = useDarkMode((state) => state.setView);
  const refContainer = useRef<T>(null);
  const [editorView, setEditorView] = useState<EditorView>();
  const { onChange } = props;

  let editorTheme = new Compartment();

  useEffect(() => {
    if (!refContainer.current) return;

    const startState = EditorState.create({
      doc: props.inititalDoc,
      extensions: [
        basicSetup,
        keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
        lineNumbers(),
        highlightActiveLineGutter(),
        history(),
        indentOnInput(),
        highlightActiveLine(),
        markdown({
          base: markdownLanguage,
          codeLanguages: languages,
          addKeymap: true,
        }),
        transparentTheme,
        syntaxHighlighting(mySyntaxHighlighting),
        editorTheme.of(gruvboxLight),
        EditorView.lineWrapping,
        EditorView.updateListener.of((update) => {
          if (update.changes) {
            onChange && onChange(update.state);
          }
        }),
      ],
    });

    const view = new EditorView({
      state: startState,
      parent: refContainer.current,
    });

    setEditorView(view);
    setView(view, editorTheme);
  }, [refContainer]);

  return [refContainer, editorView];
};

export default useCodeMirror;

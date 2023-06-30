import { create } from "zustand";
import { EditorView } from "codemirror";
import { Compartment } from "@codemirror/state";
import { gruvboxDark } from "cm6-theme-gruvbox-dark";
import { gruvboxLight } from "cm6-theme-gruvbox-light";

enum Modes {
  Split = 0,
  Edit,
  View,
}

interface EditMode {
  mode: Modes;
  switch: () => void;
}

type DarkModeString = "dark" | "light";

interface DarkMode {
  darkMode: DarkModeString;
  view: View | null;
  switch: (by: DarkModeString) => void;
  setView: (v: EditorView, c: Compartment) => void;
}

interface View {
  view: EditorView;
  comparment: Compartment;
}

const useEditMode = create<EditMode>()((set) => ({
  mode: Modes.Split,
  switch: () => set((state) => ({ mode: (state.mode + 1) % 3 })),
}));

const useDarkMode = create<DarkMode>()((set) => ({
  darkMode: "light",
  view: null,
  viewThemeComparment: null,
  switch: (by: DarkModeString) =>
    set((state) => {
      if (state.view !== null) {
        state.view.view.dispatch({
          effects: state.view.comparment.reconfigure(
            state.darkMode !== "light" ? gruvboxLight : gruvboxDark
          ),
        });
      }
      // Set dark/light mode
      return { darkMode: by };
    }),
  setView: (v: EditorView, c: Compartment) =>
    set((state) => ({ view: { view: v, comparment: c } })),
}));

export { useEditMode, Modes, useDarkMode };

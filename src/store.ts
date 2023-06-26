import { create } from "zustand";

enum Modes {
  Split = 0,
  Edit,
  View,
}

interface EditMode {
  mode: Modes;
  switch: () => void;
}

const useEditMode = create<EditMode>()((set) => ({
  mode: Modes.Split,
  switch: () => set((state) => ({ mode: (state.mode + 1) % 3 })),
}));

export { useEditMode, Modes };

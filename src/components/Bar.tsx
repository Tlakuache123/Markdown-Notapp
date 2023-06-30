import React from "react";
import { useEditMode, Modes } from "../store";
import DarkModeButton from "./DarkModeButton";

const Bar: React.FC = () => {
  const switchMode = useEditMode((state) => state.switch);
  const mode = useEditMode((state) => state.mode);

  const modeText = () => {
    if (mode === Modes.Edit) {
      return "Edit";
    } else if (mode === Modes.View) {
      return "View";
    } else {
      return "Split";
    }
  };

  return (
    <div className="bg-[#3c3836] text-[#ebdbb2] flex flex-row-reverse px-1 gap-1">
      <DarkModeButton />
      <button
        className="bg-[#504945] rounded m-1 px-2 hover:bg-[#665c54]"
        onClick={() => switchMode()}
      >
        {modeText()}
      </button>
    </div>
  );
};

export default Bar;

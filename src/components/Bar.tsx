import React from "react";
import { useEditMode, Modes } from "../store";
import DarkModeButton from "./DarkModeButton";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/20/solid";

const Bar: React.FC = () => {
  const switchMode = useEditMode((state) => state.switch);
  const mode = useEditMode((state) => state.mode);

  const modeText = () => {
    if (mode === Modes.Edit) {
      return <ChevronLeftIcon className="w-4 h-4" />;
    } else if (mode === Modes.View) {
      return <ChevronRightIcon className="w-4 h-4" />;
    } else {
      return <ChevronDoubleUpIcon className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-[#3c3836] text-[#ebdbb2] flex flex-row-reverse px-1">
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

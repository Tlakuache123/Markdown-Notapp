import React, { useState } from "react";
import { useDarkMode } from "../store";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const DarkModeButton: React.FC = () => {
  const [darkMode, switchDarkMode] = useDarkMode((state) => [
    state.darkMode,
    state.switch,
  ]);

  const handleDarkMode = () => {
    if (darkMode === "dark") {
      document.documentElement.classList.remove("dark");
      switchDarkMode("light");
    } else {
      document.documentElement.classList.add("dark");
      switchDarkMode("dark");
    }
  };

  return (
    <div>
      <button
        className="bg-[#504945] rounded m-1 px-2 py-0.5 hover:bg-[#665c54]"
        onClick={handleDarkMode}
      >
        {darkMode === "light" ? (
          <SunIcon className="w-4 h-4" />
        ) : (
          <MoonIcon className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};

export default DarkModeButton;

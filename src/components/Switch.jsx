import React, { useState } from "react";
import { IconDarkModeSwitch } from "../assets/icons/IconDarkModeSwitch";

const Switch = () => {
  const [darkMode, setDarkMode] = useState(true);
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  return (
    <div className="flex col-span-1 justify-end">
      <button
        type="button"
        title="Toggle dark/light mode"
        onClick={() => setDarkMode(!darkMode)}
        className="btn-icon"
      >
        <IconDarkModeSwitch darkMode={darkMode} />
      </button>
    </div>
  );
};

export default Switch;

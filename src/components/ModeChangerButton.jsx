import React, { useState } from "react";
import useTheme from "../context/Theme";

function ModeChangerButton({ children, className = "", ...props }) {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const modeChanger = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <button
      onClick={modeChanger}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`text-2xl mr-10 mt-1 font-extrabold ${className}`}
      style={{
        transition: "transform 0.5s, opacity 0.5s",
        transform: isHovered ? "scale(1.1)" : "scale(1)",
        position: "relative",
        zIndex: 1,
      }}
      {...props}
    >
      <span
        style={{
          transition: "opacity 0.5s",
          opacity: !isHovered ? 1 : 0, // Show when not hovered
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {themeMode === "dark" ? "☀️" : "🌚"}
      </span>
      <span
        style={{
          transition: "opacity 0.5s",
          opacity: isHovered ? 1 : 0, // Show when hovered
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {isHovered ? (themeMode === "dark" ? "🌅" : "🌇") : ""}
      </span>
    </button>
  );
}

export default ModeChangerButton;

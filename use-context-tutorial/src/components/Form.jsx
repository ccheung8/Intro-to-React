import React from "react";
import { ExtraDetailsForm } from "./ExtraDetailsForm";
import { useTheme } from "../provider/UseTheme";

// if theme light make bg blue otherwise green
export function Form() {
  const { theme } = useTheme();
  return (
    <div
      className="form"
      style={{
        background: theme === "light" ? "lightyellow" : "#5F93A0",
        color: theme === "light" ? "#000000" : "#ffffff",
      }}
    >
      <h2>User details</h2>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="lastname" />
      <ExtraDetailsForm />
    </div>
  );
}

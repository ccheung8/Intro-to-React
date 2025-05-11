import React from "react";
import { Form } from "./Form";
import { useTheme } from "../provider/UseTheme";

export function Settings() {
  const { theme } = useTheme();
  return (
    <div
      className="settings"
      style={{
        background: theme === "light" ? "#ffffff" : "orange",
        color: theme === "light" ? "#000000" : "#ffffff",
      }}
    >
      <h2>Settings</h2>
      <p>Settings page content goes here</p>
      <Form />
      <button>Save</button>
      <button>Cancel</button>
    </div>
  );
}

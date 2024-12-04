import React, { useState } from "react";
import { Switch } from "../lib";
import enflag from "./switchMedia/enflag.webp";
import frflag from "./switchMedia/frflag.webp";

const App = () => {
  const [language, setLanguage] = useState("en");
  const toggle = () => {
    language === "fr" ? setLanguage("en") : setLanguage("fr");
  };
  const state = {
    state: language,
    value: { on: "fr", off: "en" },
    func: toggle,
  };
  return (
    <div style={{ width: 640, margin: "15px auto" }}>
      <h1>{language === "en" ? "Hello React" : "Bonjour React"}</h1>
      <Switch pic1={enflag} pic2={frflag} state={state} />
    </div>
  );
};

export default App;
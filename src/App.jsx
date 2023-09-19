import React from "react";
import "./index.css";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import { useState } from "react";

export default function App() {
  const [newName, setNewName] = useState("");

  const getName = (name) => {
    setNewName(name);
    console.log(newName);
  };

  return (
    <div className="flex justify-around p-10">
      <div className="flex flex-col">
        <Personal getName={getName} />
        <Education />
        <Experience />
      </div>
      <div>
        <Resume newName={newName} />
      </div>
    </div>
  );
}

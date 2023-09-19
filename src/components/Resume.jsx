import React from "react";

export default function Resume({ newName }) {
  return (
    <div className="h-screen w-96 bg-white p-10 mr-11">
      <h1 className="font-bold underline text-2xl mr-10">Resume</h1>
      <div>{newName}</div>
    </div>
  );
}

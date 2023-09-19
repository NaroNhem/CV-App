import React from "react";

export default function Resume({ newName }) {
  return (
    <div className="h-screen w-[50rem] bg-white m-auto drop-shadow-lg flex flex-col items-center">
      <h1 className="font-bold underline text-2xl">{newName}</h1>
    </div>
  );
}

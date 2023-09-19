import React, { useState } from "react";

export default function Personal({ getName }) {
  const [name, setName] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    getName(name);
  };

  return (
    <div className=" h-1/2 ">
      <div className="w-full mx-2 my-2 p-2 border  flex flex-col pl-16 pr-16 rounded-xl bg-white py-4 pb-10 drop-shadow-lg">
        <h1 className="text-xl font-bold underline pb-2">Personal</h1>
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => onSubmitHandler(e)}
        >
          <label>Name:</label>
          <input
            type="text"
            name="name"
            className="border bg-[#e7e6e6] rounded ml-1 h-8 drop-shadow p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email:</label>
          <input
            type="text"
            name="email"
            className="border bg-[#e7e6e6] rounded ml-1 h-8 p-2"
          />

          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            className="border bg-[#e7e6e6] rounded ml-1 h-8 p-2"
          />
          <label>Address:</label>
          <input
            type="text"
            name="address"
            className="border bg-[#e7e6e6] rounded ml-1 h-8 p-2"
          />
          <button
            className="mt-2 border border-gray-300 rounded-md w-1/2 m-auto"
            onClick={(e) => onSubmitHandler(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

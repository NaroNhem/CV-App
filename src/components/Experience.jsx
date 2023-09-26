import React, { useState } from "react";

export default function Experience({ handleOnSubmitExperience }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStart] = useState("");
  const [responsibiities, setResponsibilities] = useState("");
  const [endDate, setEnd] = useState("");
  const [id, setId] = useState(0);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setId(id + 1);
    handleOnSubmitExperience({
      company,
      position,
      startDate,
      responsibiities,
      endDate,
      id,
    });
  };

  return (
    <div>
      <div className="w-full mx-2 my-2 p-2 border  flex flex-col pl-16 pr-16 rounded-xl bg-white py-4 pb-10 drop-shadow-lg">
        <h1 className="text-xl font-bold underline pb-2">Experience</h1>
        <form className="flex flex-col gap-3">
          <label>Company:</label>
          <input
            type="text"
            name="company"
            className="border bg-[#e7e6e6] rounded ml-1 h-8 drop-shadow p-2"
            onChange={(e) => setCompany(e.target.value)}
          />

          <label>Position:</label>
          <input
            type="text"
            name="position"
            className="border bg-[#e7e6e6] rounded ml-1 h-8 drop-shadow p-2"
            onChange={(e) => setPosition(e.target.value)}
          />

          <label>Responsibilities:</label>
          <textarea
            type="text"
            name="responsibiities"
            className="border bg-[#e7e6e6] rounded ml-1 h-16 drop-shadow p-2"
            onChange={(e) => setResponsibilities(e.target.value)}
          ></textarea>

          <label className="flex flex-col gap-3">
            Dates worked:
            <div className="flex justify-between">
              <div>
                <p className="text-sm">Start</p>
                <input
                  type="date"
                  name="workStart"
                  className="border bg-[#e7e6e6] rounded ml-1 h-8 drop-shadow w-full p-2"
                  onChange={(e) => setStart(e.target.value)}
                />
              </div>
              <div>
                <p className="text-sm">End</p>
                <input
                  type="date"
                  name="workEnd"
                  className="border bg-[#e7e6e6] rounded ml-1 h-8 drop-shadow w-full p-2"
                  onChange={(e) => setEnd(e.target.value)}
                />
              </div>
            </div>
          </label>
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

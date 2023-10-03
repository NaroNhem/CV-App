import React, { useState } from "react";

export default function Education({ handleOnSubmitEducation }) {
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [startDate, setStart] = useState("");
  const [endDate, setEnd] = useState("");
  const [id, setId] = useState(0);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setId(id + 1);
    handleOnSubmitEducation({
      school,
      title,
      startDate,
      endDate,
      id,
    });
  };
  return (
    <div className=" h-1/3 ">
      <div className="w-full mx-2 my-2 p-2 border  flex flex-col pl-16 pr-16 rounded-xl bg-white py-4 pb-10 drop-shadow-lg">
        <h1 className="text-xl font-bold underline pb-2">Education</h1>
        <form className="flex flex-col gap-3">
          <label>School Name:</label>
          <input
            type="text"
            name="school"
            className="border bg-[#e7e6e6] rounded ml-1 h-8 drop-shadow p-2"
            onChange={(e) => setSchool(e.target.value)}
          />

          <label>Title of Study:</label>
          <input
            type="text"
            name="title"
            className="border bg-[#e7e6e6] rounded ml-1 h-8 drop-shadow p-2"
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="flex flex-col gap-3">
            Dates Attended:
            <div className="flex justify-between">
              <div>
                <p className="text-sm">Start</p>
                <input
                  type="date"
                  name="schoolStart"
                  className="border bg-[#e7e6e6] rounded ml-1 h-8 drop-shadow w-full p-2 m"
                  onChange={(e) => setStart(e.target.value)}
                />
              </div>
              <div>
                <p className="text-sm">End</p>
                <input
                  type="date"
                  name="schoolEnd"
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

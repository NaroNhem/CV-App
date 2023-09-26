import React from "react";

export default function Resume({
  newName,
  newEmail,
  newPhone,
  newAdd,
  newSchool,
  newTitle,
  newSchoolStart,
  newSchoolEnd,
  newExperience,
}) {
  return (
    <div className="lg:w-[45rem] md:w-full h-screen  bg-white m-auto drop-shadow-lg flex flex-col">
      <div>
        <h1 className="font-bold text-2xl pt-5 text-center">{newName}</h1>
        {newName == "" ? null : (
          <ul className="flex gap-4 py-3 justify-center">
            <li>{newEmail}&nbsp;&nbsp;&nbsp;|</li>
            <li>{newPhone}&nbsp;&nbsp;&nbsp;|</li>
            <li>{newAdd}</li>
          </ul>
        )}
      </div>
      {newSchool == "" || newTitle == "" ? null : (
        <div>
          <h1 className="font-bold text-2xl mt-10 pl-10">Education:</h1>
          <div className="mt-10 px-20 flex justify-between">
            <div>
              <p className="text-xl">{newSchool}</p>
              <p className="italic">{newTitle}</p>
            </div>
            <p>
              {newSchoolStart} - {newSchoolEnd}
            </p>
          </div>
        </div>
      )}
      {newExperience.company == "" || newExperience.position == ""
        ? null
        : newExperience.map((item) => (
            <div key={item.id}>
              <h1 className="font-bold text-2xl mt-10 pl-10">Experience:</h1>
              <div className="mt-10 px-20 flex justify-between">
                <div>
                  <p className="text-xl">{item.company}</p>
                  <p className="italic">{item.experience}</p>
                  <p>{item.responsibilities}</p>
                </div>

                <p>
                  {item.startDate} - {item.endDate}
                </p>
              </div>
            </div>
          ))}
    </div>
  );
}

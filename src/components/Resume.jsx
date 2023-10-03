import React from "react";

export default function Resume({ newPersonal, newExperience, newEducation }) {
  return (
    <div className="lg:w-[45rem] md:w-full h-screen  bg-white m-auto drop-shadow-lg flex flex-col">
      <div>
        {newPersonal.name == ""
          ? null
          : newPersonal.map((item) => (
              <div key={item.id}>
                <h1 className="font-bold text-2xl pt-5 text-center">
                  {item.name}
                </h1>
                <ul className="flex gap-4 py-3 justify-center">
                  <li>{item.email}&nbsp;&nbsp;&nbsp;|</li>
                  <li>{item.phone}&nbsp;&nbsp;&nbsp;|</li>
                  <li>{item.address}</li>
                </ul>
              </div>
            ))}
      </div>
      {newEducation.school == "" || newEducation.title == ""
        ? null
        : newEducation.map((item) => (
            <div key={item.id}>
              <h1 className="font-bold text-2xl mt-10 pl-10">Education:</h1>
              <div className="mt-10 px-20 flex justify-between">
                <div>
                  <p className="text-xl">{item.school}</p>
                  <p className="italic">{item.title}</p>
                </div>
                <p>
                  {item.startDate} - {item.endDate}
                </p>
              </div>
            </div>
          ))}
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

import React from "react";
import "./index.css";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import { useState } from "react";

export default function App() {
  //States of user input from personal component
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newAdd, setNewAdd] = useState("");

  //Function to set states for personal data
  const getInfo = (name, email, phone, address) => {
    setNewName(name);
    setNewEmail(email);
    setNewPhone(phone);
    setNewAdd(address);

    //Test data is being recorded correctly
    console.log(newName, newEmail, newPhone, newAdd);
  };

  //States of user input from Education component
  const [newSchool, setNewSchool] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newSchoolStart, setNewSchoolStart] = useState("");
  const [newSchoolEnd, setNewSchoolEnd] = useState("");

  //Function to set states for Education data
  const getSchoolInfo = (school, title, start, end) => {
    setNewSchool(school);
    setNewTitle(title);
    setNewSchoolStart(start);
    setNewSchoolEnd(end);
  };

  //States of user input from Experience component
  const [newCompany, setNewCompany] = useState("");
  const [newPosition, setNewPosition] = useState("");
  const [newResponsibilities, setNewResponsibilities] = useState("");
  const [newWorkStart, setNewWorkStart] = useState("");
  const [newWorkEnd, setNewWorkEnd] = useState("");

  //Function to set States for Experience data
  const getExperienceInfo = (
    company,
    position,
    responsibilities,
    start,
    end
  ) => {
    setNewCompany(company);
    setNewPosition(position);
    setNewResponsibilities(responsibilities);
    setNewWorkStart(start);
    setNewWorkEnd(end);
  };

  return (
    <div className="xl:flex justify-around p-10 shrink-0">
      <div className="flex flex-col">
        <Personal getInfo={getInfo} />
        <Education getSchoolInfo={getSchoolInfo} />
        <Experience getExperienceInfo={getExperienceInfo} />
      </div>
      <div className="">
        <Resume
          //Personal
          newName={newName}
          newEmail={newEmail}
          newPhone={newPhone}
          newAdd={newAdd}
          // Education
          newSchool={newSchool}
          newTitle={newTitle}
          newSchoolStart={newSchoolStart}
          newSchoolEnd={newSchoolEnd}
          //Experience
          newCompany={newCompany}
          newPosition={newPosition}
          newResponsibilities={newResponsibilities}
          newWorkStart={newWorkStart}
          newWorkEnd={newWorkEnd}
        />
      </div>
    </div>
  );
}

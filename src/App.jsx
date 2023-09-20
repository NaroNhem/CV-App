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

  return (
    <div className="flex justify-around p-10">
      <div className="flex flex-col">
        <Personal getInfo={getInfo} />
        <Education getSchoolInfo={getSchoolInfo} />
        <Experience />
      </div>
      <div>
        <Resume
          newName={newName}
          newEmail={newEmail}
          newPhone={newPhone}
          newAdd={newAdd}
          //
          newSchool={newSchool}
          newTitle={newTitle}
          newSchoolStart={newSchoolStart}
          newSchoolEnd={newSchoolEnd}
        />
      </div>
    </div>
  );
}

import React from "react";
import "./index.css";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import { useState } from "react";

export default function App() {
  //States of user input from Experience component
  const [newExperience, setNewExperience] = useState([]);
  const [newPersonal, setNewPersonalInfo] = useState([]);
  const [newEducation, setNewEducation] = useState([]);

  const handleOnSubmitPersonal = (newPersonalInfo) => {
    const personalInfo = [...newPersonal, newPersonalInfo];
    setNewPersonalInfo(personalInfo);
  };
  //Handler that retrieves experience info from the Experience component.
  const handleOnSubmitExperience = (newExperienceInfo) => {
    const experienceInfo = [...newExperience, newExperienceInfo];
    setNewExperience(experienceInfo);
    console.log(experienceInfo);
  };

  const handleOnSubmitEducation = (newEducationInfo) => {
    const educationInfo = [...newEducation, newEducationInfo];
    setNewEducation(educationInfo);
  };
  return (
    <div className="xl:flex justify-around p-10 shrink-0">
      <div className="flex flex-col">
        <Personal handleOnSubmitPersonal={handleOnSubmitPersonal} />
        <Education handleOnSubmitEducation={handleOnSubmitEducation} />
        <Experience handleOnSubmitExperience={handleOnSubmitExperience} />
      </div>
      <div className="">
        <Resume
          //Personal
          newPersonal={newPersonal}
          // Education
          newEducation={newEducation}
          //Experience => Array of objects holding experiences
          newExperience={newExperience}
        />
      </div>
    </div>
  );
}

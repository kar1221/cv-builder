import { useState } from "react";
import {
  contactsDefault,
  educationDefault,
  personalInfoDefault,
  skillsDefault,
  summaryDefault,
  experienceDefault,
} from "./components/utils";
import {
  ContactsType,
  EducationType,
  PersonalInfoType,
  SkillsType,
  ExperienceType,
} from "./components/types";
import ResumeHeader from "./components/ResumeHeader";
import Contact from "./components/Contact";
import { Form, Content, Grid } from "./components/Form";
import Educations from "./components/Educations";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import Experience from "./components/Experience";

function App() {
  const [personalInfo, setPersonalInfo] =
    useState<PersonalInfoType>(personalInfoDefault);
  const [contacts, setContacts] = useState<ContactsType>(contactsDefault);
  const [education, setEducation] = useState<EducationType[]>(educationDefault);
  const [skills, setSkills] = useState<SkillsType[]>(skillsDefault);
  const [summary, setSummary] = useState(summaryDefault);

  const [experience, setExperience] =
    useState<ExperienceType[]>(experienceDefault);

  return (
    <div className="flex min-h-screen justify-center bg-zinc-800">
      <Form>
        <ResumeHeader value={personalInfo} onChange={setPersonalInfo} />
        <Content>
          <Grid
            colStart={1}
            className="flex max-w-72 flex-col gap-16 bg-rose-100 p-8"
          >
            <Contact
              phoneNumber={contacts.phoneNumber}
              email={contacts.email}
              address={contacts.address}
              onChange={setContacts}
            />
            <Educations educationList={education} onChange={setEducation} />
            <Skills skills={skills} onChange={setSkills} />
          </Grid>
          <Grid colStart={2} className="flex flex-col gap-16 p-8">
            <Summary value={summary} onChange={setSummary} />
            <Experience experienceList={experience} onChange={setExperience} />
          </Grid>
        </Content>
      </Form>
    </div>
  );
}

export default App;

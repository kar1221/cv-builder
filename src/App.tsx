import { useState } from "react";
import ResumeContent from "./components/ResumeContent";
import ResumeHeader from "./components/ResumeHeader";
import {
  contactsDefault,
  educationDefault,
  personalInfoDefault,
} from "./components/utils";
import { Contacts, Education, PersonalInfo } from "./components/types";

function App() {
  const [personalInfo, setPersonalInfo] =
    useState<PersonalInfo>(personalInfoDefault);
  const [contacts, setContacts] = useState<Contacts>(contactsDefault);
  const [education, setEducation] = useState<Education[]>(educationDefault);

  return (
    <div className="flex min-h-screen justify-center bg-zinc-800">
      <form className="grid h-max w-full max-w-4xl grid-rows-form overflow-hidden bg-zinc-50 px-8 py-4">
        <ResumeHeader value={personalInfo} onChange={setPersonalInfo} />
        <ResumeContent
          contacts={contacts}
          onContactsChange={setContacts}
          education={education}
          onEducationChange={setEducation}
        />
      </form>
    </div>
  );
}

export default App;

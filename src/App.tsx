import { useState } from "react";
import Header from "./Components/Header";
import PersonalDetails from "./Components/PersonalDetails";
import { PersonalDetailsType, PersonalDetailsKey } from "./types";
import { createDefaultValues } from "./utils";

const App = () => {
  const defaultValue = createDefaultValues<PersonalDetailsType>();

  const [personalDetails, setPersonalDetails] = useState(defaultValue);

  const handlePersonChange = (key: PersonalDetailsKey, value: string) => {
    setPersonalDetails({ ...personalDetails, [key]: value });
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-200">
      <Header />
      <div className="-mt-16 w-full max-w-form">
        <PersonalDetails
          personalDetails={personalDetails}
          onFieldChange={handlePersonChange}
        />
      </div>
    </div>
  );
};

export default App;

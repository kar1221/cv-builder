import { useState } from "react";
import Header from "./Components/Header";
import PersonalDetails from "./Components/PersonalDetails";
import { PersonalDetailsType, DefaultValues } from "./types";

const App = () => {
  const [personalDetails, setPersonalDetails] = useState(
    {} as DefaultValues<PersonalDetailsType>
  );

  const handlePersonChange = (
    key: keyof PersonalDetailsType,
    value: string
  ) => {
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

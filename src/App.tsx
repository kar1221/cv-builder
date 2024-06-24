import { useState } from "react";
import Header from "./Components/Header";
import PersonalDetails from "./Components/PersonalDetails";
import { PersonalDetailsType, DefaultValues } from "./types";

const App = () => {
  const [personalDetails, setPersonalDetails] = useState(
    {} as DefaultValues<PersonalDetailsType>,
  );

  const handlePersonChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // INFO: I hate this too
    // TODO: Refactor the shit out of it
    const { name, value } = event.target;

    setPersonalDetails({ ...personalDetails, [name]: value });
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

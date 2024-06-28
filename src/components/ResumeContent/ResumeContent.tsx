import Contact from "../Contact";
import Educations from "../Educations";

import { Contacts, Education } from "../types";

function ResumeContent(props: ResumeContentProps) {
  const { contacts, onContactsChange } = props;
  const { education, onEducationChange } = props;
  const { phoneNumber, email, address } = contacts;

  function handleContactChange(key: keyof Contacts) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      onContactsChange({
        ...contacts,
        [key]: event.target.value,
      });
    };
  }

  return (
    <div className="grid w-full grid-cols-resumeContent">
      <div className="col-start-1 bg-rose-100 p-8">
        <Contact
          phoneNumber={phoneNumber}
          email={email}
          address={address}
          onPhoneChange={handleContactChange("phoneNumber")}
          onEmailChange={handleContactChange("email")}
          onAddressChange={handleContactChange("address")}
        />
        <Educations
          educationList={education}
          onEducationChange={onEducationChange}
        />
      </div>
    </div>
  );
}

interface ResumeContentProps {
  contacts: Contacts;
  onContactsChange: (value: Contacts) => void;
  education: Education[];
  onEducationChange: (value: Education[]) => void;
}

export default ResumeContent;

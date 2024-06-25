import { PersonalDetailsKey, PersonalDetailsType } from "src/types";
import { Form, FormRow } from "src/Components/FormWrapper";
import { Input, TextArea } from "src/Components/InputField";
import CheckBox from "../InputField/Checkbox";

const PersonalDetails = (props: PersonalDetailsProps) => {
  const { personalDetails, onFieldChange } = props;
  const {
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    city,
    state,
    summary,
  } = personalDetails;

  return (
    <Form title="Personal Details">
      <FormRow>
        <Input
          type="text"
          placeHolder="John"
          label="First Name"
          value={firstName}
          onChange={(value) => onFieldChange("firstName", value)}
        />
        <Input
          type="text"
          placeHolder="Smith"
          label="Last Name"
          value={lastName}
          onChange={(value) => onFieldChange("lastName", value)}
        />
      </FormRow>
      <FormRow>
        <Input
          type="email"
          placeHolder="JohnSmith@outlook.com"
          label="Email Address"
          value={emailAddress}
          onChange={(value) => onFieldChange("emailAddress", value)}
        />
      </FormRow>
      <FormRow>
        <Input
          type="tel"
          placeHolder="+(123) 456 7890"
          label="Phone Number"
          value={phoneNumber}
          onChange={(value) => onFieldChange("phoneNumber", value)}
        />
      </FormRow>
      <FormRow>
        <Input
          type="text"
          placeHolder="Phoenix"
          label="City"
          value={city}
          onChange={(value) => onFieldChange("city", value)}
        />
        <Input
          type="text"
          placeHolder="AZ"
          label="State"
          value={state}
          onChange={(value) => onFieldChange("state", value)}
        />
      </FormRow>
      <FormRow>
        <TextArea
          value={summary}
          onChange={(value) => onFieldChange("summary", value)}
          label="Summary"
          placeHolder="A brief summary of your wellbeing"
        ></TextArea>
      </FormRow>
      <FormRow>
        <CheckBox label="Profile Picture" desc="Profile Picture test" />
      </FormRow>
    </Form>
  );
};

interface PersonalDetailsProps {
  personalDetails: PersonalDetailsType;
  onFieldChange: (key: PersonalDetailsKey, value: string) => void;
}

export default PersonalDetails;

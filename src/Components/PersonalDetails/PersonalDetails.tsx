import { PersonalDetailsType } from "src/types";
import { Form, FormRow } from "src/Components/FormWrapper";
import { InputField, InputArea } from "src/Components/InputField";

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
        <InputField
          type="text"
          placeHolder="John"
          label="First Name"
          value={firstName}
          onChange={value => onFieldChange("firstName", value)}
        />
        <InputField
          type="text"
          placeHolder="Smith"
          label="Last Name"
          value={lastName}
          onChange={value => onFieldChange("lastName", value)}
        />
      </FormRow>
      <FormRow>
        <InputField
          type="email"
          placeHolder="JohnSmith@outlook.com"
          label="Email Address"
          value={emailAddress}
          onChange={value => onFieldChange("emailAddress", value)}
        />
      </FormRow>
      <FormRow>
        <InputField
          type="tel"
          placeHolder="+(123) 456 7890"
          label="Phone Number"
          value={phoneNumber}
          onChange={value => onFieldChange("phoneNumber", value)}
        />
      </FormRow>
      <FormRow>
        <InputField
          type="text"
          placeHolder="Phoenix"
          label="City"
          value={city}
          onChange={value => onFieldChange("city", value)}
        />
        <InputField
          type="text"
          placeHolder="AZ"
          label="State"
          value={state}
          onChange={value => onFieldChange("state", value)}
        />
      </FormRow>
      <FormRow>
        <InputArea
          value={summary}
          label="Summary"
          onChange={value => onFieldChange("summary", value)}
          placeHolder="A brief summary of your well-being"
        ></InputArea>
      </FormRow>
    </Form>
  );
};

interface PersonalDetailsProps {
  personalDetails: PersonalDetailsType;
  onFieldChange: (key: keyof PersonalDetailsType, value: string) => void;
}

export default PersonalDetails;

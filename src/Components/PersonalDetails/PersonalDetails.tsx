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
          labelText="First Name"
          value={firstName}
          onChange={onFieldChange}
          name="firstName"
        />
        <InputField
          type="text"
          placeHolder="Smith"
          labelText="Last Name"
          value={lastName}
          onChange={onFieldChange}
          name="lastName"
        />
      </FormRow>
      <FormRow>
        <InputField
          type="email"
          placeHolder="JohnSmith@outlook.com"
          labelText="Email Address"
          value={emailAddress}
          onChange={onFieldChange}
          name="emailAddress"
        />
      </FormRow>
      <FormRow>
        <InputField
          type="tel"
          placeHolder="+(123) 456 7890"
          labelText="Phone Number"
          value={phoneNumber}
          onChange={onFieldChange}
          name="phoneNumber"
        />
      </FormRow>
      <FormRow>
        <InputField
          type="text"
          placeHolder="Phoenix"
          labelText="City"
          value={city}
          onChange={onFieldChange}
          name="city"
        />
        <InputField
          type="text"
          placeHolder="AZ"
          labelText="State"
          value={state}
          onChange={onFieldChange}
          name="state"
        />
      </FormRow>
      <FormRow>
        <InputArea
          value={summary}
          label="Sumamry"
          onChange={onFieldChange}
          placeHolder="I am just better"
          name="summary"
        ></InputArea>
      </FormRow>
    </Form>
  );
};

interface PersonalDetailsProps {
  personalDetails: PersonalDetailsType;
  onFieldChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export default PersonalDetails;

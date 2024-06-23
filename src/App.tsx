import Header from "./Components/Header";
import InputField from "./Components/InputField";
import { Form, FormRow } from "./Components/FormWrapper";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-200">
      <Header />
      <Form title="Personal Details">
        <FormRow>
          <InputField type="text" placeHolder="John" labelText="First Name" />
          <InputField type="text" placeHolder="Smith" labelText="Last Name" />
        </FormRow>
        <FormRow>
          <InputField
            type="email"
            placeHolder="JohnSmith@outlook.com"
            labelText="Email Address"
          />
        </FormRow>
      </Form>
    </div>
  );
};

export default App;

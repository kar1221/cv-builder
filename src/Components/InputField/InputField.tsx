import { HTMLInputTypeAttribute } from "react";
import { PersonalDetailsType } from "src/types";

const InputField = (props: InputFieldProps) => {
  const { labelText, type, placeHolder, value, onChange, name } = props;

  return (
    <label className="flex flex-1 flex-col gap-1 text-zinc-500">
      {labelText}

      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-sm border-2 border-zinc-300 px-4 py-2 text-zinc-600 outline-none transition-all duration-150 ease-in-out focus:border-teal-600"
        placeholder={placeHolder}
        name={name}
      />
    </label>
  );
};

interface InputFieldProps {
  labelText: string;
  type: HTMLInputTypeAttribute;
  placeHolder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: keyof PersonalDetailsType;
}

export default InputField;

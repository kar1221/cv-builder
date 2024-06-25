import { useRef } from "react";
import { InputType } from "src/types";

const Input = (props: InputProps) => {
  const { label, type, placeHolder, value, onChange } = props;
  const ref = useRef<HTMLInputElement | null>(null);

  const handleChange = () => {
    onChange(ref.current!.value);
  };

  return (
    <label className="flex flex-1 flex-col gap-1 text-zinc-500">
      <h4 className="text-lg text-zinc-500">{label}</h4>
      <input
        ref={ref}
        className="w-full rounded-sm border-2 border-zinc-300 px-4 py-2 text-zinc-600 outline-none transition-all duration-150 ease-in-out focus:border-teal-600"
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
        type={type}
      />
    </label>
  );
};

interface InputProps {
  label: string;
  type?: InputType;
  placeHolder?: string;
  value: string;
  onChange: (value: string) => void;
}

export default Input;

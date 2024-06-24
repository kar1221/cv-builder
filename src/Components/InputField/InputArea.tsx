import { PersonalDetailsType } from "src/types";

const InputArea = (props: InputAreaProps) => {
  // TODO: Refactor this shit
  const { label, value, onChange, placeHolder, name } = props;

  return (
    <label className="flex flex-1 flex-col gap-1 text-zinc-500">
      {label}
      <textarea
        className="w-full rounded-sm border-2 border-zinc-300 px-4 py-2 text-zinc-600 outline-none transition-all duration-150 ease-in-out focus:border-teal-600 resize-none h-32"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        name={name}
        cols={30}
      />
    </label>
  );
};

interface InputAreaProps {
  label?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: keyof PersonalDetailsType;
  placeHolder?: string;
}

export default InputArea;

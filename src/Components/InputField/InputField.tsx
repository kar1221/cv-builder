const InputField = (props: InputFieldProps) => {
  const { labelText, type, placeHolder } = props;

  return (
    <label className="flex flex-col flex-1 text-zinc-500 gap-1">
      {labelText}

      <input
        type={type}
        className="text-zinc-600 border-2 border-zinc-300 px-4 py-2 rounded-sm focus:border-zinc-600 transition-all duration-150 ease-in-out outline-none focus:scale-105"
        placeholder={placeHolder}
      />
    </label>
  );
};

interface InputFieldProps {
  labelText: string;
  type: string;
  placeHolder?: string;
}

export default InputField;

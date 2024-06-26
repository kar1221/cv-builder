import { useRef } from "react";

function TextArea(props: TextAreaProps) {
  const { label, placeHolder, value, onChange } = props;

  const ref = useRef<HTMLTextAreaElement | null>(null);

  const handleChange = () => {
    onChange(ref.current!.value);
  };

  return (
    <label className="flex flex-1 flex-col gap-1 text-zinc-500" htmlFor={label}>
      <h4 className="text-lg text-zinc-500">{label}</h4>
      <textarea
        ref={ref}
        className="h-32 w-full resize-none rounded-sm border-2 border-zinc-300 px-4 py-2 text-zinc-600 outline-none transition-all duration-150 ease-in-out focus:border-teal-600"
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
        id={label}
      />
    </label>
  );
}

interface TextAreaProps {
  label?: string;
  placeHolder?: string;
  value: string;
  onChange: (value: string) => void;
}

export default TextArea;

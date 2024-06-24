import { useRef } from "react";

const InputArea = (props: InputAreaProps) => {
  // TODO: Refactor this shit
  const { label, value, onChange, placeHolder } = props;
	const ref = useRef<HTMLTextAreaElement | null>(null);

  return (
    <label className="flex flex-1 flex-col gap-1">
      <h4 className="text-lg font-medium text-zinc-500">{label}</h4>
			
      <textarea
				ref={ref}
        className="h-32 w-full resize-none rounded-sm border-2 border-zinc-300 px-4 py-2 text-zinc-600 outline-none transition-all duration-150 ease-in-out focus:border-teal-600"
        placeholder={placeHolder}
        value={value}
        onChange={() => onChange(ref.current!.value)}
        cols={30}
      />
    </label>
  );
};

interface InputAreaProps {
  label?: string;
  value?: string;
  onChange: (value: string) => void;
  placeHolder?: string;
}

export default InputArea;

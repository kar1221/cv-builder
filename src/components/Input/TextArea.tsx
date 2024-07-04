import { twMerge } from "tailwind-merge";

function TextArea(props: TextAreaProps) {
  const { className, onChange, value, placeholder, cols, rows } = props;

  const inputStyle = twMerge(
    "w-full border-b border-zinc-500 bg-transparent font-Poppins text-sm font-normal text-zinc-600 placeholder:text-zinc-500",
    className
  );

  return (
    <textarea
      className={inputStyle}
      rows={rows}
      cols={cols}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

interface TextAreaProps {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  placeholder?: string;
  cols?: number;
  rows?: number;
}

export default TextArea;

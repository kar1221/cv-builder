import { twMerge } from "tailwind-merge";

function Input(props: InputProps) {
  const { className, onChange, value, placeholder } = props;

  const inputStyle = twMerge(
    "w-full border-b border-zinc-500 bg-transparent font-Poppins text-sm font-normal text-zinc-600 placeholder:text-zinc-500",
    className
  );

  return (
    <input
      type="text"
      className={inputStyle}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

interface InputProps {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
}

export default Input;

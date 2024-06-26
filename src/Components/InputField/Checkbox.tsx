import { useRef } from "react";

function CheckBox(props: CheckBoxProps) {
  const { label, value, onCheck } = props;
  const ref = useRef<HTMLInputElement | null>(null);

  const handleChecked = () => {
    onCheck(ref.current!.checked);
  };

  return (
    <label
      className="flex w-full gap-2 text-lg text-zinc-500 items-center"
      htmlFor={label}
    >
      <h4 className="">{label}</h4>
      <input
        ref={ref}
        type="checkbox"
        className="relative aspect-square h-5 appearance-none rounded-sm border-2 border-zinc-300 outline-none before:absolute before:scale-0 before:h-3/4 before:w-3/4 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-teal-600 before:transition-transform before:duration-150 before:ease-in-out before:content-[''] checked:before:scale-100 checked:border-teal-600 focus:border-teal-600"
        onChange={handleChecked}
        checked={value}
        id={label}
      />
    </label>
  );
}

interface CheckBoxProps {
  label?: string;
  value: boolean;
  onCheck: (isChecked: boolean) => void;
}

export default CheckBox;

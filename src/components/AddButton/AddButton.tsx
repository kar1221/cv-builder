import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

function AddButton(props: AddButtonProps) {
  const { onClick, className } = props;

  const buttonStyle = twMerge(
    "flex items-center border-b text-sm text-zinc-600 opacity-0 transition-opacity duration-150 ease-in-out hover:opacity-100",
    className
  );

  return (
    <button type="button" className={buttonStyle} onClick={onClick}>
      <Icon icon="mdi:plus" className="text-zinc-700" />
      Add
    </button>
  );
}

interface AddButtonProps {
  onClick?: () => void;
  className?: string;
}

export default AddButton;

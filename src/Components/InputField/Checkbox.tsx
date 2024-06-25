import { useRef } from "react";

const CheckBox = (props: CheckBoxProps) => {
  const { label, desc } = props;
  const ref = useRef<HTMLInputElement | null>(null);
  return (
    <label>
      <h4 className="">{label}</h4>
      <input ref={ref} type="checkbox" />
      <p className="">{desc}</p>
    </label>
  );
};

interface CheckBoxProps {
  label?: string;
  desc?: string;
}

export default CheckBox;

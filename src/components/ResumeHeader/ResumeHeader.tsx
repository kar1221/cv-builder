import { Hidden, Editable, Visible } from "src/components/Editable";
import { PersonalInfo } from "../types";

function ResumeHeader(props: ResumeHeaderProps) {
  const { value, onChange } = props;
  const { fullname, position } = value;

  const stylisticName = fullname
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  function handleOnChange(key: keyof PersonalInfo) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange({
        ...value,
        [key]: event.target.value,
      });
    };
  }

  return (
    <Editable
      className="relative flex flex-col items-center justify-center gap-4"
      tabindex={0}
    >
      <Hidden>
        <input
          className="w-max border-b-2 border-zinc-500 bg-transparent text-center font-Poppins text-4xl font-bold text-zinc-700 placeholder:text-zinc-400"
          type="text"
          value={fullname}
          id="fullname"
          name="fullname"
          placeholder="Your name here"
          onChange={handleOnChange("fullname")}
          autoComplete="on"
        />
        <input
          type="text"
          value={position}
          id="position"
          name="position"
          placeholder="Your position here"
          onChange={handleOnChange("position")}
          className="w-max border-b-2 border-zinc-500 bg-transparent text-center font-Poppins text-2xl text-zinc-700 placeholder:text-zinc-400"
          autoComplete="on"
        />
      </Hidden>
      <Visible>
        <h1 className="font-Poppins text-4xl font-bold tracking-header text-zinc-700">
          {fullname.toUpperCase()}
        </h1>
        <p className="font-Poppins text-xl font-medium tracking-header text-zinc-700">
          {position.toUpperCase()}
        </p>
      </Visible>
      <div className="absolute -z-10 flex h-full w-auto items-center justify-center font-Cursive text-9xl text-rose-900 text-opacity-10">
        {stylisticName}
      </div>
    </Editable>
  );
}

interface ResumeHeaderProps {
  onChange: (value: PersonalInfo) => void;
  value: PersonalInfo;
}

export default ResumeHeader;

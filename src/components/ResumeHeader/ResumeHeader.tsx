import { Hidden, Editable, Visible } from "src/components/Editable";
import { DetailsAction, DetailsActionKind, DetailsState } from "../types";

function ResumeHeader(props: ResumeHeaderProps) {
  const { state, onChange } = props;
  const { fullname, position } = state;

  const stylisticName = fullname
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  function handleOnChange(type: DetailsActionKind) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange({ type, payload: event.target.value });
    };
  }

  return (
    <Editable
      className="relative flex flex-col items-center justify-center gap-4"
      tabindex={0}
    >
      <Hidden>
        <input
          className="w-3/4 border-b-2 border-zinc-500 bg-transparent text-center font-Poppins text-4xl font-bold text-zinc-700 placeholder:text-zinc-400"
          type="text"
          value={fullname}
          id="fullname"
          name="fullname"
          placeholder="Your name here"
          onChange={handleOnChange(DetailsActionKind.UPDATE_FULLNAME)}
          autoComplete="on"
        />
        <input
          type="text"
          value={position}
          id="position"
          name="position"
          placeholder="Your position here"
          onChange={handleOnChange(DetailsActionKind.UPDATE_POSITION)}
          className="w-3/4 border-b-2 border-zinc-500 bg-transparent text-center font-Poppins text-2xl text-zinc-700 placeholder:text-zinc-400"
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
  onChange: React.Dispatch<DetailsAction>;
  state: DetailsState;
}

export default ResumeHeader;

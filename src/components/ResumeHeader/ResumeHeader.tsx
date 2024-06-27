import { Hidden, Editable, Visible, Always } from "src/components";

function ResumeHeader(props: ResumeHeaderProps) {
  const { fullname, position, onNameChange, onPositionChange } = props;

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onNameChange(event.target.value);
  };

  const handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPositionChange(event.target.value);
  };

  const stylisticName = fullname
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  return (
    <Editable className="relative flex flex-col items-center justify-center gap-4">
      <Hidden>
        <input
          className="w-3/4 border-b-2 border-zinc-500 bg-transparent text-center font-Poppins text-4xl font-bold text-zinc-700 placeholder:text-zinc-400"
          type="text"
          value={fullname}
          placeholder="Your name here"
          onChange={handleNameChange}
        />
        <input
          type="text"
          value={position}
          placeholder="Your position here"
          onChange={handlePositionChange}
          className="w-3/4 border-b-2 border-zinc-500 bg-transparent text-center font-Poppins text-2xl text-zinc-700 placeholder:text-zinc-400"
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
      <Always>
        <div className="absolute -z-10 flex h-full w-auto items-center justify-center font-Cursive text-9xl text-rose-900 text-opacity-10">
          {stylisticName}
        </div>
      </Always>
    </Editable>
  );
}

interface ResumeHeaderProps {
  fullname: string;
  position: string;
  onNameChange: (fullname: string) => void;
  onPositionChange: (position: string) => void;
}

export default ResumeHeader;

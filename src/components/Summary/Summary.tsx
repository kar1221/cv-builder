import { Editable, Visible, Hidden } from "../Editable";
import { TextArea } from "../Input";

function Summary(props: SummaryProps) {
  const { value, onChange } = props;

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  return (
    <Editable className="flex flex-col gap-4" position="top-right">
      <div className="flex flex-col">
        <h2 className="font-Poppins text-xl font-bold uppercase tracking-header text-zinc-600">
          Summary
        </h2>
      </div>
      <div>
        <Visible>
          <p className="text-sm font-light text-zinc-600">{value}</p>
        </Visible>
        <Hidden>
          <TextArea
            value={value}
            onChange={(event) => handleChange(event)}
            rows={6}
            className="resize-none text-sm font-light text-zinc-600"
          />
        </Hidden>
      </div>
    </Editable>
  );
}

interface SummaryProps {
  value: string;
  onChange: (value: string) => void;
}

export default Summary;

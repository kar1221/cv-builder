import { v4 as uuidv4 } from "uuid";
import { Editable, Visible, Hidden } from "../Editable";
import { Input } from "../Input";
import { EducationType } from "../types";
import AddButton from "../AddButton";

function Educations(props: EducationProps) {
  const { educationList, onChange } = props;

  function handleChange(key: keyof EducationType, uuid: string) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const newEducation = educationList.map((education) => {
        if (education.uuid === uuid) {
          return {
            ...education,
            [key]: event.target.value,
          };
        }
        return education;
      });

      onChange(newEducation);
    };
  }

  function handleAdd() {
    onChange([
      ...educationList,
      {
        uuid: uuidv4(),
        courseName: "Your Course Name",
        institution: "Your School Name",
        date: "2020-2020",
      },
    ]);
  }

  function handleDelete(uuid: string) {
    return () => {
      onChange(educationList.filter((education) => education.uuid !== uuid));
    };
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h2 className="font-Poppins text-xl font-bold uppercase tracking-header text-zinc-600">
          Educations
        </h2>
        <AddButton onClick={() => handleAdd()} />
      </div>

      <div className="flex flex-col-reverse gap-6">
        {educationList.map((education) => (
          <Editable
            key={education.uuid}
            className="flex flex-col gap-1"
            position="bottom-right"
            size="small"
            onDelete={handleDelete(education.uuid)}
          >
            <Visible>
              <h3 className="mt-4 font-Poppins text-sm font-semibold uppercase tracking-wider text-zinc-600">
                {education.courseName}
              </h3>
              <p className="font-Poppins text-sm font-light text-zinc-500">
                {education.institution}
              </p>
              <p className="font-Poppins text-sm font-medium text-zinc-700">
                {education.date}
              </p>
            </Visible>
            <Hidden>
              <Input
                value={education.courseName}
                onChange={handleChange("courseName", education.uuid)}
                placeholder="Course Name"
                className="mt-4"
              />
              <Input
                value={education.institution}
                onChange={handleChange("institution", education.uuid)}
                placeholder="Institution"
              />
              <Input
                value={education.date}
                onChange={handleChange("date", education.uuid)}
                placeholder="Date"
                className="w-24"
              />
            </Hidden>
          </Editable>
        ))}
      </div>
    </div>
  );
}

interface EducationProps {
  educationList: EducationType[];
  onChange: (value: EducationType[]) => void;
}

export default Educations;

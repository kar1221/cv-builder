import { v4 as uuidv4 } from "uuid";
import { Icon } from "@iconify/react";
import { Editable, Visible, Hidden } from "../Editable";
import { SkillsType } from "../types";
import { Input } from "../Input";

function Skills(props: SkillsProps) {
  const { skills, onChange } = props;

  function handleChange(id: string) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const newSkills = skills.map((skill) => {
        if (skill.id === id) {
          return {
            ...skill,
            skill: event.target.value,
          };
        }
        return skill;
      });

      onChange(newSkills);
    };
  }

  function handleAdd() {
    onChange([
      ...skills,
      {
        id: uuidv4(),
        skill: "New Skill",
      },
    ]);
  }

  function handleDelete(id: string) {
    return () => {
      onChange(skills.filter((skill) => skill.id !== id));
    };
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="font-Poppins text-xl font-bold uppercase tracking-header text-zinc-600">
          Skills
        </h2>
        <button
          type="button"
          className="flex items-center border-b text-sm text-zinc-600 opacity-0 transition-opacity duration-150 ease-in-out hover:opacity-100"
          onClick={handleAdd}
        >
          <Icon icon="mdi:plus" className="text-zinc-700" />
          Add
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {skills.map((skill) => (
          <Editable
            key={skill.id}
            position="top-right"
            size="small"
            onDelete={handleDelete(skill.id)}
          >
            <Visible>
              <p className="font-Poppins text-sm text-zinc-600">
                {skill.skill}
              </p>
            </Visible>
            <Hidden>
              <Input onChange={handleChange(skill.id)} value={skill.skill} />
            </Hidden>
          </Editable>
        ))}
      </div>
    </div>
  );
}

interface SkillsProps {
  skills: SkillsType[];
  onChange: (value: SkillsType[]) => void;
}

export default Skills;

import { v4 as uuidv4 } from "uuid";
import { Icon } from "@iconify/react";
import { Editable, Visible, Hidden } from "../Editable";
import { ExperienceType } from "../types";
import { Input } from "../Input";
import AddButton from "../AddButton";

function Experience(props: ExperienceProps) {
  const { experienceList, onChange } = props;

  function handleDescChange(id: string, index: number) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const newExperienceList = experienceList.map((experience) => {
        if (experience.id !== id) return experience;

        return {
          ...experience,
          description: experience.description.map((desc, i) => {
            if (i !== index) return desc;
            return event.target.value;
          }),
        };
      });

      onChange(newExperienceList);
    };
  }

  function handleChange(id: string, key: keyof ExperienceType) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const newExperienceList = experienceList.map((experience) => {
        if (experience.id !== id) return experience;
        return { ...experience, [key]: event.target.value };
      });
      onChange(newExperienceList);
    };
  }

  function handleAddDesc(id: string) {
    const newExperienceList = experienceList.map((experience) => {
      if (experience.id !== id) return experience;
      return {
        ...experience,
        description: [...experience.description, "New Experience"],
      };
    });

    onChange(newExperienceList);
  }

  function handleDelete(id: string) {
    const newExperienceList = experienceList.filter(
      (experience) => experience.id !== id
    );
    onChange(newExperienceList);
  }

  function handleAdd() {
    onChange([
      ...experienceList,
      {
        id: uuidv4(),
        position: "New Position",
        company: "New Company",
        date: "2020-2020",
        description: ["New Description"],
      },
    ]);
  }

  function handleDeleteDesc(id: string, index: number) {
    const newExperienceList = experienceList.map((experience) => {
      if (experience.id !== id) return experience;
      return {
        ...experience,
        description: experience.description.filter((_, i) => i !== index),
      };
    });

    onChange(newExperienceList);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <h2 className="font-Poppins text-xl font-bold uppercase tracking-header text-zinc-600">
          Experiences
        </h2>
        <AddButton onClick={() => handleAdd()} />
      </div>
      <div className="flex flex-col gap-6">
        {experienceList.map((experience) => (
          <Editable
            position="top-right"
            className="flex flex-col gap-2"
            onDelete={() => handleDelete(experience.id)}
          >
            <Visible>
              <h2 className="font-bold uppercase tracking-widest text-zinc-600">
                {experience.position}
              </h2>
              <h3 className="text-sm font-light text-zinc-600">
                {experience.company}
              </h3>
              <p className="text-sm font-medium text-zinc-600">
                {experience.date}
              </p>
              <ul className="px-4">
                {experience.description.map((description) => (
                  <li
                    key={description}
                    className="list-disc text-sm text-zinc-600"
                  >
                    {description}
                  </li>
                ))}
              </ul>
            </Visible>
            <Hidden>
              <Input
                value={experience.position}
                onChange={handleChange(experience.id, "position")}
              />
              <Input
                value={experience.company}
                onChange={handleChange(experience.id, "company")}
              />
              <Input
                value={experience.date}
                onChange={handleChange(experience.id, "date")}
              />
              <div className="flex flex-col">
                <AddButton
                  className="self-end opacity-100"
                  onClick={() => handleAddDesc(experience.id)}
                />
                {experience.description.map((description, index) => (
                  <div className="flex">
                    <Input
                      value={description}
                      onChange={handleDescChange(experience.id, index)}
                    />
                    <button
                      type="button"
                      className="flex items-center text-sm transition-opacity duration-150 ease-in-out"
                      onClick={() => handleDeleteDesc(experience.id, index)}
                    >
                      <Icon
                        icon="mdi:delete-forever"
                        className="text-red-500"
                      />
                      <span className="text-zinc-600">Delete</span>
                    </button>
                  </div>
                ))}
              </div>
            </Hidden>
          </Editable>
        ))}
      </div>
    </div>
  );
}

interface ExperienceProps {
  experienceList: ExperienceType[];
  onChange: (experienceList: ExperienceType[]) => void;
}

export default Experience;

import type {
  PersonalInfoType,
  ContactsType,
  EducationType,
  SkillsType,
  ExperienceType,
} from "./types";

const personalInfoDefault: PersonalInfoType = {
  fullname: "John Doe",
  position: "Frontend Developer",
};

const contactsDefault: ContactsType = {
  phoneNumber: "+1 (123) 456-7890",
  email: "aB0kx@example.com",
  address: "123 Main St, Anytown USA",
};

const educationDefault: EducationType[] = [
  {
    courseName: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    date: "2010 - 2014",
    uuid: "1",
  },
  {
    courseName: "Bachelor of Mathematics",
    institution: "University of California, Berkeley",
    date: "2008 - 2010",
    uuid: "2",
  },
];

const skillsDefault: SkillsType[] = [
  {
    skill: "HTML",
    id: "1",
  },
  {
    skill: "CSS",
    id: "2",
  },
  {
    skill: "JavaScript",
    id: "3",
  },
];

const summaryDefault = `Dedicated and passionate front-end developer with a strong background in HTML, CSS, and JavaScript. Proficient in React and TypeScript, experienced in working with design systems and developing user-centric applications. Strong problem-solving skills and ability to work effectively in a team environment. Seeking a challenging role where I can utilize my skills and contribute to the success of a dynamic organization.`;

const experienceDefault: ExperienceType[] = [
  {
    id: "1",
    position: "Frontend Developer",
    company: "Company 1",
    date: "2022 - Present",
    description: ["Description 1", "Description 2"],
  },
  {
    id: "2",
    position: "Frontend Developer",
    company: "Company 2",
    date: "2021 - 2022",
    description: ["Description 1", "Description 2"],
  },
  {
    id: "3",
    position: "Frontend Developer",
    company: "Company 3",
    date: "2020 - 2021",
    description: ["Description 1", "Description 2"],
  },
];

export {
  personalInfoDefault,
  contactsDefault,
  educationDefault,
  skillsDefault,
  summaryDefault,
  experienceDefault,
};

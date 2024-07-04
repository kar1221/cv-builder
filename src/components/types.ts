interface EducationType {
  courseName: string;
  institution: string;
  date: string;
  uuid: string;
}

interface ContactsType {
  phoneNumber: string;
  email: string;
  address: string;
}

interface PersonalInfoType {
  fullname: string;
  position: string;
}

interface SkillsType {
  skill: string;
  id: string;
}

interface ExperienceType {
  id: string;
  position: string;
  company: string;
  date: string;
  description: string[];
}

export type {
  ContactsType,
  PersonalInfoType,
  EducationType,
  SkillsType,
  ExperienceType,
};

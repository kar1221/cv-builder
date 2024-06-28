interface Education {
  courseName: string;
  institution: string;
  date: string;
  uuid: string;
}

interface Contacts {
  phoneNumber: string;
  email: string;
  address: string;
}

interface PersonalInfo {
  fullname: string;
  position: string;
}

export type { Contacts, PersonalInfo, Education };

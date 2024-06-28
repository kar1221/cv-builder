import type { PersonalInfo, Contacts, Education } from "./types";

const personalInfoDefault: PersonalInfo = {
  fullname: "John Doe",
  position: "Frontend Developer",
};

const contactsDefault: Contacts = {
  phoneNumber: "+1 (123) 456-7890",
  email: "aB0kx@example.com",
  address: "123 Main St, Anytown USA",
};

const educationDefault: Education[] = [
  {
    courseName: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    date: "2010 - 2014",
    uuid: "1",
  },
  {
    courseName: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    date: "2010 - 2014",
    uuid: "2",
  },
];

export { personalInfoDefault, contactsDefault, educationDefault };

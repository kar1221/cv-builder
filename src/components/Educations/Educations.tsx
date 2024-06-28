import { Education } from "../types";

function Educations(props: EducationProps) {
  const { educationList, onEducationChange } = props;

  return educationList.map((education) => (
    <div key={education.uuid}>
      <h3>{education.courseName}</h3>
      <p>{education.institution}</p>
      <p>{education.date}</p>
    </div>
  ));
}

interface EducationProps {
  educationList: Education[];
  onEducationChange: (value: Education[]) => void;
}

export default Educations;

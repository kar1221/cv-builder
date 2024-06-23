const FormRow = (props: FormRowProps) => {
  const { children } = props;
  return <div className="flex gap-8 mb-6 last:mb-0">{children}</div>;
};

interface FormRowProps {
  children?: React.ReactNode;
}

export default FormRow;

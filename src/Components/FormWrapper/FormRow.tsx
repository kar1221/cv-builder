const FormRow = (props: FormRowProps) => {
  const { children } = props;
  return (
    <div className="mb-6 flex flex-col gap-4 last:mb-0 sm:flex-row">
      {children}
    </div>
  );
};

interface FormRowProps {
  children?: React.ReactNode;
}

export default FormRow;

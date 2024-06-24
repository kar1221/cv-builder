const Form = (props: FormProps) => {
  const { title, children } = props;
  return (
    <form className="flex w-full flex-col rounded-sm bg-zinc-50 p-8 shadow-form">
      <h2 className="font-roboto text-xl font-semibold text-zinc-600">
        {title}
      </h2>
      {title && <hr className="my-4 border border-zinc-200" />}
      {children}
    </form>
  );
};

interface FormProps {
  title?: string;
  children?: React.ReactNode;
}

export default Form;

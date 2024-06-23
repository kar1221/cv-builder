const Form = (props: FormProps) => {
  const { title, children } = props;
  return (
    <form className="-mt-16 w-full max-w-form rounded-sm bg-zinc-50 p-8 shadow-form flex flex-col">
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

import React from "react";

function Form(props: FormProps) {
  const { children } = props;
  return (
    <form className="grid h-max w-full max-w-4xl grid-rows-form overflow-hidden bg-zinc-50 px-8 py-4">
      {children}
    </form>
  );
}

interface FormProps {
  children?: React.ReactNode;
}

export default Form;

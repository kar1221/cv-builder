import React from "react";

function Content(props: ContentProps) {
  const { children } = props;
  return <div className="grid w-full grid-cols-resumeContent">{children}</div>;
}

interface ContentProps {
  children?: React.ReactNode;
}

export default Content;

import React from "react";

function Always(props: AlwaysProps) {
  const { children } = props;

  return children;
}

interface AlwaysProps {
  children?: React.ReactNode;
}

export default Always;

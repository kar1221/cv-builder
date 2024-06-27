import React from "react";

function Hidden(props: HiddenProps) {
  const { children } = props;

  return children;
}

interface HiddenProps {
  children?: React.ReactNode;
}

export default Hidden;

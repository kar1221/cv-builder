import React from "react";

function Visible(props: VisibleProps) {
  const { children } = props;

  return children;
}

interface VisibleProps {
  children?: React.ReactNode;
}

export default Visible;

import React from "react";

// I am not sure if I should refactor three of those wrapper components to one, but I'll leave it as it is for now.
/**
 * Elements wrapped inside of the `Visible` component will show on screen only when not in editing mode.
 */
function Visible(props: VisibleProps) {
  const { children } = props;

  return children;
}

interface VisibleProps {
  children?: React.ReactNode;
}

export default Visible;

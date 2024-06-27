import React from "react";

// I am not sure if I should refactor three of those wrapper components to one, but I'll leave it as it is for now.
/**
 * Elements wrapped inside of the `Hidden` component will show on screen only when in editing mode.
 */
function Hidden(props: HiddenProps) {
  const { children } = props;

  return children;
}

interface HiddenProps {
  children?: React.ReactNode;
}

export default Hidden;

import { useState } from "react";

function useEditing(initialValue: boolean) {
  const [isEditing, setIsEditing] = useState(initialValue);

  const toggleIsEditing = () => setIsEditing(!isEditing);

  return { isEditing, toggleIsEditing } as const;
}

function useHovering(initialValue: boolean) {
  const [isHovering, setIsHovering] = useState(initialValue);

  const handleOnEnter = () => setIsHovering(true);
  const handleOnLeave = () => setIsHovering(false);

  return { isHovering, handleOnEnter, handleOnLeave } as const;
}

export { useEditing, useHovering };

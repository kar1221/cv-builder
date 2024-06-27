import { useState } from "react";

function useEditing(initialValue: boolean) {
  const [isEditing, setIsEditing] = useState(initialValue);

  const toggleIsEditing = () => setIsEditing(!isEditing);

  return { isEditing, toggleIsEditing } as const;
}

function useHovering(initialValue: boolean) {
  const [isHovering, setIsHovering] = useState(initialValue);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return { isHovering, handleMouseEnter, handleMouseLeave } as const;
}

export { useEditing, useHovering };

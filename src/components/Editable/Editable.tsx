import React from "react";
import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";
import { useHovering, useEditing } from "src/components/CustomHooks";
import Hidden from "./Hidden";
import Visible from "./Visible";
import Always from "./Always";

function Editable(props: EditableProps) {
  const { isHovering, handleMouseEnter, handleMouseLeave } = useHovering(false);
  const { isEditing, toggleIsEditing } = useEditing(false);

  const { children, className } = props;

  const renderedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return null;

    if (child.type === Hidden && isEditing === true) return child;
    if (child.type === Visible && isEditing === false) return child;
    if (child.type === Always) return child;

    return null;
  });

  const editableStyle = twMerge(
    `relative border-b-2 trasnition-all duration-150 ease-in-out ${isHovering ? "border-indigo-500" : " border-transparent"}`,
    className
  );

  return (
    <div
      className={editableStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderedChildren}
      <button
        type="button"
        id="edit-button"
        className={`m-2 items-center absolute right-0 bottom-0 flex justify-center gap-2 rounded-md bg-indigo-600 p-2 font-Poppins font-medium text-zinc-50 transition-opacity duration-150 ease-in-out ${isHovering ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={toggleIsEditing}
      >
        <Icon
          icon={isEditing ? "mdi:pencil" : "mdi:pencil-off"}
          className="flex aspect-square h-5 w-auto"
        />
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
}

interface EditableProps {
  children?: React.ReactElement<
    typeof Hidden | typeof Visible | typeof Always
  >[];
  className?: string;
}

export default Editable;

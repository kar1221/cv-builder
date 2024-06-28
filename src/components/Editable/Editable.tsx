import React from "react";
import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";
import { useHovering, useEditing } from "src/components/CustomHooks";
import { deepMap } from "react-children-utilities";
import Hidden from "./Hidden";
import Visible from "./Visible";

/**
 * `Editable` is a component that allows you to create a component that can be edited.
 * * The component contains three types of children:
 * * - `Hidden`: This children will be shown when the component is in editing mode.
 * * - `Visible`: This children will be shown when the component is not in editing mode.
 */
function Editable(props: EditableProps) {
  const { isHovering, handleOnEnter, handleOnLeave } = useHovering(false);
  const { isEditing, toggleIsEditing } = useEditing(false);

  const { children, className, tabindex } = props;

  const renderedChildren = deepMap(children, (child) => {
    if (!React.isValidElement(child)) return null;
    if (child.type === Hidden && isEditing === false) return null;
    if (child.type === Visible && isEditing === true) return null;
    return child;
  });

  const editableStyle = twMerge(
    `relative trasnition-all duration-150 ease-in-out ${isHovering ? "scale-105" : "scale-100"}`,
    className
  );

  return (
    <div
      className={editableStyle}
      onMouseEnter={handleOnEnter}
      onMouseOver={handleOnEnter}
      onMouseLeave={handleOnLeave}
      onFocus={handleOnEnter}
      onBlur={handleOnLeave}
      tabIndex={tabindex}
    >
      {renderedChildren}

      <button
        type="button"
        className={`flex font-Poppins text-base text-zinc-600 gap-1 items-center absolute top-0 right-0 m-2 transition-opacity duration-150 ease-in-out ${isHovering ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={toggleIsEditing}
      >
        <Icon
          icon={isEditing ? "mdi:pencil-off" : "mdi:pencil"}
          className="h-5 w-5 cursor-pointer text-zinc-600"
        />
        {isEditing ? "Cancel" : "Edit"}
      </button>
    </div>
  );
}

interface EditableProps {
  children?: React.ReactNode;
  className?: string;
  tabindex?: number;
}

export default Editable;

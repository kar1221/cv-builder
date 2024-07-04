import React, { useMemo } from "react";
import { Icon } from "@iconify/react";
import { useHovering, useEditing } from "src/components/CustomHooks";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { deepMap } from "react-children-utilities";
import Hidden from "./Hidden";
import Visible from "./Visible";

const buttonStyles = cva("absolute font-Poppins text-zinc-600 flex m-0 gap-1", {
  variants: {
    size: {
      "extra-small": "text-xs",
      small: "text-sm",
      regular: "text-base",
      large: "text-lg",
      "extra-large": "text-xl",
    },
    position: {
      "top-left": "top-0 left-0",
      "top-right": "top-0 right-0",
      "bottom-left": "bottom-0 left-0",
      "bottom-right": "bottom-0 right-0",
      "top-center": "top-0 left-1/2 -translate-x-1/2",
      "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
      left: "left-0",
      right: "right-0",
    },
  },
  defaultVariants: {
    size: "regular",
  },
});

/**
 * `Editable` is a component that allows you to create a component that can be edited.
 * * The component contains three types of children:
 * * - `Hidden`: This children will be shown when the component is in editing mode.
 * * - `Visible`: This children will be shown when the component is not in editing mode.
 */
function Editable(props: EditableProps) {
  const [isMainHovering, handleMainOnEnter, handleMainOnLeave] =
    useHovering(false);
  const { isEditing, toggleIsEditing } = useEditing(false);

  const { children, tabindex, size, position, className, onDelete } = props;

  const [isButtonHovering, handleButtonOnEnter, handleButtonOnLeave] =
    useHovering(false);

  const renderedChildren = useMemo(
    () =>
      deepMap(children, (child) => {
        if (!React.isValidElement(child)) return null;
        if (child.type === Hidden && isEditing === false) return null;
        if (child.type === Visible && isEditing === true) return null;
        if (child.type === Editable) return null;
        return child;
      }),
    [children, isEditing]
  );

  let buttonVisibilityStyles;

  if (!isEditing && isMainHovering) {
    buttonVisibilityStyles = "opacity-100";
  } else if (isButtonHovering && isEditing) {
    buttonVisibilityStyles = "opacity-100";
  } else {
    buttonVisibilityStyles = "opacity-0";
  }

  const editableStyle = twMerge(
    "relative trasnition-all duration-150 ease-in-out",
    className
  );

  return (
    <div
      className={`${editableStyle}`}
      onMouseEnter={handleMainOnEnter}
      onMouseOver={handleMainOnEnter}
      onMouseLeave={handleMainOnLeave}
      onFocus={handleMainOnEnter}
      onBlur={handleMainOnLeave}
      tabIndex={tabindex}
    >
      {renderedChildren}
      <div className={buttonStyles({ size, position })}>
        {onDelete && (
          <button
            type="button"
            className={`${buttonVisibilityStyles} flex items-center transition-opacity duration-150 ease-in-out`}
            onClick={onDelete}
            onMouseEnter={handleButtonOnEnter}
            onMouseOver={handleButtonOnEnter}
            onMouseLeave={handleButtonOnLeave}
            onFocus={handleButtonOnEnter}
            onBlur={handleButtonOnLeave}
          >
            <Icon icon="mdi:delete-forever" className="text-red-500" />
            Delete
          </button>
        )}
        <button
          type="button"
          className={`${buttonVisibilityStyles} flex items-center transition-opacity duration-150 ease-in-out `}
          onClick={toggleIsEditing}
          onMouseEnter={handleButtonOnEnter}
          onMouseOver={handleButtonOnEnter}
          onMouseLeave={handleButtonOnLeave}
          onFocus={handleButtonOnEnter}
          onBlur={handleButtonOnLeave}
        >
          <Icon
            icon={isEditing ? "mdi:pencil-off" : "mdi:pencil"}
            className="text-zinc-600"
          />
          {isEditing ? "Confirm" : "Edit"}
        </button>
      </div>
    </div>
  );
}

interface EditableProps extends VariantProps<typeof buttonStyles> {
  children?: React.ReactNode;
  tabindex?: number;
  className?: string;
  onDelete?: () => void;
}

export default Editable;

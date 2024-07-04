import React from "react";

function Grid(props: GridProps) {
  const { colStart, colEnd, colSpan, children, className } = props;

  return (
    <div
      className={`col-start-${colStart} col-end-${colEnd} col-span-${colSpan} ${className}`}
    >
      {children}
    </div>
  );
}

interface GridProps {
  colStart?: number;
  colEnd?: number;
  colSpan?: number;

  children?: React.ReactNode;
  className?: string;
}

export default Grid;

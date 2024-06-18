import React, { ReactNode } from "react";

interface LeftContainerProps {
  children: ReactNode;
  width?: string;
}

const LeftContainer: React.FC<LeftContainerProps> = ({
  children,
  width = "w-[30%]",
}) => {
  return (
    <div className={`${width} h-[80vh] grid overflow-y-auto pr-2`}>
      {children}
    </div>
  );
};

export default LeftContainer;

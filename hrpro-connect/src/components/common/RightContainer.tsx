import React, { ReactNode } from "react";

interface RightContainerProps {
  children: ReactNode;
}

const RightContainer: React.FC<RightContainerProps> = ({ children }) => {
  return (
    <div className="w-[75%] h-[80vh] flex flex-col items-end gap-4 overflow-y-auto">
      {children}
    </div>
  );
};

export default RightContainer;

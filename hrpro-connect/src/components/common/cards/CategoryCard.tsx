import React, { ReactNode } from "react";

interface CategoryCard {
  id: number;
  title: string;
  bg: string;
  icon: ReactNode;
}

const CategoryCard: React.FC<CategoryCard> = ({ title, bg, icon }) => {
  return (
    <div
      className={`${bg} w-[22%] flex justify-center px-4 py-3 text-md font-light mx-1 text-textDark rounded-md hover:text-primary`}
    >
      {icon}
      <p>{title}</p>
    </div>
  );
};

export default CategoryCard;

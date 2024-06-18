"use client";

import React, { useState } from "react";
import { MenuItem } from "@/models";

interface SideNavigationBarProps {
  menuItems?: MenuItem[];
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const SideNavigationBar: React.FC<SideNavigationBarProps> = ({
  menuItems = [],
  active,
  setActive,
}) => {
  return (
    <div className="w-[25%] flex flex-col justify-center items-start shadow-md rounded-md border border-slate-100 mx-5">
      {menuItems &&
        menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`p-4 w-full ${
              active === item.id ? "text-primary bg-rose-50" : "text-textDark"
            } text-md font-medium cursor-pointer`}
          >
            {item.label}
          </div>
        ))}
    </div>
  );
};

export default SideNavigationBar;

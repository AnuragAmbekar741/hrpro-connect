"use client";

import React, { useState } from "react";
import logo from "../../../public/hrpro-logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BellOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons";

interface MenuItem {
  id: string;
  label: string;
}

interface AppBarProps {
  authStatus?: boolean;
  menuItems?: MenuItem[];
}

const AppBar: React.FC<AppBarProps> = ({
  authStatus = false,
  menuItems = [],
}) => {
  const router = useRouter();

  const [active, setActive] = useState<string>("home");

  const handleClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className={`w-full flex justify-between items-center py-5 px-20`}>
      <div
        onClick={() => handleClick("/")}
        className="w-1/6 flex justify-start items-center pr-10 hover-base"
      >
        <Image
          src={logo}
          width={100}
          height={100}
          alt="HrPro Logo"
          className="w-16 cursor-pointer"
        />
        <h3 className="text-2xl font-semibold leading-6 cursor-pointer">
          HrPro Connect
        </h3>
      </div>
      {authStatus ? (
        <>
          <div className="w-4/6 flex justify-start items-center">
            {menuItems &&
              menuItems.map((item: MenuItem) => (
                <button
                  key={item.id}
                  onClick={() => {
                    handleClick("/candidate/" + item.id);
                    setActive(item.id);
                  }}
                  className={`${
                    active === item.id ? "text-primary" : "text-textDark"
                  } text-sm font-normal mr-12 hover-base`}
                >
                  {item.label}
                </button>
              ))}
          </div>
          <div className="w-1/6 flex justify-end items-center">
            <button className="relative">
              <BellOutlined className="text-3xl" />
              <div className="border-1 rounded-[50%] w-4 h-4 absolute bg-green-500 top-0 left-4 flex justify-center items-center text-white text-xxs border-slate-500">
                1
              </div>
            </button>
            <button>
              <MessageOutlined className="text-3xl ml-7 mr-24" />
            </button>
            <button>
              <UserOutlined className="text-3xl" />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="w-4/5 flex justify-end items-center">
            <button
              onClick={() => handleClick("/auth")}
              className="custom-button hover-base"
            >
              Register
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AppBar;

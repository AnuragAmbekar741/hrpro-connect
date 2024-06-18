import React from "react";
import { LoginOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { signOutFirebase, resetUserLogin } from "@/redux/slice/userLoginSlice";
import { useRouter } from "next/navigation";

interface SettingsProps {
  isOpen: boolean;
}

const Settings: React.FC<SettingsProps> = ({ isOpen }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const handleLogout = async () => {
    await dispatch(signOutFirebase());
  };
  return (
    <div
      className={`${
        isOpen
          ? "grid absolute top-20 bg-gray-100 w-28 p-2 rounded-md item text-md font-medium"
          : "hidden"
      }`}
    >
      <div className="flex justify-center h-16"></div>
      <div className="flex justify-center"></div>
      <div
        onClick={handleLogout}
        className="flex justify-between border-t border-slate-300 px-2 py-1 hover:text-primary"
      >
        <p className="">Logout</p>
        <LoginOutlined className="" />
      </div>
    </div>
  );
};

export default Settings;

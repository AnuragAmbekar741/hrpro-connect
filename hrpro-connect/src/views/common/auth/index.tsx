"use client";
import React, { useState, useEffect } from "react";
import UserAuthForm from "@/components/common/auth/UserAuthForm";
import UserRoleForm from "@/components/common/auth/UserRoleForm";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { signOutFirebase, resetUserLogin } from "@/redux/slice/userLoginSlice";
import { resetUserSignup } from "@/redux/slice/userSignupSlice";

const UserAuthView = () => {
  const [selectedRole, setSelectedRole] = useState<"candidate" | "recruiter">(
    "candidate"
  );
  const dispatch = useDispatch<AppDispatch>();
  const [formStep, setFormStep] = useState<"role" | "auth">("role");

  const userReset = async () => {
    await dispatch(signOutFirebase());
    dispatch(resetUserLogin());
    dispatch(resetUserSignup());
  };

  useEffect(() => {
    userReset();
  }, []);

  return (
    <div className="flex w-full justify-between items-center px-20">
      <div className="w-[70%]"></div>
      <div className="w-[40%]">
        {formStep === "role" ? (
          <UserRoleForm
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
            setFormStep={setFormStep}
          />
        ) : (
          <UserAuthForm selectedRole={selectedRole} setFormStep={setFormStep} />
        )}
      </div>
    </div>
  );
};

export default UserAuthView;

"use client";
import UserAuthForm from "@/components/common/auth/UserAuthForm";
import UserRoleForm from "@/components/common/auth/UserRoleForm";
import React, { useState } from "react";

const UserAuthView = () => {
  const [selectedRole, setSelectedRole] = useState<"Candidate" | "Recruiter">(
    "Candidate"
  );
  const [formStep, setFormStep] = useState<"role" | "auth">("role");
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
